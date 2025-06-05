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
    /* ----------  CI/CD Foundations  ---------- */
    {
      id: 1,
      text: "Which practice focuses on automatically releasing every code change to production once it passes the pipeline?",
      options: [
        "Continuous Integration",
        "Continuous Delivery",
        "Continuous Deployment",
        "Infrastructure as Code",
      ],
      answer: "Continuous Deployment",
      explanation:
        "Continuous Deployment extends Continuous Delivery by automatically promoting every successful build to production with no human intervention.",
      difficulty: "Medium",
      topic: "CI/CD",
      points: 2,
    },
    {
      id: 2,
      text: "DORA’s “Lead Time for Changes” metric measures the time between:",
      options: [
        "Code commit and deployment to production",
        "Bug report and bug fix verification",
        "Sprint planning and sprint review",
        "Incident detection and resolution",
      ],
      answer: "Code commit and deployment to production",
      explanation:
        "Lead Time for Changes tracks how quickly code moves from commit to running in production, reflecting delivery velocity.",
      difficulty: "Medium",
      topic: "Metrics",
      points: 2,
    },
    /* ----------  Deployment Strategies  ---------- */
    {
      id: 3,
      text: "Which deployment strategy runs two identical environments and switches all traffic to the new one in a single cut-over?",
      options: ["Canary", "Rolling", "Blue-Green", "A/B Testing"],
      answer: "Blue-Green",
      explanation:
        "Blue-Green maintains parallel stacks; traffic is flipped from Blue (current) to Green (new) when ready, supporting instant rollback.",
      difficulty: "Easy",
      topic: "Deployments",
      points: 1,
    },
    {
      id: 4,
      text: "The PRIMARY purpose of a canary release is to:",
      options: [
        "Deploy multiple incompatible versions simultaneously",
        "Limit the blast radius by exposing new code to a small subset of users first",
        "Serve static assets from edge locations",
        "Encrypt data in transit between microservices",
      ],
      answer:
        "Limit the blast radius by exposing new code to a small subset of users first",
      explanation:
        "Canaries reduce risk by sending a fraction of traffic to the new version, allowing monitoring before full rollout.",
      difficulty: "Medium",
      topic: "Deployments",
      points: 2,
    },
    /* ----------  Source-Control & Workflow  ---------- */
    {
      id: 5,
      text: "Trunk-based development encourages developers to:",
      options: [
        "Create long-lived feature branches that are merged quarterly",
        "Commit small, frequent changes directly to the mainline",
        "Use Subversion over Git",
        "Avoid using feature flags entirely",
      ],
      answer: "Commit small, frequent changes directly to the mainline",
      explanation:
        "Trunk-based development minimizes merge debt and supports rapid integration by keeping branches short-lived or nonexistent.",
      difficulty: "Medium",
      topic: "Process",
      points: 2,
    },
    /* ----------  Release Engineering  ---------- */
    {
      id: 6,
      text: "In semantic versioning (MAJOR.MINOR.PATCH), which part should you increment for backward-incompatible API changes?",
      options: ["PATCH", "MINOR", "MAJOR", "Build metadata"],
      answer: "MAJOR",
      explanation:
        "Breaking or incompatible changes require a MAJOR version bump to warn consumers.",
      difficulty: "Easy",
      topic: "Versioning",
      points: 1,
    },
    {
      id: 7,
      text: "Feature toggles (feature flags) help teams to:",
      options: [
        "Increase compile time",
        "Rollback database schemas automatically",
        "Deploy incomplete code safely behind a switch",
        "Guarantee zero-downtime database migrations",
      ],
      answer: "Deploy incomplete code safely behind a switch",
      explanation:
        "Feature flags decouple deployment from release, allowing latent code to ship and be enabled later.",
      difficulty: "Easy",
      topic: "Release",
      points: 1,
    },
    /* ----------  Infrastructure & Automation  ---------- */
    {
      id: 8,
      text: "Which statement best describes Infrastructure as Code (IaC)?",
      options: [
        "Manual provisioning of servers documented in runbooks",
        "Declarative or imperative definitions of infrastructure stored in version control and applied automatically",
        "Using shell scripts copied via SSH to each server",
        "A GUI tool for configuring cloud resources by hand",
      ],
      answer:
        "Declarative or imperative definitions of infrastructure stored in version control and applied automatically",
      explanation:
        "IaC treats infrastructure the same as application code—versioned, peer-reviewed, and reproducible via automation tools like Terraform or CloudFormation.",
      difficulty: "Easy",
      topic: "Automation",
      points: 1,
    },
    {
      id: 9,
      text: 'A pipeline step that "shifts security left" would MOST likely:',
      options: [
        "Run penetration tests only after production deployment",
        "Perform static application security testing (SAST) during the build stage",
        "Disable dependency checks to speed up CI",
        "Delay code scanning until the quarterly audit",
      ],
      answer:
        "Perform static application security testing (SAST) during the build stage",
      explanation:
        "Shifting left moves security checks earlier, catching vulnerabilities before code reaches later stages.",
      difficulty: "Medium",
      topic: "Security",
      points: 2,
    },
    /* ----------  Monitoring & Observability  ---------- */
    {
      id: 10,
      text: "The three pillars of observability are commonly listed as:",
      options: [
        "Logs, Metrics, Traces",
        "Latency, Throughput, Errors",
        "CPU, Memory, Disk",
        "Incidents, RCA, Postmortems",
      ],
      answer: "Logs, Metrics, Traces",
      explanation:
        "Collecting and correlating logs, metrics, and distributed traces enables deep insight into system behavior.",
      difficulty: "Easy",
      topic: "Observability",
      points: 1,
    },
    {
      id: 11,
      text: "Mean Time to Recovery (MTTR) measures:",
      options: [
        "Average time between incidents",
        "Average time to detect a defect in testing",
        "Average time to restore service after a failure",
        "Average build duration in CI",
      ],
      answer: "Average time to restore service after a failure",
      explanation:
        "MTTR indicates resilience—shorter recovery times imply quicker remediation and reduced customer impact.",
      difficulty: "Medium",
      topic: "Metrics",
      points: 2,
    },
    /* ----------  Lean & Flow  ---------- */
    {
      id: 12,
      text: "In Lean software delivery, 'Value Stream Mapping' is used to:",
      options: [
        "Generate UML diagrams automatically",
        "Identify waste and optimize the flow from idea to production",
        "Encrypt sensitive data at rest",
        "Manage container orchestration",
      ],
      answer: "Identify waste and optimize the flow from idea to production",
      explanation:
        "Value Stream Mapping visualizes each step in delivery, highlighting delays and non-value activities to improve flow efficiency.",
      difficulty: "Medium",
      topic: "Lean",
      points: 2,
    },
    /* ----------  SRE & Reliability  ---------- */
    {
      id: 13,
      text: "An SRE team sets an Error Budget to:",
      options: [
        "Allocate CPU cores among microservices",
        "Define the acceptable level of unreliability before feature work must pause",
        "Estimate sprint velocity",
        "Track test coverage percentage",
      ],
      answer:
        "Define the acceptable level of unreliability before feature work must pause",
      explanation:
        "Error Budgets quantify permissible risk: if exceeded, focus shifts from new features to reliability improvements.",
      difficulty: "Hard",
      topic: "SRE",
      points: 3,
    },
    {
      id: 14,
      text: "Chaos Engineering helps teams by:",
      options: [
        "Increasing MTTR intentionally",
        "Preventing all failures through perfect testing",
        "Experimenting on a system to build confidence in its resilience",
        "Disabling redundant components to save cost",
      ],
      answer: "Experimenting on a system to build confidence in its resilience",
      explanation:
        "By introducing controlled faults, teams learn how systems behave under stress and improve reliability.",
      difficulty: "Hard",
      topic: "Reliability",
      points: 3,
    },
    /* ----------  Change & Incident Management  ---------- */
    {
      id: 15,
      text: "According to ITIL, what is the purpose of a Change Advisory Board (CAB)?",
      options: [
        "Authorize, assess, and prioritize significant changes to reduce risk",
        "Handle day-to-day incident resolution",
        "Approve expense reports for cloud spend",
        "Write deployment automation scripts",
      ],
      answer:
        "Authorize, assess, and prioritize significant changes to reduce risk",
      explanation:
        "CAB evaluates high-risk changes, ensuring alignment with business goals and minimizing disruption.",
      difficulty: "Medium",
      topic: "Governance",
      points: 2,
    },
    {
      id: 16,
      text: 'A "Post-Incident Review" (post-mortem) should be:',
      options: [
        "Blame-oriented to discourage future mistakes",
        "Conducted only for SEV0 outages",
        "Written promptly, shared broadly, and focus on systemic fixes",
        "Kept confidential within the operations team",
      ],
      answer: "Written promptly, shared broadly, and focus on systemic fixes",
      explanation:
        "Blameless post-mortems promote learning, transparency, and improvements that prevent recurrence.",
      difficulty: "Easy",
      topic: "Incidents",
      points: 1,
    },
    /* ----------  Testing & Shift-Left  ---------- */
    {
      id: 17,
      text: "Contract testing (e.g., with Pact) is MOST valuable for:",
      options: [
        "Ensuring UI components render identically in all browsers",
        "Verifying API interactions between consumer and provider microservices",
        "Stress-testing databases at peak load",
        "Testing GPU kernels for performance",
      ],
      answer:
        "Verifying API interactions between consumer and provider microservices",
      explanation:
        "Contract tests assert that agreed request/response formats remain compatible as services evolve independently.",
      difficulty: "Medium",
      topic: "Testing",
      points: 2,
    },
    {
      id: 18,
      text: "Which practice aims to shorten feedback loops by running representative performance tests within the CI pipeline?",
      options: [
        "Load Testing in Production only",
        "Performance Testing as Code",
        "Hot-fix branching",
        "Cold standby DR",
      ],
      answer: "Performance Testing as Code",
      explanation:
        "Embedding automated, code-defined performance tests in CI provides early detection of regressions.",
      difficulty: "Hard",
      topic: "Quality",
      points: 3,
    },
    /* ----------  Tooling & Artifacts  ---------- */
    {
      id: 19,
      text: "An artifact repository such as JFrog Artifactory or Nexus is mainly used to:",
      options: [
        "Store build outputs and dependencies in a central, versioned location",
        "Host live production traffic",
        "Monitor application logs",
        "Provision virtual machines",
      ],
      answer:
        "Store build outputs and dependencies in a central, versioned location",
      explanation:
        "Artifact repositories ensure reproducible builds and secure distribution of binaries across environments.",
      difficulty: "Easy",
      topic: "Tooling",
      points: 1,
    },
    {
      id: 20,
      text: "Which environment is intended to be **production-like** and used for final verification before releasing code?",
      options: ["Development", "Test", "Staging", "Sandbox"],
      answer: "Staging",
      explanation:
        "Staging mirrors production configuration, enabling realistic validation of behavior and deployment procedures.",
      difficulty: "Easy",
      topic: "Environments",
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
