import React, { useState } from 'react';
import '../styles1/mindsync.css'
import Quiz from './Quiz';
const MindSync = () => {

    var emotionalState, happinessLevel, stressLevel, energyLevel, positiveEvent;

    const handleResponse = (response) => {

        if (response.emotionalstate != null) emotionalState = response.emotionalstate
        if (response.happinessLevel != null) happinessLevel = response.happinessLevel
        if (response.stressLevel != null) stressLevel = response.stressLevel
        if (response.energyLevel != null) energyLevel = response.energyLevel
        if (response.positiveEvent != null) positiveEvent = response.positiveEvent



        console.log(emotionalState, happinessLevel, stressLevel, energyLevel, positiveEvent)
        console.log(response)


    }


    const quizobject = [
        {
            quesion: "How would you describe your current emotional state?",
            stateName: 'emotionalstate',
            options: [
                "happy",
                "sad",
                "angry",
                "anxios",
                "neutral"
            ]
        },
        {
            quesion: "On a scale of 1 to 10, how would you rate your happiness level right now?",
            stateName: 'happinessLevel',
            options: [
                "1-3(very low)",
                "moderate",
                "high"
            ]
        },
        {
            quesion: "Which of the following best describes your stress level at the moment?",
            stateName: 'stressLevel',
            options: [
                "low",
                "moderate",
                "high",
                "very high"
            ]
        }, {
            quesion: "How would you describe your energy level today",
            stateName: 'energyLevel',
            options: [
                "low",
                "high",
                "very high",
                "moderate"
            ]
        }, {
            quesion: "Have you experienced any recent positive events or achievements that have boosted your mood?",
            stateName: 'positiveEvent',
            options: [
                "yes",
                "no"
            ]
        }]
      const API_KEY = import.meta.env.VITE_API_KEY;
      async function feedData() {
       
        

        let systemMessage = {
            "role": "user",
            "content": "act as a content suggestor where you should provide me content based the parameters which I am providing you to boost my mood"
        };

        var prompt = {"role": "user", "content":`Following are my mood defining things: 1.emotional state :${emotionalState} 2.HapinessLevel :${happinessLevel} 3.StressLevel : ${stressLevel} 4.Energylevel: ${energyLevel} 5.positiveEvent: ${positiveEvent}based on this tell me a joke or a poem and also suggest some songs and fun videos on youtube also provide links for each and everything`}
        console.log(prompt);
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                prompt
            ]
        }
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody) // Change 'data' to 'body'
        }).then((data) => {
            return data.json()
        }).then((data) => {
           
            console.log(data.choices[0].message.content)
        });
       
    }
    const [response, setResponse] = useState({
        emotionalState: '',
        happinessLevel: '',
        stressLevel: '',
        energyLevel: '',
        physicalSymptoms: false,
        concentrationDifficulties: false,
        positiveEvents: false,
        challenges: false,
        sleepQuality: '',
        lifeChanges: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const updatedValue = type === 'checkbox' ? checked : value;

        setResponse((prevResponse) => ({
            ...prevResponse,
            [name]: updatedValue
        }));
    };

    return (
        <div className="">
            {quizobject.map((item) => {
                console.log(item)
            })}
            {
                quizobject.map((item, index) => (

                    <Quiz quizobject2={item} key={index} sendResponseToParent={handleResponse}></Quiz>


                ))
            }
            <button type= "submit" onClick={feedData}>submit</button>
        </div>
    );
};

export default MindSync;
