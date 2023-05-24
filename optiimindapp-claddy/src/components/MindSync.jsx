import React, { useState } from 'react';
import '../styles1/mindsync.css'
const MindSync = () => {
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
    <div className='mood-assessment'>
      <h2>Mood Assessment</h2>
      <label>
        How would you describe your current emotional state?
        <br />
        <input
          type="text"
          name="emotionalState"
          onChange={handleInputChange}
        />
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

      <button onClick={() => console.log(response)}>Submit</button>
    </div>
  );
};

export default MindSync;
