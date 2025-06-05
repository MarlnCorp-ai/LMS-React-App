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
  Star,
} from "react-feather";
import { Link } from "react-router-dom";
import intermediate from "../../images/Badges/intermediate.png";

export default function QuizApplication() {
  const [questions] = useState([
    /* ----------  APIs & Web  ---------- */
    {
      id: 1,
      text: "Which HTTP status code indicates that a request successfully created a new resource?",
      options: [
        "200 OK",
        "201 Created",
        "204 No Content",
        "301 Moved Permanently",
      ],
      answer: "201 Created",
      explanation:
        "A 201 response means the server fulfilled the request and a new resource was created—often returned after POST operations.",
      difficulty: "Easy",
      topic: "APIs",
      points: 1,
    },
    {
      id: 2,
      text: "In RESTful design, which constraint requires that each request from client to server contains all information necessary to understand the request?",
      options: [
        "Statelessness",
        "Cacheable",
        "Layered System",
        "Code-on-Demand",
      ],
      answer: "Statelessness",
      explanation:
        "Statelessness means the server stores no client context between requests; every request is self-contained.",
      difficulty: "Medium",
      topic: "APIs",
      points: 2,
    },
    /* ----------  Programming Basics  ---------- */
    {
      id: 3,
      text: "In JavaScript, the '===' operator does what compared to '=='?",
      options: [
        "Performs loose equality with type coercion",
        "Assigns a value to a variable",
        "Performs strict equality without type coercion",
        "Compares object references only",
      ],
      answer: "Performs strict equality without type coercion",
      explanation:
        "`===` checks both value and type, while `==` allows type coercion during comparison.",
      difficulty: "Easy",
      topic: "Programming",
      points: 1,
    },
    {
      id: 4,
      text: "Which built-in Python data structure offers average O(1) time for insertion, deletion, and membership tests?",
      options: ["list", "set", "tuple", "deque"],
      answer: "set",
      explanation:
        "Python sets are implemented as hash tables, giving constant-time performance on average for these operations.",
      difficulty: "Medium",
      topic: "Data Structures",
      points: 2,
    },
    /* ----------  Version Control  ---------- */
    {
      id: 5,
      text: "In Git, which command discards local modifications in a tracked file and restores the last committed version?",
      options: [
        "`git stash`",
        "`git checkout -- <file>`",
        "`git reset --soft HEAD`",
        "`git branch -d <branch>`",
      ],
      answer: "`git checkout -- <file>`",
      explanation:
        "The checkout command (or `git restore` in newer versions) reverts the specified file to the state of the last commit, losing local changes.",
      difficulty: "Medium",
      topic: "Version Control",
      points: 2,
    },
    {
      id: 6,
      text: "What is a primary purpose of a code linter?",
      options: [
        "Execute unit tests automatically",
        "Detect style and certain logical errors via static analysis",
        "Optimize runtime performance",
        "Generate API documentation",
      ],
      answer: "Detect style and certain logical errors via static analysis",
      explanation:
        "Linters analyze source code without executing it, flagging stylistic issues and many classes of bugs early in development.",
      difficulty: "Easy",
      topic: "Quality",
      points: 1,
    },
    /* ----------  Databases  ---------- */
    {
      id: 7,
      text: "Which SQL keyword removes duplicate rows from a SELECT query's result?",
      options: ["DISTINCT", "GROUP BY", "UNIQUE", "HAVING"],
      answer: "DISTINCT",
      explanation:
        "`SELECT DISTINCT ...` filters duplicate rows, returning only unique combinations of selected columns.",
      difficulty: "Easy",
      topic: "Databases",
      points: 1,
    },
    {
      id: 8,
      text: "Third Normal Form (3NF) in database design eliminates which issue?",
      options: [
        "Duplicate rows entirely",
        "Transitive dependencies between non-key columns",
        "All forms of update anomalies",
        "Need for foreign keys",
      ],
      answer: "Transitive dependencies between non-key columns",
      explanation:
        "3NF requires that non-key attributes depend only on the primary key, eliminating transitive dependencies.",
      difficulty: "Medium",
      topic: "Databases",
      points: 2,
    },
    /* ----------  DevOps & CI/CD  ---------- */
    {
      id: 9,
      text: "Which practice automatically builds and tests every change pushed to a shared repository?",
      options: [
        "Continuous Integration",
        "Continuous Delivery",
        "Continuous Deployment",
        "Infrastructure as Code",
      ],
      answer: "Continuous Integration",
      explanation:
        "CI focuses on integrating code changes frequently and validating them with automated builds/tests to detect issues early.",
      difficulty: "Easy",
      topic: "DevOps",
      points: 1,
    },
    {
      id: 10,
      text: "What is the MAIN benefit of using dependency injection in application code?",
      options: [
        "Improves runtime performance",
        "Enforces the Singleton pattern",
        "Lowers coupling and increases testability by externalizing dependencies",
        "Reduces the number of classes in the system",
      ],
      answer:
        "Lowers coupling and increases testability by externalizing dependencies",
      explanation:
        "By injecting dependencies, classes depend on abstractions, making them easier to swap in tests and reducing tight coupling.",
      difficulty: "Medium",
      topic: "Architecture",
      points: 2,
    },
    /* ----------  Concurrency & Performance  ---------- */
    {
      id: 11,
      text: "Which mechanism is commonly used to prevent race conditions when multiple threads access shared data?",
      options: ["Asynchrony", "Garbage Collection", "Mutex/Lock", "Polling"],
      answer: "Mutex/Lock",
      explanation:
        "Locks enforce mutual exclusion, ensuring only one thread manipulates the critical section at a time.",
      difficulty: "Medium",
      topic: "Concurrency",
      points: 2,
    },
    {
      id: 12,
      text: "What is the Big-O time complexity of a binary search on a sorted array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: "O(log n)",
      explanation:
        "Binary search halves the search space each step, leading to logarithmic complexity.",
      difficulty: "Easy",
      topic: "Algorithms",
      points: 1,
    },
    /* ----------  Memory & Languages  ---------- */
    {
      id: 13,
      text: "Automatic memory reclamation in languages like Java and Go is done via:",
      options: [
        "Reference counting only",
        "Garbage collection",
        "Manual free/delete calls",
        "Stack unwinding",
      ],
      answer: "Garbage collection",
      explanation:
        "Garbage collectors periodically identify and free unused objects, relieving developers from manual memory management.",
      difficulty: "Easy",
      topic: "Runtime",
      points: 1,
    },
    {
      id: 14,
      text: "In C#, which keyword marks a method that may contain 'await' expressions and will execute asynchronously?",
      options: ["yield", "async", "await", "Task"],
      answer: "async",
      explanation:
        "The `async` modifier enables the use of `await` inside the method and compiles it into a state machine for asynchronous execution.",
      difficulty: "Medium",
      topic: "Async",
      points: 2,
    },
    /* ----------  Front-End  ---------- */
    {
      id: 15,
      text: "In React, which hook is primarily used to add component-level state in functional components?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      answer: "useState",
      explanation:
        "`useState` returns a state variable and a setter, enabling local, reactive state inside function components.",
      difficulty: "Easy",
      topic: "Frontend",
      points: 1,
    },
    /* ----------  Testing & Quality  ---------- */
    {
      id: 16,
      text: "Which type of testing ensures that recent code changes have not adversely affected existing functionality?",
      options: [
        "Load Testing",
        "Regression Testing",
        "Smoke Testing",
        "Exploratory Testing",
      ],
      answer: "Regression Testing",
      explanation:
        "Regression tests rerun existing test suites after changes to verify that previously working features remain intact.",
      difficulty: "Easy",
      topic: "Testing",
      points: 1,
    },
    {
      id: 17,
      text: "Cyclomatic complexity is a metric that counts:",
      options: [
        "Lines of code in a file",
        "Number of defects per module",
        "Linearly independent paths through a program’s source code",
        "Executions per second of a function",
      ],
      answer: "Linearly independent paths through a program’s source code",
      explanation:
        "Cyclomatic complexity measures decision points to gauge how many independent execution paths exist, guiding testing effort.",
      difficulty: "Medium",
      topic: "Quality Metrics",
      points: 2,
    },
    /* ----------  Best Practices & Methodologies  ---------- */
    {
      id: 18,
      text: "The Twelve-Factor App methodology recommends storing configuration:",
      options: [
        "Directly in source code",
        "Inside database tables",
        "In environment variables outside the codebase",
        "Compiled into binaries at build time",
      ],
      answer: "In environment variables outside the codebase",
      explanation:
        "Externalized config lets the same code run in any environment by supplying environment-specific values at runtime.",
      difficulty: "Medium",
      topic: "Best Practices",
      points: 2,
    },
    {
      id: 19,
      text: "Which HTTP method is **idempotent**, meaning multiple identical requests achieve the same result as a single one?",
      options: ["POST", "PUT", "PATCH", "CONNECT"],
      answer: "PUT",
      explanation:
        "PUT replaces (or creates) a resource at a URI; repeating the request yields the resource in the same state.",
      difficulty: "Medium",
      topic: "APIs",
      points: 2,
    },
    {
      id: 20,
      text: "Which statement about **Docker** is TRUE?",
      options: [
        "It is a configuration-management tool like Ansible",
        "It virtualizes hardware through full guest operating systems",
        "It packages applications and their dependencies into lightweight containers",
        "It can only run on Linux hosts",
      ],
      answer:
        "It packages applications and their dependencies into lightweight containers",
      explanation:
        "Docker images bundle code, runtime, libraries, and config; containers run these images using the host OS kernel, making them portable and efficient.",
      difficulty: "Hard",
      topic: "DevOps",
      points: 3,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    new Array(questions.length).fill(null)
  );
  const [detailedResults, setDetailedResults] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [sidebarTab, setSidebarTab] = useState("overview");

  const [timeRemaining, setTimeRemaining] = useState(70 * 60);
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
      setSelectedOption(
        detailedResults[index]?.selected || answeredQuestions[index]
      );
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
    }

    setDetailedResults([
      ...detailedResults,
      {
        question: questions[currentQuestion].text,
        selected: selectedOption,
        correct: questions[currentQuestion].answer,
        explanation: questions[currentQuestion].explanation,
        difficulty: questions[currentQuestion].difficulty,
        topic: questions[currentQuestion].topic,
        points: questions[currentQuestion].points,
        isCorrect: selectedOption === questions[currentQuestion].answer,
      },
    ]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(newAnsweredQuestions[currentQuestion + 1]);
    } else {
      setFinished(true);
      setTimerActive(false);
    }
  };

  const calculateProgress = () => {
    const answeredCount = answeredQuestions.filter(
      (answer) => answer !== null
    ).length;
    return (answeredCount / questions.length) * 100;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const renderSidebarContent = () => {
    switch (sidebarTab) {
      case "overview":
        return (
          <div className="p-4 space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
              <h3 className="font-semibold text-blue-800 flex items-center">
                <Info className="mr-2" size={20} />
                Quiz Overview
              </h3>
              <ul className="mt-2 text-sm text-blue-700">
                <li>Total Questions: {questions.length}</li>
                <li>
                  Total Points:{" "}
                  {questions.reduce((sum, q) => sum + q.points, 0)}
                </li>
                <li>Time Limit: 1 hour 10 minutes</li>
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
      case "topics":
        return (
          <div className="p-4">
            <h3 className="font-semibold mb-3 text-gray-700 flex items-center">
              <Book className="mr-2" size={20} />
              Question Navigation
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {questions.map((_, index) => {
                let buttonClass =
                  "w-full aspect-square rounded-lg text-center flex items-center justify-center font-bold transition-all duration-300 shadow-md cursor-pointer";

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
                    buttonClass +=
                      " bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600";
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
      case "results":
        return (
          <div className="p-4">
            <h3 className="font-semibold mb-3 text-gray-700 flex items-center">
              <FileText className="mr-2" size={20} />
              Detailed Results
            </h3>
            <div className="space-y-2">
              <div className="bg-green-50 p-2 rounded">
                <div className="flex justify-between">
                  <span className="text-sm text-green-800">
                    Correct Answers
                  </span>
                  <span className="font-bold text-green-800">
                    {detailedResults.filter((r) => r.isCorrect).length}/
                    {questions.length}
                  </span>
                </div>
              </div>
              <div className="bg-red-50 p-2 rounded">
                <div className="flex justify-between">
                  <span className="text-sm text-red-800">
                    Incorrect Answers
                  </span>
                  <span className="font-bold text-red-800">
                    {detailedResults.filter((r) => !r.isCorrect).length}/
                    {questions.length}
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
      <div
        className={`bg-white shadow-lg border-r rounded-lg transition-all duration-300 flex flex-col ${
          isSidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
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
              { icon: Info, tab: "overview" },
              { icon: Book, tab: "topics" },
              { icon: Archive, tab: "results" },
            ].map((item) => (
              <button
                key={item.tab}
                onClick={() => setSidebarTab(item.tab)}
                className={`flex-1 p-3 transition-colors ${
                  sidebarTab === item.tab
                    ? "bg-blue-50 text-blue-600 border-b-2 border-blue-500"
                    : "text-gray-500 hover:bg-gray-100"
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
              <span className="text-gray-600">
                {calculateProgress().toFixed(0)}%
              </span>
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
                  let buttonClass =
                    "w-full py-3 rounded-lg text-lg border transition-all";

                  if (reviewMode) {
                    if (option === questions[currentQuestion].answer) {
                      buttonClass +=
                        " bg-green-100 border-green-300 text-green-800";
                    }
                    if (
                      option === selectedOption &&
                      option !== questions[currentQuestion].answer
                    ) {
                      buttonClass += " bg-red-100 border-red-300 text-red-800";
                    }
                  } else {
                    buttonClass +=
                      selectedOption === option
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
                      {reviewMode &&
                        option === questions[currentQuestion].answer && (
                          <CheckCircle
                            className="inline ml-2 text-green-600"
                            size={20}
                          />
                        )}
                      {reviewMode &&
                        option === selectedOption &&
                        option !== questions[currentQuestion].answer && (
                          <XCircle
                            className="inline ml-2 text-red-600"
                            size={20}
                          />
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
                  {currentQuestion + 1 === questions.length
                    ? "Finish Test"
                    : "Next Question"}
                </button>
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Detailed Results
              </h2>
              {detailedResults.map((result, index) => (
                <div
                  key={index}
                  className={`mb-4 p-4 rounded-lg border-l-4 ${
                    result.isCorrect
                      ? "bg-green-50 border-green-500"
                      : "bg-red-50 border-red-500"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-800">
                      Q{index + 1}: {result.question}
                    </p>
                    {result.isCorrect ? (
                      <CheckCircle className="text-green-600" size={20} />
                    ) : (
                      <XCircle className="text-red-600" size={20} />
                    )}
                  </div>
                  <p>
                    <strong>Your Answer: </strong>
                    {result.selected}
                  </p>
                  <p>
                    <strong>Correct Answer: </strong>
                    {result.correct}
                  </p>
                  <p>
                    <strong>Explanation: </strong>
                    {result.explanation}
                  </p>
                </div>
              ))}
              <div className="flex flex-col items-center mt-20 gap-4">
                <section className="mb-8">
                  <h3 className="text-3xl font-bold text-center mb-4">
                    You are at Intermediate Level.
                  </h3>
                  <img
                    src={intermediate}
                    alt="Intermediate Level"
                    className="h-60 mx-auto"
                  />
                </section>
                <div className="text-xl font-semibold">
                  Next Step:{" "}
                  <Link to="/courses?search=python">
                    <button className="bg-blue-500 p-3 text-white rounded-md active:shadow-lg active:-translate-y-1 active:-translate-x-1">
                      Python Learning Path
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
