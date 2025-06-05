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
    /* ----------  Secure Coding Basics  ---------- */
    {
      id: 1,
      text: "Which header helps prevent Cross-Site Scripting (XSS) by instructing browsers to only execute scripts from trusted origins?",
      options: [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "Referrer-Policy",
      ],
      answer: "Content-Security-Policy",
      explanation:
        "CSP allows developers to whitelist approved script sources, greatly reducing the risk of XSS.",
      difficulty: "Easy",
      topic: "Web Security",
      points: 1,
    },
    {
      id: 2,
      text: "What principle suggests an application should grant users the minimum privileges necessary to perform their tasks?",
      options: [
        "Fail Safe Defaults",
        "Defense in Depth",
        "Least Privilege",
        "Complete Mediation",
      ],
      answer: "Least Privilege",
      explanation:
        "Applying least privilege limits damage from compromised accounts or mistakes.",
      difficulty: "Easy",
      topic: "Design Principles",
      points: 1,
    },
    /* ----------  Authentication & Authorization  ---------- */
    {
      id: 3,
      text: "OAuth 2.0 is primarily a protocol for:",
      options: [
        "User password storage",
        "Delegating authorization without sharing credentials",
        "End-to-end encryption of data in transit",
        "Two-factor authentication (2FA)",
      ],
      answer: "Delegating authorization without sharing credentials",
      explanation:
        "OAuth 2.0 lets users grant limited access to resources on their behalf via tokens rather than passwords.",
      difficulty: "Medium",
      topic: "Auth",
      points: 2,
    },
    {
      id: 4,
      text: "Which attack involves an adversary forcing a logged-in victim’s browser to send unwanted requests to a web application?",
      options: [
        "SQL Injection",
        "Cross-Site Request Forgery (CSRF)",
        "Clickjacking",
        "Man-in-the-Middle",
      ],
      answer: "Cross-Site Request Forgery (CSRF)",
      explanation:
        "CSRF exploits the victim’s authenticated session; anti-CSRF tokens and SameSite cookies mitigate it.",
      difficulty: "Medium",
      topic: "Web Security",
      points: 2,
    },
    /* ----------  Cryptography  ---------- */
    {
      id: 5,
      text: "Which algorithm provides **authenticated encryption** (confidentiality + integrity) in modern TLS?",
      options: ["AES-CBC", "AES-GCM", "RC4", "DES"],
      answer: "AES-GCM",
      explanation:
        "AES in Galois/Counter Mode offers encryption with built-in integrity (AEAD).",
      difficulty: "Medium",
      topic: "Cryptography",
      points: 2,
    },
    {
      id: 6,
      text: "What property does a cryptographic hash function NOT necessarily provide?",
      options: [
        "Determinism",
        "One-wayness",
        "Collision resistance",
        "Reversibility",
      ],
      answer: "Reversibility",
      explanation:
        "Good hashes are **not** reversible; you can’t derive the original input from the digest.",
      difficulty: "Easy",
      topic: "Cryptography",
      points: 1,
    },
    /* ----------  Injection & Input Validation  ---------- */
    {
      id: 7,
      text: "Parameterized (prepared) statements primarily mitigate which class of vulnerability?",
      options: [
        "Command Injection",
        "SQL Injection",
        "Server-Side Request Forgery",
        "Cross-Site Scripting",
      ],
      answer: "SQL Injection",
      explanation:
        "Binding parameters separates code from data, neutralizing malicious SQL fragments.",
      difficulty: "Easy",
      topic: "Injection",
      points: 1,
    },
    {
      id: 8,
      text: "Server-Side Request Forgery (SSRF) enables attackers to:",
      options: [
        "Execute scripts in victims’ browsers",
        "Trick the server into making unintended network calls",
        "Bypass same-origin policy in JavaScript",
        "Overload a service by flooding it with traffic",
      ],
      answer: "Trick the server into making unintended network calls",
      explanation:
        "With SSRF, attackers abuse server-side fetch logic to access internal or protected resources.",
      difficulty: "Hard",
      topic: "Web Security",
      points: 3,
    },
    /* ----------  Secure Transport  ---------- */
    {
      id: 9,
      text: "The **HSTS** header primarily protects against:",
      options: [
        "Session fixation",
        "Clickjacking",
        "Protocol downgrade attacks",
        "Password brute-force",
      ],
      answer: "Protocol downgrade attacks",
      explanation:
        "HTTP Strict Transport Security forces browsers to use HTTPS, preventing SSL-strip/downgrade attacks.",
      difficulty: "Medium",
      topic: "Transport Security",
      points: 2,
    },
    {
      id: 10,
      text: "Perfect Forward Secrecy (PFS) in TLS ensures that:",
      options: [
        "Certificates never expire",
        "Older encrypted sessions remain secure even if the server’s private key is compromised later",
        "All traffic is end-to-end encrypted",
        "Clients can skip certificate validation",
      ],
      answer:
        "Older encrypted sessions remain secure even if the server’s private key is compromised later",
      explanation:
        "Ephemeral Diffie-Hellman keys provide new secrets per session, protecting past data.",
      difficulty: "Hard",
      topic: "Cryptography",
      points: 3,
    },
    /* ----------  Secure Storage  ---------- */
    {
      id: 11,
      text: "For password storage, the BEST practice is to:",
      options: [
        "Encrypt passwords with AES-256",
        "Hash passwords with a slow, salted hash like bcrypt or Argon2",
        "Store SHA-1 hashes without salt for speed",
        "Base64-encode passwords",
      ],
      answer: "Hash passwords with a slow, salted hash like bcrypt or Argon2",
      explanation:
        "Adaptive, salted hashes thwart rainbow tables and make brute-force expensive.",
      difficulty: "Easy",
      topic: "Secure Storage",
      points: 1,
    },
    {
      id: 12,
      text: "Which security issue can occur if secrets (API keys, tokens) are checked into VCS like Git?",
      options: [
        "Replay attacks",
        "Credential leakage allowing unauthorized access",
        "Key stretching",
        "Privilege escalation in the OS kernel",
      ],
      answer: "Credential leakage allowing unauthorized access",
      explanation:
        "Exposed secrets let attackers access services; use secret scanning, rotation, and vaults to prevent this.",
      difficulty: "Medium",
      topic: "Secrets Management",
      points: 2,
    },
    /* ----------  Logging & Monitoring  ---------- */
    {
      id: 13,
      text: "Which practice helps detect tampering in application logs?",
      options: [
        "Storing logs locally without backups",
        "Digitally signing or hashing logs and sending them to a central, append-only store",
        "Disabling verbose logging",
        "Rotating logs every minute",
      ],
      answer:
        "Digitally signing or hashing logs and sending them to a central, append-only store",
      explanation:
        "Immutable, verifiable logs support forensics and compliance requirements.",
      difficulty: "Medium",
      topic: "Monitoring",
      points: 2,
    },
    /* ----------  Secure DevOps / DevSecOps  ---------- */
    {
      id: 14,
      text: "“Shift-left” security means:",
      options: [
        "Perform penetration testing only after release",
        "Embedding security activities earlier in the SDLC, such as in design, code, and build stages",
        "Moving the security team physically closer to development teams",
        "Reducing security testing to speed delivery",
      ],
      answer:
        "Embedding security activities earlier in the SDLC, such as in design, code, and build stages",
      explanation:
        "Early detection lowers cost and accelerates secure releases.",
      difficulty: "Easy",
      topic: "DevSecOps",
      points: 1,
    },
    {
      id: 15,
      text: "A Software Bill of Materials (SBOM) is valuable because it:",
      options: [
        "Lists all open network ports in production",
        "Enumerates components and dependencies to identify vulnerable libraries quickly",
        "Provides runtime CPU profiles",
        "Generates automatic TLS certificates",
      ],
      answer:
        "Enumerates components and dependencies to identify vulnerable libraries quickly",
      explanation:
        "SBOMs enhance supply-chain transparency and enable faster patching.",
      difficulty: "Medium",
      topic: "Supply Chain",
      points: 2,
    },
    /* ----------  Mobile & Client Security  ---------- */
    {
      id: 16,
      text: "What is the main risk of using **WebViews** to load remote content inside a mobile app without proper controls?",
      options: [
        "Battery drain",
        "Client-side SQL injection",
        "Remote code execution via untrusted JavaScript",
        "Increased network latency",
      ],
      answer: "Remote code execution via untrusted JavaScript",
      explanation:
        "Exposed JavaScript bridges and lack of CSP can let attackers execute code in the app context.",
      difficulty: "Hard",
      topic: "Mobile Security",
      points: 3,
    },
    /* ----------  Threat Modeling  ---------- */
    {
      id: 17,
      text: "In STRIDE threat modeling, the “R” stands for:",
      options: ["Replay", "Reliability", "Repudiation", "Resource Exhaustion"],
      answer: "Repudiation",
      explanation:
        "Repudiation relates to users denying actions; proper logging and non-repudiation controls address it.",
      difficulty: "Medium",
      topic: "Threat Modeling",
      points: 2,
    },
    /* ----------  Cloud & Container Security  ---------- */
    {
      id: 18,
      text: "In Kubernetes, which object should you configure to restrict container permissions (e.g., disallow running as root)?",
      options: [
        "ConfigMap",
        "NetworkPolicy",
        "PodSecurityPolicy / Pod Security Standards",
        "Ingress",
      ],
      answer: "PodSecurityPolicy / Pod Security Standards",
      explanation:
        "PSP (deprecated) or the new Pod Security admission controls enforce security contexts on Pods.",
      difficulty: "Hard",
      topic: "Container Security",
      points: 3,
    },
    /* ----------  Incident Response  ---------- */
    {
      id: 19,
      text: "During an incident, the FIRST priority in the **confidentiality, integrity, availability (CIA)** triad for healthcare data is usually:",
      options: ["Availability", "Integrity", "Confidentiality", "Performance"],
      answer: "Confidentiality",
      explanation:
        "Regulations like HIPAA make protecting patient privacy paramount; outages are serious but less critical than breaches.",
      difficulty: "Medium",
      topic: "Incident Response",
      points: 2,
    },
    /* ----------  Advanced Topics  ---------- */
    {
      id: 20,
      text: "What is a **side-channel attack**?",
      options: [
        "Injecting malicious SQL through input fields",
        "Exploiting unintended information leakage (e.g., timing, power consumption) to derive secrets",
        "Overflowing a buffer to execute arbitrary code",
        "Intercepting network traffic with ARP spoofing",
      ],
      answer:
        "Exploiting unintended information leakage (e.g., timing, power consumption) to derive secrets",
      explanation:
        "Side-channels analyze indirect signals rather than direct plaintext to compromise security.",
      difficulty: "Hard",
      topic: "Advanced",
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
