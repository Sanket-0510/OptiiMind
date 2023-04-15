import React, { useState } from 'react';
import '../Styles/blog.css'; // Import CSS file for styling

const MyForm = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    medium: false,
    "Zen Habits": false,
    "Lifehack": false,
    "Pick the Brain": false,
    "Life Hacks": false,
    "Lifehacker": false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // Update checkbox values
    setCheckboxValues({ ...checkboxValues, [name]: checked });
  }

  return (
    <form className="my-form">
      <h1 className="form-title">My Interests</h1>
      <div className="checkbox-container">
        {/* Checkbox for medium */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="medium"
            checked={checkboxValues.medium}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          Medium
        </label>

        {/* Checkbox for Zen Habits */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="Zen Habits"
            checked={checkboxValues["Zen Habits"]}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          Zen Habits
        </label>

        {/* Checkbox for Lifehack */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="Lifehack"
            checked={checkboxValues["Lifehack"]}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          Lifehack
        </label>

        {/* Checkbox for Pick the Brain */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="Pick the Brain"
            checked={checkboxValues["Pick the Brain"]}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          Pick the Brain
        </label>

        {/* Checkbox for Life Hacks */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="Life Hacks"
            checked={checkboxValues["Life Hacks"]}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          Life Hacks
        </label>

        {/* Checkbox for Lifehacker */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="Lifehacker"
            checked={checkboxValues["Lifehacker"]}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          Lifehacker
        </label>
      </div>

      {/* Display selected values */}
      <p className="selected-values">Selected values: {Object.entries(checkboxValues).filter(([key, value]) => value).map(([key]) => key).join(', ')}</p>
    </form>
  );
};

export default MyForm;
