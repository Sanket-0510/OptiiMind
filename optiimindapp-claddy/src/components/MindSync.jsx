import React, { useState } from 'react';
import '../styles1/mindsync.css'
const MindSync = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    async function feedData(response) {
         
        

        let systemMessage = {
            "role": "user",
            "content": "act as a content suggestor where you should provide me content based the parameters which I am providing you to boost my mood"
        };

        var prompt = {"role": "user", "content":`Following are my mood defining things: 1.emotional state :${response.emotionalState}based on this tell me a joke or a poem and also suggest some songs and fun videos on youtube`}
        console.log(prompt);
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                prompt
            ]
        }
        const data = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody) // Change 'data' to 'body'
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
        });
        console.log("the data is " + data.choices[0].message.content)
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
        <div className="mood-assessment">
            <h2>Mood Assessment</h2>
            <label>
                How would you describe your current emotional state?
                <br />
                <input
                    type="radio"
                    name="emotionalState"
                    value="Happy"
                    onChange={handleInputChange}
                /> Happy
                <input
                    type="radio"
                    name="emotionalState"
                    value="Sad"
                    onChange={handleInputChange}
                /> Sad
                <input
                    type="radio"
                    name="emotionalState"
                    value="Angry"
                    onChange={handleInputChange}
                /> Angry
                <input
                    type="radio"
                    name="emotionalState"
                    value="Anxious"
                    onChange={handleInputChange}
                /> Anxious
                <input
                    type="radio"
                    name="emotionalState"
                    value="Neutral"
                    onChange={handleInputChange}
                /> Neutral
            </label>

            <label>
                On a scale of 1 to 10, how would you rate your happiness level right now?
                <br />
                <input
                    type="number"
                    name="happinessLevel"
                    min="1"
                    max="10"
                    onChange={handleInputChange}
                />
            </label>

            {/* More questions... */}

            <label>
                Are you currently experiencing any physical symptoms such as headaches, fatigue, or muscle tension?
                <br />
                <input
                    type="checkbox"
                    name="physicalSymptoms"
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Are you finding it difficult to concentrate or stay focused on tasks?
                <br />
                <input
                    type="checkbox"
                    name="concentrationDifficulties"
                    onChange={handleInputChange}
                />
            </label>

            {/* More questions... */}

            <button onClick={() => feedData(response)}>Submit</button>
        </div>
    );
};

export default MindSync;
