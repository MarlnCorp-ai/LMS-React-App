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
        text: "What is a 'firewall' in network security?",
        options: [
          "A physical barrier to prevent fires in server rooms",
          "A software or hardware system that controls incoming and outgoing network traffic",
          "A type of antivirus software",
          "A tool for monitoring employee productivity",
        ],
        answer: "A software or hardware system that controls incoming and outgoing network traffic",
        explanation: "A firewall monitors and controls network traffic based on predetermined security rules, acting as a barrier between trusted and untrusted networks.",
        difficulty: "Medium",
        topic: "Network Security",
        points: 2,
      },
      {
        id: 2,
        text: "What is 'DNS spoofing'?",
        options: [
          "A technique to speed up DNS queries",
          "Redirecting DNS queries to a malicious server",
          "A method to block unwanted DNS requests",
          "Creating fake DNS records for testing purposes",
        ],
        answer: "Redirecting DNS queries to a malicious server",
        explanation: "DNS spoofing involves redirecting DNS queries to a malicious server to steal sensitive information or distribute malware.",
        difficulty: "Medium",
        topic: "Attack Types",
        points: 2,
      },
      {
        id: 3,
        text: "What is the purpose of a 'Virtual Private Network (VPN)'?",
        options: [
          "To increase internet speed",
          "To create a secure connection over a less secure network",
          "To monitor network traffic",
          "To block access to certain websites",
        ],
        answer: "To create a secure connection over a less secure network",
        explanation: "A VPN extends a private network across a public network, allowing users to send and receive data securely and anonymously.",
        difficulty: "Medium",
        topic: "Network Security",
        points: 2,
      },
      {
        id: 4,
        text: "What is 'ARP spoofing'?",
        options: [
          "A technique to improve network performance",
          "Sending fake ARP messages to associate the attacker's MAC address with the IP address of another host",
          "A method to block ARP requests",
          "Creating fake ARP tables for testing purposes",
        ],
        answer: "Sending fake ARP messages to associate the attacker's MAC address with the IP address of another host",
        explanation: "ARP spoofing is an attack where fake ARP messages are sent to link the attacker's MAC address with the IP address of a legitimate host, allowing the attacker to intercept, modify, or fabricate data.",
        difficulty: "Hard",
        topic: "Attack Types",
        points: 3,
      },
      {
        id: 5,
        text: "What is 'two-factor authentication (2FA)'?",
        options: [
          "Using two different passwords for login",
          "Requiring two forms of identification for access",
          "A method to speed up the login process",
          "A type of encryption algorithm",
        ],
        answer: "Requiring two forms of identification for access",
        explanation: "Two-factor authentication adds an extra layer of security by requiring two forms of identification, such as a password and a fingerprint or a security token.",
        difficulty: "Medium",
        topic: "Authentication",
        points: 2,
      },
      {
        id: 6,
        text: "What is a 'botnet'?",
        options: [
          "A network of robots used for automation",
          "A network of compromised computers controlled by an attacker",
          "A type of firewall",
          "A tool for monitoring network traffic",
        ],
        answer: "A network of compromised computers controlled by an attacker",
        explanation: "A botnet is a network of compromised computers controlled by an attacker to perform malicious activities such as sending spam or launching DDoS attacks.",
        difficulty: "Medium",
        topic: "Malware",
        points: 2,
      },
      {
        id: 7,
        text: "What is 'WPA3'?",
        options: [
          "A type of antivirus software",
          "The latest Wi-Fi security protocol",
          "A method to speed up Wi-Fi connections",
          "A tool for monitoring Wi-Fi traffic",
        ],
        answer: "The latest Wi-Fi security protocol",
        explanation: "WPA3 is the latest Wi-Fi security protocol that provides stronger encryption and improved security features compared to its predecessors.",
        difficulty: "Medium",
        topic: "Wireless Security",
        points: 2,
      },
      {
        id: 8,
        text: "What is a 'Distributed Denial of Service (DDoS)' attack?",
        options: [
          "An attack that distributes malware to multiple systems",
          "An attack that overwhelms a target with traffic from multiple sources",
          "A method to block unwanted network traffic",
          "A technique to speed up network performance",
        ],
        answer: "An attack that overwhelms a target with traffic from multiple sources",
        explanation: "A DDoS attack floods a target with traffic from multiple sources, making it unavailable to its intended users.",
        difficulty: "Medium",
        topic: "Attack Types",
        points: 2,
      },
      {
        id: 9,
        text: "What is 'Intrusion Detection System (IDS)'?",
        options: [
          "A system that detects and blocks unauthorized access",
          "A tool for monitoring employee productivity",
          "A type of antivirus software",
          "A system that detects potential security breaches",
        ],
        answer: "A system that detects potential security breaches",
        explanation: "An IDS monitors network traffic for suspicious activity and alerts administrators to potential security breaches.",
        difficulty: "Medium",
        topic: "Network Security",
        points: 2,
      },
      {
        id: 10,
        text: "What is 'SSL/TLS'?",
        options: [
          "A type of firewall",
          "A protocol for securing data transmission over the internet",
          "A method to speed up internet connections",
          "A tool for monitoring network traffic",
        ],
        answer: "A protocol for securing data transmission over the internet",
        explanation: "SSL/TLS are cryptographic protocols designed to provide secure communication over a computer network.",
        difficulty: "Medium",
        topic: "Cryptography",
        points: 2,
      },
      {
        id: 11,
        text: "What is a 'zero-day exploit'?",
        options: [
          "An exploit that has existed for less than 24 hours",
          "An exploit that is impossible to detect",
          "An exploit that takes advantage of a vulnerability unknown to the software vendor",
          "An exploit that requires zero coding skills to execute",
        ],
        answer: "An exploit that takes advantage of a vulnerability unknown to the software vendor",
        explanation: "A zero-day exploit targets a vulnerability that is unknown to the software vendor, leaving it open to attack until a patch is released.",
        difficulty: "Hard",
        topic: "Vulnerabilities",
        points: 3,
      },
      {
        id: 12,
        text: "What is 'pharming'?",
        options: [
          "A technique to speed up internet connections",
          "Redirecting users to a fake website without their knowledge",
          "A method to block unwanted network traffic",
          "Creating fake pharmaceutical websites",
        ],
        answer: "Redirecting users to a fake website without their knowledge",
        explanation: "Pharming involves redirecting users to a fake website to steal sensitive information, often by exploiting vulnerabilities in DNS servers.",
        difficulty: "Medium",
        topic: "Attack Types",
        points: 2,
      },
      {
        id: 13,
        text: "What is 'endpoint security'?",
        options: [
          "Securing the physical endpoints of network cables",
          "Protecting individual devices connected to a network",
          "A method to speed up network performance",
          "A tool for monitoring employee productivity",
        ],
        answer: "Protecting individual devices connected to a network",
        explanation: "Endpoint security focuses on protecting individual devices such as laptops, smartphones, and tablets from threats and ensuring they comply with security policies.",
        difficulty: "Medium",
        topic: "Network Security",
        points: 2,
      },
      {
        id: 14,
        text: "What is a 'rootkit'?",
        options: [
          "A tool for monitoring network traffic",
          "A type of malware designed to gain unauthorized root access to a system",
          "A method to speed up internet connections",
          "A type of firewall",
        ],
        answer: "A type of malware designed to gain unauthorized root access to a system",
        explanation: "A rootkit is a type of malware designed to gain unauthorized root access to a system while hiding its presence from detection tools.",
        difficulty: "Hard",
        topic: "Malware",
        points: 3,
      },
      {
        id: 15,
        text: "What is 'network segmentation'?",
        options: [
          "Dividing a network into smaller segments to improve performance",
          "Dividing a network into smaller segments to enhance security",
          "A method to block unwanted network traffic",
          "A tool for monitoring employee productivity",
        ],
        answer: "Dividing a network into smaller segments to enhance security",
        explanation: "Network segmentation involves dividing a network into smaller segments to isolate and protect sensitive data and limit the spread of threats.",
        difficulty: "Medium",
        topic: "Network Security",
        points: 2,
      },
      {
        id: 16,
        text: "What is 'cross-site request forgery (CSRF)'?",
        options: [
          "A technique to speed up website performance",
          "Tricking a user into executing unwanted actions on a web application",
          "A method to block unwanted website traffic",
          "Creating fake websites for testing purposes",
        ],
        answer: "Tricking a user into executing unwanted actions on a web application",
        explanation: "CSRF is an attack that tricks a user into executing unwanted actions on a web application where they are authenticated, such as changing account settings or making purchases.",
        difficulty: "Hard",
        topic: "Web Vulnerabilities",
        points: 3,
      },
      {
        id: 17,
        text: "What is 'data exfiltration'?",
        options: [
          "The process of backing up data to an external drive",
          "The unauthorized transfer of data from a computer",
          "A method to speed up data transmission",
          "A tool for monitoring network traffic",
        ],
        answer: "The unauthorized transfer of data from a computer",
        explanation: "Data exfiltration involves the unauthorized transfer of data from a computer, often as part of a cyber attack aimed at stealing sensitive information.",
        difficulty: "Medium",
        topic: "Data Security",
        points: 2,
      },
      {
        id: 18,
        text: "What is 'multi-factor authentication (MFA)'?",
        options: [
          "Using multiple passwords for login",
          "Requiring two or more forms of identification for access",
          "A method to speed up the login process",
          "A type of encryption algorithm",
        ],
        answer: "Requiring two or more forms of identification for access",
        explanation: "Multi-factor authentication adds an extra layer of security by requiring two or more forms of identification, such as a password and a fingerprint or a security token.",
        difficulty: "Medium",
        topic: "Authentication",
        points: 2,
      },
      {
        id: 19,
        text: "What is a 'secure shell (SSH)'?",
        options: [
          "A type of firewall",
          "A cryptographic network protocol for secure data communication",
          "A method to speed up internet connections",
          "A tool for monitoring network traffic",
        ],
        answer: "A cryptographic network protocol for secure data communication",
        explanation: "SSH is a cryptographic network protocol for secure data communication, remote command-line login, and remote command execution.",
        difficulty: "Medium",
        topic: "Network Security",
        points: 2,
      },
      {
        id: 20,
        text: "What is 'ransomware'?",
        options: [
          "A type of malware that encrypts a victim's files and demands payment for the decryption key",
          "A method to speed up file encryption",
          "A tool for monitoring file access",
          "A type of firewall",
        ],
        answer: "A type of malware that encrypts a victim's files and demands payment for the decryption key",
        explanation: "Ransomware is a type of malware that encrypts a victim's files and demands payment, usually in cryptocurrency, for the decryption key.",
        difficulty: "Medium",
        topic: "Malware",
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
