import React from 'react';


const Quiz = ({ quizobject2 ,sendResponseToParent}) => {
   
    const [response, setResponse] = React.useState({
        emotionalstate: null,
        happinessLevel: null,
        stressLevel: null,
        energyLevel: null,
        positiveEvent: false,
       
    });
    
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const updatedValue = value
      
        setResponse((prevResponse) => ({
            
            [name]: updatedValue
          }));
          sendResponseToParent(response)
    };
    React.useEffect(() => {
        sendResponseToParent(response);
      }, [response, sendResponseToParent]);

  return (
    <div>
      <h3 style={{ color: "white" }}>{quizobject2.quesion}</h3>
      
      <div>
        <ul >
          {quizobject2.options.map((item, index) => (
           
           <li key={index} style={{display:"flex", flexDirection:"row"}}>
           <input type="radio" style={{ color: "white", marginBottom:"6px", marginRight:"6px" }} value = {item} onChange={handleInputChange} name={quizobject2.stateName}/>
            <br />
           <label htmlFor={`option-${index}`} style={{ color: "white" }}>{item}</label>
           </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default Quiz;
