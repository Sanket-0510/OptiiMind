import React, { useState, useEffect } from 'react';


const totalTime = 10; // Total duration of the breathing exercise (in seconds)
const inhaleTime = 7; // Inhale duration (in seconds)
const exhaleTime = 8; // Exhale duration (in seconds)
const holdTime = 4; // Hold duration (in seconds)

function Zenflow() {
  const [timer, setTimer] = useState(totalTime);
  const [phase, setPhase] = useState('inhale');

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      switch (phase) {
        case 'inhale':
          setTimer(holdTime);
          setPhase('hold');
          break;
        case 'hold':
          setTimer(exhaleTime);
          setPhase('exhale');
          break;
        case 'exhale':
          setTimer(inhaleTime);
          setPhase('inhale');
          break;
        default:
          break;
      }
    }
  }, [timer, phase]);

  return (
    <div className="zenflow">
      <div className="container">
        <h1>Breathe</h1>
        <div className={`circle ${phase}`}></div>
        <div className="timer">{timer}</div>
        <div className="phase">{phase}</div>
      </div>
    </div>
  );
}

export default Zenflow;
