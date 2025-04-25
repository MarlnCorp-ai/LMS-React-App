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
      text: "What is ethical hacking?",
      options: [
        "Breaking into systems for personal gain",
        "Authorized testing of systems to identify security vulnerabilities",
        "Creating computer viruses",
        "Disabling security systems permanently",
      ],
      answer:
        "Authorized testing of systems to identify security vulnerabilities",
      explanation:
        "Ethical hacking involves authorized attempts to gain unauthorized access to a computer system to identify security vulnerabilities.",
      difficulty: "Easy",
      topic: "Fundamentals",
      points: 1,
    },
    {
      id: 2,
      text: "What is another term for an ethical hacker?",
      options: [
        "Black hat hacker",
        "White hat hacker",
        "Grey hat hacker",
        "Red hat hacker",
      ],
      answer: "White hat hacker",
      explanation:
        "White hat hackers are ethical hackers who perform security assessments with permission.",
      difficulty: "Easy",
      topic: "Terminology",
      points: 1,
    },
    {
      id: 3,
      text: "What is the primary purpose of a penetration test?",
      options: [
        "To steal sensitive data",
        "To identify and exploit vulnerabilities before malicious hackers do",
        "To permanently disable security systems",
        "To install backdoors for future access",
      ],
      answer:
        "To identify and exploit vulnerabilities before malicious hackers do",
      explanation:
        "Penetration testing aims to identify security weaknesses so they can be fixed before malicious hackers exploit them.",
      difficulty: "Easy",
      topic: "Methodology",
      points: 1,
    },
    {
      id: 4,
      text: "What does 'vulnerability scanning' refer to?",
      options: [
        "Physically examining computers for hardware issues",
        "Automated testing for known security weaknesses",
        "Monitoring network traffic manually",
        "Creating a list of employees with security clearance",
      ],
      answer: "Automated testing for known security weaknesses",
      explanation:
        "Vulnerability scanning is the automated process of proactively identifying security vulnerabilities in a network or system.",
      difficulty: "Medium",
      topic: "Tools",
      points: 2,
    },
    {
      id: 5,
      text: "What is 'social engineering' in the context of ethical hacking?",
      options: [
        "Building social networks for companies",
        "Manipulating people into breaking security protocols or revealing sensitive information",
        "Creating user-friendly interfaces",
        "Developing social media policies",
      ],
      answer:
        "Manipulating people into breaking security protocols or revealing sensitive information",
      explanation:
        "Social engineering involves psychological manipulation to trick people into revealing confidential information or breaking security protocols.",
      difficulty: "Medium",
      topic: "Attack Vectors",
      points: 2,
    },
    {
      id: 6,
      text: "What is a 'Man-in-the-Middle' attack?",
      options: [
        "A physical attack on a server room",
        "An attack where someone secretly relays and possibly alters communications between two parties",
        "A denial of service attack",
        "Breaking into a building's security system",
      ],
      answer:
        "An attack where someone secretly relays and possibly alters communications between two parties",
      explanation:
        "In a Man-in-the-Middle attack, an attacker secretly intercepts and possibly alters the communication between two parties who believe they are directly communicating with each other.",
      difficulty: "Medium",
      topic: "Attack Types",
      points: 2,
    },
    {
      id: 7,
      text: "What is port scanning?",
      options: [
        "Physically checking computer ports for damage",
        "Examining which network ports on a host are open",
        "Copying data from USB ports",
        "Blocking unused ports on a computer",
      ],
      answer: "Examining which network ports on a host are open",
      explanation:
        "Port scanning is the process of checking network ports on a remote device to determine which ones are open and potentially vulnerable to exploitation.",
      difficulty: "Medium",
      topic: "Reconnaissance",
      points: 2,
    },
    {
      id: 8,
      text: "What is a 'zero-day vulnerability'?",
      options: [
        "A vulnerability that has existed for less than 24 hours",
        "A vulnerability that is impossible to exploit",
        "A vulnerability unknown to the software vendor and has no available fix",
        "A vulnerability that requires zero coding skills to exploit",
      ],
      answer:
        "A vulnerability unknown to the software vendor and has no available fix",
      explanation:
        "A zero-day vulnerability is a software security flaw that is unknown to the vendor and doesn't have a patch available, leaving it open to exploitation.",
      difficulty: "Hard",
      topic: "Vulnerabilities",
      points: 3,
    },
    {
      id: 9,
      text: "What is 'phishing'?",
      options: [
        "A technique to catch fish using computers",
        "A form of social engineering aimed at obtaining sensitive information by disguising as a trustworthy entity",
        "A method to track fish populations",
        "A technique to block spam emails",
      ],
      answer:
        "A form of social engineering aimed at obtaining sensitive information by disguising as a trustworthy entity",
      explanation:
        "Phishing is a type of social engineering attack where attackers disguise themselves as trusted entities to trick victims into revealing sensitive information.",
      difficulty: "Easy",
      topic: "Social Engineering",
      points: 1,
    },
    {
      id: 10,
      text: "What tool is commonly used by ethical hackers for network scanning?",
      options: ["Microsoft Word", "Nmap", "Photoshop", "Excel"],
      answer: "Nmap",
      explanation:
        "Nmap (Network Mapper) is a free, open-source tool used for network discovery and security auditing.",
      difficulty: "Medium",
      topic: "Tools",
      points: 2,
    },
    {
      id: 11,
      text: "What is a SQL injection attack?",
      options: [
        "Injecting new SQL databases into a system",
        "A technique to speed up database queries",
        "A cyberattack that injects malicious SQL code to manipulate databases",
        "A method to back up SQL databases",
      ],
      answer:
        "A cyberattack that injects malicious SQL code to manipulate databases",
      explanation:
        "SQL injection is an attack where malicious SQL statements are inserted into entry fields for execution by the database, potentially giving attackers access to sensitive data or control over the database.",
      difficulty: "Hard",
      topic: "Web Vulnerabilities",
      points: 3,
    },
    {
      id: 12,
      text: "What does DoS stand for in cybersecurity?",
      options: [
        "Density of Service",
        "Denial of Service",
        "Department of Security",
        "Disk Operating System",
      ],
      answer: "Denial of Service",
      explanation:
        "A Denial of Service (DoS) attack aims to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services.",
      difficulty: "Easy",
      topic: "Attack Types",
      points: 1,
    },
    {
      id: 13,
      text: "What is the difference between a vulnerability assessment and a penetration test?",
      options: [
        "They are different terms for the same process",
        "Vulnerability assessments identify weaknesses, while penetration tests attempt to exploit them",
        "Penetration tests are only theoretical while vulnerability assessments involve actual testing",
        "Vulnerability assessments are illegal while penetration tests are legal",
      ],
      answer:
        "Vulnerability assessments identify weaknesses, while penetration tests attempt to exploit them",
      explanation:
        "Vulnerability assessments focus on identifying and reporting potential vulnerabilities, while penetration testing goes further by actually exploiting vulnerabilities to demonstrate real-world impact.",
      difficulty: "Medium",
      topic: "Methodology",
      points: 2,
    },
    {
      id: 14,
      text: "What does 'footprinting' refer to in ethical hacking?",
      options: [
        "Physically monitoring someone's movements",
        "The process of gathering information about a target system",
        "Creating footprints on organizational premises",
        "Running around a building to test physical security",
      ],
      answer: "The process of gathering information about a target system",
      explanation:
        "Footprinting is the process of collecting as much information as possible about a target system to identify ways to intrude into the system.",
      difficulty: "Medium",
      topic: "Reconnaissance",
      points: 2,
    },
    {
      id: 15,
      text: "What is a 'brute force attack'?",
      options: [
        "A physical attack on server hardware",
        "A method of trial and error to guess login credentials",
        "Using specialized tools to physically break encryption devices",
        "A direct attack on firewalls using specialized hardware",
      ],
      answer: "A method of trial and error to guess login credentials",
      explanation:
        "A brute force attack involves systematically checking all possible passwords or keys until the correct one is found.",
      difficulty: "Easy",
      topic: "Attack Types",
      points: 1,
    },
    {
      id: 16,
      text: "What is a 'Rainbow Table'?",
      options: [
        "A colorful diagram showing network connections",
        "A table of colors used for website design",
        "A precomputed table for reversing cryptographic hash functions",
        "A list of approved wireless networks",
      ],
      answer: "A precomputed table for reversing cryptographic hash functions",
      explanation:
        "A Rainbow Table is a precomputed table used for cracking password hashes more quickly than with brute force methods.",
      difficulty: "Hard",
      topic: "Password Attacks",
      points: 3,
    },
    {
      id: 17,
      text: "What does 'XSS' stand for in web security?",
      options: [
        "eXtended Security System",
        "Cross-Site Scripting",
        "eXtra Secure Socket",
        "eXternal Security Service",
      ],
      answer: "Cross-Site Scripting",
      explanation:
        "Cross-Site Scripting (XSS) is a type of security vulnerability typically found in web applications that allows attackers to inject client-side scripts into web pages viewed by other users.",
      difficulty: "Hard",
      topic: "Web Vulnerabilities",
      points: 3,
    },
    {
      id: 18,
      text: "What best describes the concept of 'least privilege' in security?",
      options: [
        "Only the CEO should have admin access",
        "Users should be given minimum access needed to perform their job",
        "All users should have equal access rights",
        "Privileges should only be given to IT staff",
      ],
      answer:
        "Users should be given minimum access needed to perform their job",
      explanation:
        "The principle of least privilege means giving users only the minimum levels of access or permissions needed to perform their job functions.",
      difficulty: "Medium",
      topic: "Security Principles",
      points: 2,
    },
    {
      id: 19,
      text: "What is a 'honeypot' in cybersecurity?",
      options: [
        "A sweet reward for finding vulnerabilities",
        "A container of actual honey used to attract ants away from computers",
        "A decoy system designed to attract attackers and detect or deflect attacks",
        "A type of encryption algorithm",
      ],
      answer:
        "A decoy system designed to attract attackers and detect or deflect attacks",
      explanation:
        "A honeypot is a security mechanism set as a trap to detect, deflect, or study hacking attempts. It appears to be a legitimate part of the network but is isolated and monitored.",
      difficulty: "Medium",
      topic: "Defense Mechanisms",
      points: 2,
    },
    {
      id: 20,
      text: "What is the primary goal of encryption?",
      options: [
        "To speed up data transmission",
        "To compress data to save space",
        "To ensure data confidentiality and integrity",
        "To make data look more complicated",
      ],
      answer: "To ensure data confidentiality and integrity",
      explanation:
        "Encryption transforms data into a format unreadable to unauthorized users, ensuring that sensitive information remains confidential and can be verified for integrity.",
      difficulty: "Easy",
      topic: "Cryptography",
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
