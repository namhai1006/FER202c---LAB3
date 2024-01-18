// QuizApp.js (Main Component)
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: '1',
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    // Add more questions here
    {
      id: '2',
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
      correctAnswer: 'Jupiter',
    },
  ];

  const handleAnswerSelect = (selectedAnswer) => {
    const isCorrect = questions[currentQuestion].correctAnswer === selectedAnswer;

    setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswerSelect={handleAnswerSelect}
        />
      ) : (
        <Result score={score} onRestart={resetQuiz} />
      )}
    </div>
  );
};

export default QuizApp;
