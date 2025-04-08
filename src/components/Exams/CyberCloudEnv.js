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

export default function QuizApplication() {
  const [questions] = useState([
    {
      id: 1,
      text: "How do you ensure data security in a cloud environment?",
      options: [
        "By encrypting data at rest and in transit",
        "By implementing strict access controls",
        "By regularly auditing security configurations",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Ensuring data security in a cloud environment involves encrypting data, implementing strict access controls, and regularly auditing security configurations to protect against unauthorized access and data breaches.",
      difficulty: "Intermediate",
      topic: "Data Security",
      points: 2,
    },
    {
      id: 2,
      text: "What is the principle of least privilege, and how is it implemented in cloud environments?",
      options: [
        "Granting all users full access to all resources",
        "Granting users the minimum permissions necessary to perform their job functions",
        "Granting users access based on their role within the organization",
        "Granting users temporary access that expires after a certain period",
      ],
      answer:
        "Granting users the minimum permissions necessary to perform their job functions",
      explanation:
        "The principle of least privilege ensures that users have only the access rights necessary to perform their job functions, reducing the risk of unauthorized access and data breaches.",
      difficulty: "Intermediate",
      topic: "Access Control",
      points: 2,
    },
    {
      id: 3,
      text: "How would you manage Identity and Access Management (IAM) across a multi-cloud environment?",
      options: [
        "By using a single IAM solution for all cloud providers",
        "By implementing separate IAM solutions for each cloud provider",
        "By using a federated identity management system",
        "By manually managing user access for each cloud provider",
      ],
      answer: "By using a federated identity management system",
      explanation:
        "Managing IAM across a multi-cloud environment involves using a federated identity management system to centralize user access and simplify management.",
      difficulty: "Intermediate",
      topic: "Identity and Access Management",
      points: 2,
    },
    {
      id: 4,
      text: "What are some common cloud security threats, and how do they differ from traditional security threats?",
      options: [
        "Misconfigured cloud settings",
        "Insecure APIs",
        "Vulnerabilities in cloud applications",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Cloud security threats include misconfigured cloud settings, insecure APIs, and vulnerabilities in cloud applications, which differ from traditional security threats due to the unique characteristics of cloud environments.",
      difficulty: "Intermediate",
      topic: "Cloud Security Threats",
      points: 2,
    },
    {
      id: 5,
      text: "How do you implement security analytics in a cloud environment?",
      options: [
        "By using cloud-native security analytics tools",
        "By integrating third-party security analytics solutions",
        "By manually analyzing security logs",
        "By relying on traditional on-premises security analytics tools",
      ],
      answer: "By using cloud-native security analytics tools",
      explanation:
        "Implementing security analytics in a cloud environment involves using cloud-native security analytics tools to monitor and analyze security events in real-time.",
      difficulty: "Intermediate",
      topic: "Security Analytics",
      points: 2,
    },
    {
      id: 6,
      text: "What is Cloud Security Posture Management (CSPM), and why is it important?",
      options: [
        "A tool for managing cloud infrastructure",
        "A tool for identifying and remediating misconfigurations in cloud environments",
        "A tool for monitoring cloud performance",
        "A tool for managing user access in the cloud",
      ],
      answer:
        "A tool for identifying and remediating misconfigurations in cloud environments",
      explanation:
        "CSPM tools help identify and remediate misconfigurations in cloud environments, ensuring that security policies are enforced and reducing the risk of data breaches.",
      difficulty: "Intermediate",
      topic: "Cloud Security Posture Management",
      points: 2,
    },
    {
      id: 7,
      text: "How do you secure a serverless architecture in the cloud?",
      options: [
        "By implementing function-level access controls",
        "By encrypting data stored in serverless functions",
        "By monitoring and logging serverless function executions",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Securing a serverless architecture involves implementing function-level access controls, encrypting data, and monitoring and logging function executions to protect against unauthorized access and data breaches.",
      difficulty: "Intermediate",
      topic: "Serverless Security",
      points: 2,
    },
    {
      id: 8,
      text: "What is the role of a Security Information and Event Management (SIEM) system in a cloud environment?",
      options: [
        "To monitor and analyze security events in real-time",
        "To manage user access and permissions",
        "To encrypt data at rest and in transit",
        "To perform regular security audits",
      ],
      answer: "To monitor and analyze security events in real-time",
      explanation:
        "A SIEM system in a cloud environment monitors and analyzes security events in real-time, providing visibility into potential security threats and incidents.",
      difficulty: "Intermediate",
      topic: "Security Information and Event Management",
      points: 2,
    },
    {
      id: 9,
      text: "How do you ensure compliance with regulatory requirements in a cloud environment?",
      options: [
        "By implementing automated compliance monitoring tools",
        "By regularly auditing cloud configurations for compliance",
        "By using cloud-native compliance management services",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Ensuring compliance with regulatory requirements in a cloud environment involves using automated compliance monitoring tools, regularly auditing cloud configurations, and using cloud-native compliance management services.",
      difficulty: "Intermediate",
      topic: "Compliance Management",
      points: 2,
    },
    {
      id: 10,
      text: "What is the importance of micro-segmentation in cloud security?",
      options: [
        "To isolate workloads and reduce the attack surface",
        "To improve network performance",
        "To simplify network management",
        "To reduce cloud costs",
      ],
      answer: "To isolate workloads and reduce the attack surface",
      explanation:
        "Micro-segmentation in cloud security helps isolate workloads and reduce the attack surface, limiting the spread of threats within the cloud environment.",
      difficulty: "Intermediate",
      topic: "Micro-segmentation",
      points: 2,
    },
    {
      id: 11,
      text: "How do you protect against DDoS attacks in a cloud environment?",
      options: [
        "By implementing cloud-based DDoS mitigation services",
        "By using on-premises DDoS protection solutions",
        "By manually blocking suspicious traffic",
        "By increasing network bandwidth",
      ],
      answer: "By implementing cloud-based DDoS mitigation services",
      explanation:
        "Protecting against DDoS attacks in a cloud environment involves implementing cloud-based DDoS mitigation services to detect and mitigate large-scale attacks.",
      difficulty: "Intermediate",
      topic: "DDoS Protection",
      points: 2,
    },
    {
      id: 12,
      text: "What are the benefits of using a Secure Access Service Edge (SASE) architecture in cloud security?",
      options: [
        "To provide secure access to cloud applications from anywhere",
        "To reduce the complexity of managing multiple security solutions",
        "To improve the performance of cloud applications",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "A SASE architecture provides secure access to cloud applications from anywhere, reduces the complexity of managing multiple security solutions, and improves the performance of cloud applications.",
      difficulty: "Intermediate",
      topic: "Secure Access Service Edge",
      points: 2,
    },
    {
      id: 13,
      text: "How do you implement encryption in a cloud environment?",
      options: [
        "By using cloud-native encryption services",
        "By implementing third-party encryption solutions",
        "By manually encrypting data before uploading it to the cloud",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Implementing encryption in a cloud environment involves using cloud-native encryption services, third-party encryption solutions, and manually encrypting data to protect sensitive information.",
      difficulty: "Intermediate",
      topic: "Encryption",
      points: 2,
    },
    {
      id: 14,
      text: "What is the importance of regular security audits in a cloud environment?",
      options: [
        "To identify and remediate security vulnerabilities",
        "To ensure compliance with regulatory requirements",
        "To monitor the effectiveness of security controls",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Regular security audits in a cloud environment help identify and remediate security vulnerabilities, ensure compliance with regulatory requirements, and monitor the effectiveness of security controls.",
      difficulty: "Intermediate",
      topic: "Security Audits",
      points: 2,
    },
    {
      id: 15,
      text: "How do you secure data in a multi-cloud environment?",
      options: [
        "By implementing consistent security policies across all cloud providers",
        "By using cloud-native security tools for each cloud provider",
        "By encrypting data at rest and in transit",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Securing data in a multi-cloud environment involves implementing consistent security policies, using cloud-native security tools, and encrypting data at rest and in transit.",
      difficulty: "Intermediate",
      topic: "Multi-Cloud Security",
      points: 2,
    },
    {
      id: 16,
      text: "What is the role of automation in cloud security?",
      options: [
        "To reduce the manual effort required to manage security controls",
        "To improve the consistency and accuracy of security configurations",
        "To enable faster response to security incidents",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Automation in cloud security reduces manual effort, improves the consistency and accuracy of security configurations, and enables faster response to security incidents.",
      difficulty: "Intermediate",
      topic: "Automation",
      points: 2,
    },
    {
      id: 17,
      text: "How do you manage security in a hybrid cloud environment?",
      options: [
        "By implementing consistent security policies across on-premises and cloud environments",
        "By using hybrid cloud security tools",
        "By regularly auditing security configurations in both environments",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Managing security in a hybrid cloud environment involves implementing consistent security policies, using hybrid cloud security tools, and regularly auditing security configurations in both on-premises and cloud environments.",
      difficulty: "Intermediate",
      topic: "Hybrid Cloud Security",
      points: 2,
    },
    {
      id: 18,
      text: "What is the importance of incident response planning in cloud security?",
      options: [
        "To minimize the impact of security incidents",
        "To ensure a quick and effective response to security incidents",
        "To maintain business continuity during security incidents",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Incident response planning in cloud security is important to minimize the impact of security incidents, ensure a quick and effective response, and maintain business continuity.",
      difficulty: "Intermediate",
      topic: "Incident Response",
      points: 2,
    },
    {
      id: 19,
      text: "How do you ensure the confidentiality and integrity of data in a cloud environment?",
      options: [
        "By encrypting data at rest and in transit",
        "By implementing strict access controls",
        "By regularly auditing security configurations",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Ensuring the confidentiality and integrity of data in a cloud environment involves encrypting data, implementing strict access controls, and regularly auditing security configurations.",
      difficulty: "Intermediate",
      topic: "Data Confidentiality and Integrity",
      points: 2,
    },
    {
      id: 20,
      text: "What is the importance of employee training in cloud security?",
      options: [
        "To raise awareness of security best practices",
        "To reduce the risk of human error leading to security incidents",
        "To ensure compliance with regulatory requirements",
        "All of the above",
      ],
      answer: "All of the above",
      explanation:
        "Employee training in cloud security raises awareness of security best practices, reduces the risk of human error leading to security incidents, and ensures compliance with regulatory requirements.",
      difficulty: "Intermediate",
      topic: "Employee Training",
      points: 2,
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
