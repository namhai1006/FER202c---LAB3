// Result.js (Child Component for displaying the result)
import React from 'react';

const Result = ({ score, onRestart }) => {
  return (
    <div>
     <h1>Quiz Ended</h1>
      <h2>Your Score: {score}</h2>
      <p>Thank you for completing the quiz!</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
