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
    /* ----------  Fundamentals & Process  ---------- */
    {
      id: 1,
      text: "Which software-development life-cycle model delivers working increments in short iterations and welcomes changing requirements?",
      options: ["Waterfall", "Spiral", "V-Model", "Agile Scrum"],
      answer: "Agile Scrum",
      explanation:
        "Scrum is an Agile framework that produces potentially shippable increments in time-boxed sprints and adapts to evolving requirements.",
      difficulty: "Easy",
      topic: "Process",
      points: 1,
    },
    {
      id: 2,
      text: "In Scrum, who is responsible for maximizing the product's value and managing the product backlog?",
      options: [
        "Scrum Master",
        "Product Owner",
        "Development Team",
        "Project Manager",
      ],
      answer: "Product Owner",
      explanation:
        "The Product Owner owns the backlog, prioritizes items, and ensures the team builds the most valuable features first.",
      difficulty: "Easy",
      topic: "Process",
      points: 1,
    },
    /* ----------  Programming Concepts  ---------- */
    {
      id: 3,
      text: "Which SOLID principle states that classes should have only one reason to change?",
      options: [
        "Single Responsibility Principle",
        "Open/Closed Principle",
        "Liskov Substitution Principle",
        "Dependency Inversion Principle",
      ],
      answer: "Single Responsibility Principle",
      explanation:
        "SRP asserts that each class or module should encapsulate only one responsibility, simplifying maintenance and testing.",
      difficulty: "Easy",
      topic: "Design Principles",
      points: 1,
    },
    {
      id: 4,
      text: "What is the time complexity of searching an element in a balanced binary search tree (BST)?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: "O(log n)",
      explanation:
        "For balanced BSTs like AVL or Red-Black trees, height is O(log n), making search logarithmic.",
      difficulty: "Medium",
      topic: "Algorithms",
      points: 2,
    },
    /* ----------  Design Patterns  ---------- */
    {
      id: 5,
      text: "Which design pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation?",
      options: ["Iterator", "Observer", "Facade", "Decorator"],
      answer: "Iterator",
      explanation:
        "Iterator abstracts traversal so clients can iterate over a collection without knowing its internal structure.",
      difficulty: "Medium",
      topic: "Design Patterns",
      points: 2,
    },
    {
      id: 6,
      text: "The 'Dependency Injection' technique is most closely related to which design principle?",
      options: [
        "Program to an implementation",
        "Tight coupling",
        "Inversion of Control",
        "Global state management",
      ],
      answer: "Inversion of Control",
      explanation:
        "Dependency Injection hands control of constructing dependencies to an external entity, embodying Inversion of Control.",
      difficulty: "Medium",
      topic: "Architecture",
      points: 2,
    },
    /* ----------  Version Control  ---------- */
    {
      id: 7,
      text: "In Git, which command rewrites commit history by creating new commits starting from a specified base?",
      options: ["git merge", "git cherry-pick", "git rebase", "git stash"],
      answer: "git rebase",
      explanation:
        "`git rebase` moves or combines a sequence of commits to a new base commit, producing a cleaner, linear history.",
      difficulty: "Medium",
      topic: "Version Control",
      points: 2,
    },
    {
      id: 8,
      text: "What is a fast-forward merge?",
      options: [
        "A merge that creates a new merge commit",
        "A merge that replays commits when the target branch has not diverged",
        "A merge that rejects incoming changes",
        "A merge that squashes all commits into one",
      ],
      answer:
        "A merge that replays commits when the target branch has not diverged",
      explanation:
        "Git simply moves the branch pointer forward—no merge commit—when the target contains all commits of the source branch in order.",
      difficulty: "Easy",
      topic: "Version Control",
      points: 1,
    },
    /* ----------  Testing & Quality  ---------- */
    {
      id: 9,
      text: "Which testing level verifies the interactions between integrated components or modules?",
      options: [
        "Unit Testing",
        "Integration Testing",
        "System Testing",
        "Acceptance Testing",
      ],
      answer: "Integration Testing",
      explanation:
        "Integration tests ensure that components work together as expected after being combined.",
      difficulty: "Easy",
      topic: "Testing",
      points: 1,
    },
    {
      id: 10,
      text: "In Test-Driven Development (TDD), what is the correct order of steps?",
      options: [
        "Refactor → Red → Green",
        "Green → Refactor → Red",
        "Red → Green → Refactor",
        "Write code → Write tests → Refactor",
      ],
      answer: "Red → Green → Refactor",
      explanation:
        "Write a failing test (red), write minimum code to pass (green), then refactor while keeping tests green.",
      difficulty: "Medium",
      topic: "Testing",
      points: 2,
    },
    /* ----------  Refactoring & Code Quality  ---------- */
    {
      id: 11,
      text: "Replacing a long conditional statement with polymorphism is an example of which refactoring technique?",
      options: [
        "Extract Method",
        "Replace Conditional with Strategy",
        "Inline Method",
        "Rename Variable",
      ],
      answer: "Replace Conditional with Strategy",
      explanation:
        "Strategy pattern encapsulates varying behavior, eliminating complex conditionals and improving extensibility.",
      difficulty: "Medium",
      topic: "Refactoring",
      points: 2,
    },
    /* ----------  Architecture & DevOps  ---------- */
    {
      id: 12,
      text: "Which architectural style structures an application as a collection of loosely coupled services communicating over lightweight protocols?",
      options: ["Monolithic", "Layered", "Microservices", "Client-Server"],
      answer: "Microservices",
      explanation:
        "Microservices decompose functionality into independently deployable services, each owning its data and logic.",
      difficulty: "Easy",
      topic: "Architecture",
      points: 1,
    },
    {
      id: 13,
      text: "In CI/CD pipelines, what is the primary purpose of a 'canary deployment'?",
      options: [
        "Blue-green switching of entire traffic instantly",
        "Gradually rolling out a new version to a subset of users to detect issues early",
        "Manual promotion of builds between environments",
        "Running unit tests on every pull request",
      ],
      answer:
        "Gradually rolling out a new version to a subset of users to detect issues early",
      explanation:
        "Canary releases limit risk by exposing new code to a small audience first, monitoring, then ramping up traffic.",
      difficulty: "Medium",
      topic: "DevOps",
      points: 2,
    },
    {
      id: 14,
      text: "Infrastructure as Code (IaC) most strongly helps with which software-engineering concern?",
      options: [
        "Scalability of algorithms",
        "Documentation formatting",
        "Environment drift and reproducibility",
        "UI responsiveness",
      ],
      answer: "Environment drift and reproducibility",
      explanation:
        "IaC codifies infra definitions, allowing consistent, repeatable provisioning across environments and reducing configuration drift.",
      difficulty: "Easy",
      topic: "DevOps",
      points: 1,
    },
    /* ----------  Security  ---------- */
    {
      id: 15,
      text: "Which HTTP header is used to protect against clickjacking by preventing a site from being framed?",
      options: [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
      ],
      answer: "X-Frame-Options",
      explanation:
        "`X-Frame-Options: DENY` or `SAMEORIGIN` stops browsers from rendering the page in a frame, mitigating clickjacking.",
      difficulty: "Hard",
      topic: "Security",
      points: 3,
    },
    /* ----------  Advanced Topics  ---------- */
    {
      id: 16,
      text: "Which CAP theorem combination is achievable in a distributed system under a network partition?",
      options: [
        "Consistency and Availability (CA)",
        "Consistency and Partition Tolerance (CP)",
        "Availability and Partition Tolerance (AP)",
        "All three (CAP) can be guaranteed",
      ],
      answer: "Availability and Partition Tolerance (AP)",
      explanation:
        "During a partition you must choose between immediate consistency and availability; AP sacrifices consistency until partition heals.",
      difficulty: "Hard",
      topic: "Distributed Systems",
      points: 3,
    },
    {
      id: 17,
      text: "Which database isolation level prevents dirty reads but still allows non-repeatable reads and phantom reads?",
      options: [
        "Read Uncommitted",
        "Read Committed",
        "Repeatable Read",
        "Serializable",
      ],
      answer: "Read Committed",
      explanation:
        "Read Committed disallows reading uncommitted changes (dirty reads) but does not guarantee repeatable reads or prevent phantoms.",
      difficulty: "Hard",
      topic: "Databases",
      points: 3,
    },
    /* ----------  UX & Accessibility  ---------- */
    {
      id: 18,
      text: "In web accessibility (WCAG), which guideline category does providing text alternatives for non-text content fall under?",
      options: ["Perceivable", "Operable", "Understandable", "Robust"],
      answer: "Perceivable",
      explanation:
        "Text alternatives make non-text content perceivable to users with visual impairments via screen readers.",
      difficulty: "Medium",
      topic: "Accessibility",
      points: 2,
    },
    /* ----------  Metrics & Observability  ---------- */
    {
      id: 19,
      text: "What does the 'RED' method measure for microservices observability?",
      options: [
        "Real-time Error Detection",
        "Rate, Errors, Duration of requests",
        "Resource, Events, Dependencies",
        "Response, Engagement, Downtime",
      ],
      answer: "Rate, Errors, Duration of requests",
      explanation:
        "RED focuses on the number of requests (rate), error counts, and request latency (duration) for each service.",
      difficulty: "Medium",
      topic: "Observability",
      points: 2,
    },
    /* ----------  Code Review & Collaboration  ---------- */
    {
      id: 20,
      text: "During code reviews, which feedback style is MOST effective for fostering team growth?",
      options: [
        "General statements like 'this code is bad'",
        "Personal criticism focused on the author",
        "Specific, actionable comments focused on the code and rationale",
        "Ignoring minor issues to speed up approval",
      ],
      answer: "Specific, actionable comments focused on the code and rationale",
      explanation:
        "Constructive, concrete feedback improves code quality, shares knowledge, and maintains a healthy team culture.",
      difficulty: "Easy",
      topic: "Collaboration",
      points: 1,
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
