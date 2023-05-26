import React, { useState } from 'react';
import '../styles1/mindsync.css'
import Quiz from './Quiz';
import Navbar from './Navbar';
const MindSync = () => {
    const [imageurl, setimageurl] = useState('')
    const [message, setMessage] = useState('')
    const jokeRegex = /Joke:([\s\S]*?)Poem:/;
    const jokeMatch = message.match(jokeRegex);
    const joke = jokeMatch && jokeMatch[1].trim();
    const API_KEY = import.meta.env.VITE_API_KEY;
    const youtubeLinkRegex = /https:\/\/www\.youtube\.com\/watch\?v=[^\s]+/g;
    const youtubeLinksMatch = message.match(youtubeLinkRegex);
    const youtubeLinks = youtubeLinksMatch || [];
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

    async function createImage() {
        try {
            const imageData = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "prompt": "funny cat",
                    "n": 2,
                    "size": "512x512"
                })
            })
            const imgData = await imageData.json();
            console.log(imgData)
            setimageurl(imgData.data[0].url)
        }
        catch (e) {
            console.log(e)
        }
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

    async function feedData() {



        let systemMessage = {
            "role": "user",
            "content": "act as a content suggestor where you should provide me content based the parameters which I am providing you to boost my mood"
        };

        var prompt = { "role": "user", "content": `Following are my mood defining things: 1.emotional state :${emotionalState} 2.HapinessLevel :${happinessLevel} 3.StressLevel : ${stressLevel} 4.Energylevel: ${energyLevel} 5.positiveEvent: ${positiveEvent}based on this tell me a joke or a poem and also suggest some songs and fun videos on youtube, suggest some podcast related to my mood and energy levels  also provide links for each and everything make sure that the links are capable of fitting in html iframe ok! I want different putput on each prompt links should be different everytime try to understand also provide some blog links` }
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
            setMessage(data.choices[0].message.content)


        });


    }



    return (
        <div className='card-container'>
            <Navbar></Navbar>
            <div className="card-container2">
                <div>
                    
                    <img src={imageurl} alt="" />
                </div>
                <div className="joke-card">
                    {joke}
                </div>
            </div>


            <div className="mood-assessment">


                {quizobject.map((item) => {
                    console.log(item)
                })}
                {
                    quizobject.map((item, index) => (
                        <>
                            <Quiz quizobject2={item} key={index} sendResponseToParent={handleResponse}></Quiz>
                            <br />
                        </>

                    ))
                }
                <button type="submit" onClick={() => {
                    feedData();
                    createImage();
                    window.scrollTo(0, 0)
                }} >submit</button>
            </div>
            <div className='youtube-videos'>
                {youtubeLinks.length > 0 && (
                    <div >
                        <h3>YouTube Videos:</h3>
                        {youtubeLinks.map((link, index) => (
                            <div key={index}>
                                <iframe
                                    
                                    src={link.replace('watch?v=', 'embed/')}
                                    title={`YouTube Video ${index + 1}`}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MindSync;
