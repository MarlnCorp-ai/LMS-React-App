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
    /* ----------  Fundamentals  ---------- */
    {
      id: 1,
      text: "Which of the following built-in data types is **immutable** in Python?",
      options: ["list", "set", "dict", "tuple"],
      answer: "tuple",
      explanation:
        "Tuples cannot be altered after creation, whereas lists, sets, and dictionaries are mutable.",
      difficulty: "Easy",
      topic: "Data Types",
      points: 1,
    },
    {
      id: 2,
      text: "Which keyword is used inside a generator function to produce a lazy sequence of values?",
      options: ["return", "yield", "async", "await"],
      answer: "yield",
      explanation:
        "`yield` turns a function into a generator, returning values one at a time and preserving state between calls.",
      difficulty: "Easy",
      topic: "Generators",
      points: 1,
    },
    {
      id: 3,
      text: "What is the primary difference between the operators `==` and `is`?",
      options: [
        "`==` compares object identity, `is` compares values",
        "`==` is only for numbers, `is` for strings",
        "`==` compares values, `is` compares object identity",
        "They are interchangeable in all cases",
      ],
      answer: "`==` compares values, `is` compares object identity",
      explanation:
        "`==` invokes the equality test (`__eq__`), while `is` checks whether two references point to the exact same object in memory.",
      difficulty: "Easy",
      topic: "Operators",
      points: 1,
    },
    {
      id: 4,
      text: "Which built-in function returns an iterator that aggregates elements from multiple iterables?",
      options: ["enumerate", "map", "zip", "filter"],
      answer: "zip",
      explanation:
        "`zip` pairs (or tuples) items from each iterable until the shortest one is exhausted, returning an iterator of tuples.",
      difficulty: "Easy",
      topic: "Itertools",
      points: 1,
    },
    /* ----------  Data Structures & Algorithms  ---------- */
    {
      id: 5,
      text: "What is the average-case time complexity of membership testing (`x in my_set`) for a Python `set`?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: "O(1)",
      explanation:
        "Sets are implemented as hash tables, giving constant-time lookups on average.",
      difficulty: "Medium",
      topic: "Complexity",
      points: 2,
    },
    {
      id: 6,
      text: "What will be printed by the code below?\n\n```python\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)\n```",
      options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Error: list is immutable", "[4]"],
      answer: "[1, 2, 3, 4]",
      explanation:
        "`y` references the same list object as `x`; appending via `y` mutates that single list.",
      difficulty: "Medium",
      topic: "Mutability",
      points: 2,
    },
    /* ----------  Functions & OOP  ---------- */
    {
      id: 7,
      text: "Which decorator turns an instance method into a method that receives the **class** (not instance) as its first argument?",
      options: ["@staticmethod", "@classmethod", "@property", "@dataclass"],
      answer: "@classmethod",
      explanation:
        "`@classmethod` methods receive `cls` and can manipulate class-level state or create alternative constructors.",
      difficulty: "Medium",
      topic: "OOP",
      points: 2,
    },
    {
      id: 8,
      text: "In Python, the **MRO** (Method Resolution Order) is most relevant when:",
      options: [
        "Using global variables",
        "Performing arithmetic operations",
        "Working with multiple inheritance",
        "Running garbage collection",
      ],
      answer: "Working with multiple inheritance",
      explanation:
        "The MRO determines the order in which base classes are searched when executing a method on a class with multiple inheritance.",
      difficulty: "Hard",
      topic: "OOP",
      points: 3,
    },
    /* ----------  Standard Library & Modules  ---------- */
    {
      id: 9,
      text: "Which standard-library module serializes Python objects into **JSON** format?",
      options: ["pickle", "marshal", "json", "csv"],
      answer: "json",
      explanation:
        "The `json` module converts between Python objects and JSON strings, ensuring interoperability with other systems.",
      difficulty: "Easy",
      topic: "Std Lib",
      points: 1,
    },
    {
      id: 10,
      text: "Which statement about the `asyncio` library is TRUE?",
      options: [
        "`asyncio` uses multiple OS threads by default",
        "`asyncio` enables cooperative multitasking with an event loop",
        "`asyncio` replaces the Global Interpreter Lock",
        "`asyncio` can only run on Windows",
      ],
      answer: "`asyncio` enables cooperative multitasking with an event loop",
      explanation:
        "`asyncio` runs a single-threaded event loop scheduling coroutines; tasks yield control with `await` for concurrency.",
      difficulty: "Medium",
      topic: "Concurrency",
      points: 2,
    },
    /* ----------  Packaging & Environment  ---------- */
    {
      id: 11,
      text: "Which command creates a **new virtual environment** using the Python 3 standard library?",
      options: [
        "`python -m venv env`",
        "`pip install virtualenv`",
        "`conda create --name env`",
        "`python setup.py install`",
      ],
      answer: "`python -m venv env`",
      explanation:
        "`venv` is included in Python 3; the command sets up an isolated environment named `env`.",
      difficulty: "Easy",
      topic: "Environments",
      points: 1,
    },
    {
      id: 12,
      text: "PEP 8 is primarily a document that:",
      options: [
        "Specifies Python’s byte-code format",
        "Defines the official style guide for Python code",
        "Introduces the async/await syntax",
        "Describes the reference counting algorithm",
      ],
      answer: "Defines the official style guide for Python code",
      explanation:
        "PEP 8 provides conventions for formatting, naming, and layout to improve code readability and consistency.",
      difficulty: "Easy",
      topic: "Style",
      points: 1,
    },
    /* ----------  Testing & Quality  ---------- */
    {
      id: 13,
      text: "Which tool is commonly used for **static type checking** of Python codebases with type annotations?",
      options: ["pytest", "mypy", "black", "coverage.py"],
      answer: "mypy",
      explanation:
        "`mypy` parses type hints and verifies type correctness without executing the program.",
      difficulty: "Medium",
      topic: "Type Checking",
      points: 2,
    },
    {
      id: 14,
      text: "The `assert` statement in Python __by default__ is:",
      options: [
        "Always executed regardless of interpreter flags",
        "Ignored when the interpreter is run with the `-O` (optimize) flag",
        "Equivalent to raising `AssertionError` unconditionally",
        "Recommended for validating user input in production",
      ],
      answer:
        "Ignored when the interpreter is run with the `-O` (optimize) flag",
      explanation:
        "Optimization (`python -O`) strips `assert` statements, so they should not enforce critical runtime checks.",
      difficulty: "Medium",
      topic: "Testing",
      points: 2,
    },
    /* ----------  Advanced Language Features  ---------- */
    {
      id: 15,
      text: "Which dunder method enables an object to be used as a **context manager** (inside a `with` block)?",
      options: ["__iter__", "__call__", "__enter__", "__getattr__"],
      answer: "__enter__",
      explanation:
        "A context manager implements both `__enter__` and `__exit__`; `__enter__` is executed at the start of the `with` block.",
      difficulty: "Medium",
      topic: "Context Managers",
      points: 2,
    },
    {
      id: 16,
      text: "The **Global Interpreter Lock (GIL)** in CPython guarantees that:",
      options: [
        "Only one native thread executes Python bytecode at a time",
        "Python cannot perform I/O operations asynchronously",
        "Multiprocessing is impossible in Python",
        "Python extensions cannot be written in C",
      ],
      answer: "Only one native thread executes Python bytecode at a time",
      explanation:
        "The GIL serializes execution of Python bytecode, affecting CPU-bound multithreading but not preventing multiprocessing or async I/O.",
      difficulty: "Hard",
      topic: "Concurrency",
      points: 3,
    },
    {
      id: 17,
      text: "Given `from collections import Counter`, what does `Counter('banana').most_common(1)` return?",
      options: ["[('a', 3)]", "[('n', 2)]", "[('b', 1)]", "[('banana', 1)]"],
      answer: "[('a', 3)]",
      explanation:
        "`Counter` counts character frequencies; `'a'` appears three times, making it the most common element.",
      difficulty: "Medium",
      topic: "Std Lib",
      points: 2,
    },
    /* ----------  Functional & Meta-Programming  ---------- */
    {
      id: 18,
      text: "What will `list(map(lambda x: x**2, filter(lambda x: x % 2, range(5))))` evaluate to?",
      options: ["[0, 1, 4, 9, 16]", "[1, 9]", "[0, 4, 16]", "[2, 4]"],
      answer: "[1, 9]",
      explanation:
        "`filter` keeps odd numbers (1 and 3); mapping squares them, producing `[1, 9]`.",
      difficulty: "Hard",
      topic: "Functional",
      points: 3,
    },
    /* ----------  Typing & Dataclasses  ---------- */
    {
      id: 19,
      text: "Which import enables **runtime** enforcement of postponed evaluation of type hints (PEP 563) in Python 3.7–3.10?",
      options: [
        "`from __future__ import annotations`",
        "`import typing_extensions`",
        "`from typing import Literal`",
        "`from future import typehints`",
      ],
      answer: "`from __future__ import annotations`",
      explanation:
        "The future import stores annotations as strings, deferring evaluation to runtime and avoiding forward-reference issues.",
      difficulty: "Hard",
      topic: "Typing",
      points: 3,
    },
    {
      id: 20,
      text: "Which parameter on a `@dataclass` turns a class **immutable** by generating `__setattr__` that raises `FrozenInstanceError`?",
      options: ["order=True", "frozen=True", "slots=True", "unsafe_hash=True"],
      answer: "frozen=True",
      explanation:
        "`frozen=True` makes dataclass instances read-only after initialization, providing hashability and safety.",
      difficulty: "Hard",
      topic: "Dataclasses",
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
