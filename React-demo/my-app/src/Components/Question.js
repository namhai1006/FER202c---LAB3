// Question.js (Child Component for displaying questions)
import React, { useState } from 'react';

const Question = ({ question, options, onAnswerSelect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    onAnswerSelect(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionSelect(option)}
            style={{
              cursor: 'pointer',
              textDecoration: selectedAnswer === option ? 'underline' : 'none',
              color: selectedAnswer === option ? 'green' : 'black',
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default Question;
