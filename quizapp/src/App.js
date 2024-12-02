import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
    answer: "Albert Einstein",
  },
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  // Add more questions here as needed.
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Application</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <div className="question-section">
            <h2>
              Question {currentQuestionIndex + 1}/{questions.length}
            </h2>
            <p>{questions[currentQuestionIndex].question}</p>
          </div>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          <div className="score-tracker">
            <h3>Your Current Score: {score}</h3>
          </div>
        </div>
      ) : (
        <div className="score-section">
          <h2>Your Final Score: {score} / {questions.length}</h2>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;
