import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  CheckCircle, 
  BarChart2,
  XCircle,
  Book,
  FileText,
  Archive,
  Info,
  Star
} from "react-feather";

export default function QuizApplication() {
  const [questions] = useState([
    {
      id: 1,
      text: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "2 + 2 always equals 4.",
      difficulty: "Easy",
      topic: "Basic Arithmetic",
      points: 1
    },
    {
      id: 2,
      text: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      answer: "Paris",
      explanation: "Paris is the capital of France.",
      difficulty: "Medium",
      topic: "Geography",
      points: 2
    },
    {
      id: 3,
      text: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
      explanation: "Jupiter is the largest planet in the solar system.",
      difficulty: "Medium",
      topic: "Astronomy",
      points: 2
    },
    {
      id: 4,
      text: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: "Leonardo da Vinci",
      explanation: "The Mona Lisa was painted by Leonardo da Vinci.",
      difficulty: "Hard",
      topic: "Art History",
      points: 3
    },
    {
      id: 5,
      text: "What is the chemical symbol for gold?",
      options: ["Ag", "Fe", "Au", "Cu"],
      answer: "Au",
      explanation: "Au is the chemical symbol for gold.",
      difficulty: "Hard",
      topic: "Chemistry",
      points: 3
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Array(questions.length).fill(null));
  const [detailedResults, setDetailedResults] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [sidebarTab, setSidebarTab] = useState('overview');

  const [timeRemaining, setTimeRemaining] = useState(15 * 60);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (timerActive && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      setFinished(true);
      setTimerActive(false);
    }
  }, [timeRemaining, timerActive]);

  const handleQuestionSelect = (index) => {
    if (finished || reviewMode) {
      setCurrentQuestion(index);
      setSelectedOption(detailedResults[index]?.selected || answeredQuestions[index]);
    } else {
      // Allow navigation during the quiz too
      setCurrentQuestion(index);
      setSelectedOption(answeredQuestions[index]);
    }
  };

  const handleNext = () => {
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = selectedOption;
    setAnsweredQuestions(newAnsweredQuestions);

    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + questions[currentQuestion].points); 
      // Update to use question points instead of just adding 1
    }

    setDetailedResults([...detailedResults, {
      question: questions[currentQuestion].text,
      selected: selectedOption,
      correct: questions[currentQuestion].answer,
      explanation: questions[currentQuestion].explanation,
      difficulty: questions[currentQuestion].difficulty,
      topic: questions[currentQuestion].topic,
      points: questions[currentQuestion].points,
      isCorrect: selectedOption === questions[currentQuestion].answer
    }]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(newAnsweredQuestions[currentQuestion + 1]);
    } else {
      setFinished(true);
      setTimerActive(false);
    }
  };

  const calculateProgress = () => {
    const answeredCount = answeredQuestions.filter(answer => answer !== null).length;
    return (answeredCount / questions.length) * 100;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const renderSidebarContent = () => {
    switch(sidebarTab) {
      case 'overview':
        return (
          <div className="p-4 space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
              <h3 className="font-semibold text-blue-800 flex items-center">
                <Info className="mr-2" size={20} />
                Quiz Overview
              </h3>
              <ul className="mt-2 text-sm text-blue-700">
                <li>Total Questions: {questions.length}</li>
                <li>Total Points: {questions.reduce((sum, q) => sum + q.points, 0)}</li>
                <li>Time Limit: 15 minutes</li>
              </ul>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
              <h3 className="font-semibold text-green-800 flex items-center">
                <Star className="mr-2" size={20} />
                Performance Targets
              </h3>
              <ul className="mt-2 text-sm text-green-700">
                <li>Pass Score: 60%</li>
                <li>Recommended: 80%+</li>
              </ul>
            </div>
          </div>
        );
      case 'topics':
        return (
          <div className="p-4">
            <h3 className="font-semibold mb-3 text-gray-700 flex items-center">
              <Book className="mr-2" size={20} />
              Question Navigation
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {questions.map((_, index) => {
                let buttonClass = "w-full aspect-square rounded-lg text-center flex items-center justify-center font-bold transition-all duration-300 shadow-md cursor-pointer";
                
                if (finished || reviewMode) {
                  // In review mode, show answered/current state
                  if (currentQuestion === index) {
                    buttonClass += " bg-blue-600 text-white scale-105";
                  } else if (detailedResults[index]?.isCorrect) {
                    buttonClass += " bg-green-400 text-white";
                  } else if (detailedResults[index]) {
                    buttonClass += " bg-red-400 text-white";
                  } else {
                    buttonClass += " bg-gray-200 text-gray-600";
                  }
                } else {
                  // During the quiz
                  if (currentQuestion === index) {
                    buttonClass += " bg-blue-600 text-white scale-105";
                  } else if (answeredQuestions[index] !== null) {
                    buttonClass += " bg-blue-400 text-white";
                  } else {
                    buttonClass += " bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600";
                  }
                }
                
                return (
                  <div 
                    key={index} 
                    className={buttonClass}
                    onClick={() => handleQuestionSelect(index)}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 'results':
        return (
          <div className="p-4">
            <h3 className="font-semibold mb-3 text-gray-700 flex items-center">
              <FileText className="mr-2" size={20} />
              Detailed Results
            </h3>
            <div className="space-y-2">
              <div className="bg-green-50 p-2 rounded">
                <div className="flex justify-between">
                  <span className="text-sm text-green-800">Correct Answers</span>
                  <span className="font-bold text-green-800">
                    {detailedResults.filter(r => r.isCorrect).length}/{questions.length}
                  </span>
                </div>
              </div>
              <div className="bg-red-50 p-2 rounded">
                <div className="flex justify-between">
                  <span className="text-sm text-red-800">Incorrect Answers</span>
                  <span className="font-bold text-red-800">
                    {detailedResults.filter(r => !r.isCorrect).length}/{questions.length}
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-800">Total Score</span>
                  <span className="font-bold text-blue-800">
                    {score}/{questions.reduce((sum, q) => sum + q.points, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex font-sans">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg border-r rounded-lg transition-all duration-300 flex flex-col ${isSidebarCollapsed ? "w-16" : "w-64"}`}>
        <div className="p-4 flex justify-between items-center">
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isSidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
          
          {!isSidebarCollapsed && (
            <div className="flex items-center text-gray-700">
              <Clock className="mr-2 text-blue-500" size={20} />
              {formatTime(timeRemaining)}
            </div>
          )}
        </div>

        {!isSidebarCollapsed && (
          <div className="flex border-b">
            {[
              { icon: Info, tab: 'overview' },
              { icon: Book, tab: 'topics' },
              { icon: Archive, tab: 'results' }
            ].map((item) => (
              <button
                key={item.tab}
                onClick={() => setSidebarTab(item.tab)}
                className={`flex-1 p-3 transition-colors ${
                  sidebarTab === item.tab 
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} className="mx-auto" />
              </button>
            ))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {!isSidebarCollapsed && renderSidebarContent()}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="p-6">
          {/* Progress Section */}
          <div className="mb-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Progress</span>
              <span className="text-gray-600">{calculateProgress().toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>

          {/* Review Mode button */}
          {finished && (
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => setReviewMode(!reviewMode)} 
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <BarChart2 size={20} className="mr-2" /> 
                {reviewMode ? "Exit Review" : "Review Test"}
              </button>
            </div>
          )}

          {/* Quiz Content */}
          {!finished || reviewMode ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Question {currentQuestion + 1}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {questions[currentQuestion].text}
              </p>
              
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => {
                  let buttonClass = "w-full py-3 rounded-lg text-lg border transition-all";
                  
                  if (reviewMode) {
                    if (option === questions[currentQuestion].answer) {
                      buttonClass += " bg-green-100 border-green-300 text-green-800";
                    }
                    if (option === selectedOption && option !== questions[currentQuestion].answer) {
                      buttonClass += " bg-red-100 border-red-300 text-red-800";
                    }
                  } else {
                    buttonClass += selectedOption === option 
                      ? " bg-blue-500 text-white" 
                      : " bg-gray-100 hover:bg-gray-200 text-gray-800";
                  }
                  
                  return (
                    <button 
                      key={option} 
                      onClick={() => !reviewMode && setSelectedOption(option)} 
                      disabled={reviewMode}
                      className={buttonClass}
                    >
                      {option}
                      {reviewMode && option === questions[currentQuestion].answer && (
                        <CheckCircle className="inline ml-2 text-green-600" size={20} />
                      )}
                      {reviewMode && option === selectedOption && option !== questions[currentQuestion].answer && (
                        <XCircle className="inline ml-2 text-red-600" size={20} />
                      )}
                    </button>
                  );
                })}
              </div>
              
              {!reviewMode && (
                <button 
                  onClick={handleNext} 
                  disabled={!selectedOption} 
                  className="w-full mt-6 py-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 disabled:bg-gray-300 transition-all"
                >
                  {currentQuestion + 1 === questions.length ? "Finish Test" : "Next Question"}
                </button>
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Detailed Results</h2>
              {detailedResults.map((result, index) => (
                <div 
                  key={index} 
                  className={`mb-4 p-4 rounded-lg border-l-4 ${
                    result.isCorrect 
                      ? 'bg-green-50 border-green-500' 
                      : 'bg-red-50 border-red-500'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-800">Q{index + 1}: {result.question}</p>
                    {result.isCorrect ? (
                      <CheckCircle className="text-green-600" size={20} />
                    ) : (
                      <XCircle className="text-red-600" size={20} />
                    )}
                  </div>
                  <p><strong>Your Answer: </strong>{result.selected}</p>
                  <p><strong>Correct Answer: </strong>{result.correct}</p>
                  <p><strong>Explanation: </strong>{result.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}