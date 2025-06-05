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
      text: "What is cloud computing?",
      options: [
        "Running software exclusively on personal desktops",
        "Delivering computing services over the internet on-demand",
        "Using floppy disks to transfer data between machines",
        "A type of on-premises virtualization limited to one server rack",
      ],
      answer: "Delivering computing services over the internet on-demand",
      explanation:
        "Cloud computing is the on-demand delivery of IT resources (compute, storage, databases, etc.) over the internet with pay-as-you-go pricing.",
      difficulty: "Easy",
      topic: "Fundamentals",
      points: 1,
    },
    {
      id: 2,
      text: "Which cloud service model provides virtual machines, networking, and storage as the primary offering?",
      options: ["SaaS", "PaaS", "IaaS", "FaaS"],
      answer: "IaaS",
      explanation:
        "Infrastructure as a Service (IaaS) delivers the fundamental building blocks—VMs, storage, and networking—while the consumer manages the OS and above.",
      difficulty: "Easy",
      topic: "Service Models",
      points: 1,
    },
    {
      id: 3,
      text: "In AWS, which service is most closely associated with object storage?",
      options: ["EBS", "S3", "EFS", "Glacier Deep Archive"],
      answer: "S3",
      explanation:
        "Amazon Simple Storage Service (S3) is AWS’s scalable object-storage service for data of any size.",
      difficulty: "Easy",
      topic: "Storage",
      points: 1,
    },
    {
      id: 4,
      text: "Which of the following best describes a 'region' in a major cloud provider?",
      options: [
        "A logical account boundary for billing",
        "A single availability zone with one data center",
        "A geographic area containing multiple availability zones",
        "A set of services restricted to government customers",
      ],
      answer: "A geographic area containing multiple availability zones",
      explanation:
        "Regions are separate geographic areas that contain two or more physically isolated Availability Zones for resiliency.",
      difficulty: "Medium",
      topic: "Architecture",
      points: 2,
    },
    /* ----------  Compute  ---------- */
    {
      id: 5,
      text: "Which statement about serverless computing (Functions-as-a-Service) is TRUE?",
      options: [
        "You pay for an always-on virtual machine",
        "You must provision and manage the underlying OS patches",
        "Your code is triggered by events and you pay per execution time",
        "It is only available in private clouds",
      ],
      answer: "Your code is triggered by events and you pay per execution time",
      explanation:
        "FaaS offerings (e.g., AWS Lambda, Azure Functions, Cloud Functions) execute code in response to events and charge based on execution duration and requests.",
      difficulty: "Medium",
      topic: "Compute",
      points: 2,
    },
    {
      id: 6,
      text: "Google Kubernetes Engine (GKE), Amazon EKS, and Azure AKS are examples of:",
      options: [
        "Managed container orchestration services",
        "Database replication tools",
        "Content delivery networks",
        "Identity management platforms",
      ],
      answer: "Managed container orchestration services",
      explanation:
        "All three are fully managed services that run upstream Kubernetes control planes so users focus on workloads rather than cluster administration.",
      difficulty: "Easy",
      topic: "Containers",
      points: 1,
    },
    /* ----------  Networking & Security  ---------- */
    {
      id: 7,
      text: "What does a cloud Virtual Private Network (VPN) gateway primarily enable?",
      options: [
        "Running databases on local laptops",
        "Extending an on-premises network securely into a cloud VPC/VNet",
        "Hosting public websites without firewalls",
        "Encrypting data at rest in object storage",
      ],
      answer: "Extending an on-premises network securely into a cloud VPC/VNet",
      explanation:
        "VPN gateways create IPSec tunnels that extend private corporate networks into cloud virtual networks securely.",
      difficulty: "Medium",
      topic: "Networking",
      points: 2,
    },
    {
      id: 8,
      text: "Which AWS service provides distributed denial-of-service (DDoS) protection?",
      options: ["GuardDuty", "Shield", "Inspector", "Macie"],
      answer: "Shield",
      explanation:
        "AWS Shield (Standard & Advanced) automatically protects applications running on AWS against DDoS attacks.",
      difficulty: "Medium",
      topic: "Security",
      points: 2,
    },
    {
      id: 9,
      text: "In Azure, Network Security Groups (NSGs) function most similarly to which AWS construct?",
      options: ["Security Groups", "IAM Roles", "Route Tables", "KMS Keys"],
      answer: "Security Groups",
      explanation:
        "Azure NSGs and AWS Security Groups both act as virtual firewalls controlling inbound and outbound traffic at NIC or subnet level.",
      difficulty: "Easy",
      topic: "Security",
      points: 1,
    },
    /* ----------  Databases  ---------- */
    {
      id: 10,
      text: "Amazon RDS Multi-AZ deployments are primarily designed to improve:",
      options: [
        "Read performance through read replicas",
        "Data warehousing capabilities",
        "High availability and automatic failover",
        "Schema-less data modeling",
      ],
      answer: "High availability and automatic failover",
      explanation:
        "Multi-AZ synchronously replicates data to a standby instance in another AZ and automatically fails over during outages.",
      difficulty: "Medium",
      topic: "Databases",
      points: 2,
    },
    {
      id: 11,
      text: "Which statement about cloud NoSQL databases is FALSE?",
      options: [
        "They often provide horizontal scalability by design",
        "They require rigid, pre-defined schemas for tables",
        "They typically offer managed backups and multi-region replication",
        "They are optimized for large-scale, low-latency workloads",
      ],
      answer: "They require rigid, pre-defined schemas for tables",
      explanation:
        "NoSQL databases are schema-flexible; rigid schemas are associated with traditional relational models.",
      difficulty: "Medium",
      topic: "Databases",
      points: 2,
    },
    /* ----------  Monitoring & DevOps  ---------- */
    {
      id: 12,
      text: "Which AWS service is primarily used for monitoring metrics and setting alarms?",
      options: ["CloudTrail", "CloudWatch", "Config", "Trusted Advisor"],
      answer: "CloudWatch",
      explanation:
        "CloudWatch collects metrics, logs, and events, and can trigger alarms or automated actions based on thresholds.",
      difficulty: "Easy",
      topic: "Monitoring",
      points: 1,
    },
    {
      id: 13,
      text: "Infrastructure as Code (IaC) tools like Terraform and AWS CloudFormation help mainly with:",
      options: [
        "Manual provisioning through web consoles",
        "Automated, version-controlled resource provisioning",
        "Physical cabling of data centers",
        "Writing application business logic",
      ],
      answer: "Automated, version-controlled resource provisioning",
      explanation:
        "IaC enables defining cloud resources declaratively, storing definitions in version control, and provisioning consistently via automation.",
      difficulty: "Easy",
      topic: "DevOps",
      points: 1,
    },
    /* ----------  Cost & Governance  ---------- */
    {
      id: 14,
      text: "What is a practical benefit of using AWS Spot Instances?",
      options: [
        "Guaranteed uptime and predictable pricing",
        "Significant cost savings for interruptible workloads",
        "Automatic compliance with PCI-DSS",
        "Built-in multi-region replication",
      ],
      answer: "Significant cost savings for interruptible workloads",
      explanation:
        "Spot Instances offer unused EC2 capacity at steep discounts but can be reclaimed with short notice—ideal for flexible or fault-tolerant tasks.",
      difficulty: "Medium",
      topic: "Cost Optimization",
      points: 2,
    },
    {
      id: 15,
      text: "Which feature in Google Cloud helps you detect unusual spend and set budget alerts?",
      options: [
        "Cloud Audit Logs",
        "Cloud Billing Budgets & Alerts",
        "Cloud Run",
        "Dataflow",
      ],
      answer: "Cloud Billing Budgets & Alerts",
      explanation:
        "Budgets & Alerts enable tracking costs against thresholds and sending notifications when spend exceeds expectations.",
      difficulty: "Easy",
      topic: "Cost Management",
      points: 1,
    },
    /* ----------  Advanced / Hard  ---------- */
    {
      id: 16,
      text: "In AWS, which combination provides cross-region disaster recovery for S3 objects with versioning and replication of delete markers?",
      options: [
        "Cross-Region Replication (CRR) with versioning enabled",
        "Lifecycle rules with Glacier Instant Retrieval",
        "S3 Transfer Acceleration",
        "Storage Gateway file shares",
      ],
      answer: "Cross-Region Replication (CRR) with versioning enabled",
      explanation:
        "CRR can asynchronously copy every object (including delete markers if configured) to another region when versioning is turned on.",
      difficulty: "Hard",
      topic: "Resilience",
      points: 3,
    },
    {
      id: 17,
      text: "Which AWS service lets you run containerized workloads without managing servers or clusters, charging only for vCPU & memory used per task?",
      options: ["ECS on EC2", "EKS", "Fargate", "Lightsail"],
      answer: "Fargate",
      explanation:
        "AWS Fargate is a serverless compute engine for containers that provisions and scales resources automatically per task or pod.",
      difficulty: "Hard",
      topic: "Compute",
      points: 3,
    },
    {
      id: 18,
      text: "What is the PRIMARY reason to place an application behind a content delivery network (CDN) like CloudFront or Azure Front Door?",
      options: [
        "Reduce backend database licensing costs",
        "Serve dynamic SQL queries faster",
        "Improve latency and offload traffic with edge caching & global PoPs",
        "Provide built-in mobile app analytics",
      ],
      answer:
        "Improve latency and offload traffic with edge caching & global PoPs",
      explanation:
        "CDNs cache static (and sometimes dynamic) content at edge locations closer to users, reducing latency and origin load.",
      difficulty: "Medium",
      topic: "Networking",
      points: 2,
    },
    {
      id: 19,
      text: "In Azure, what does the Shared Responsibility Model state regarding data encryption at rest?",
      options: [
        "Microsoft is fully responsible for encrypting customer data at rest",
        "The customer is fully responsible for encrypting data at rest",
        "Responsibilities vary: Microsoft secures the infrastructure; customers must configure and enforce encryption for their data resources",
        "Encryption at rest is optional and not recommended",
      ],
      answer:
        "Responsibilities vary: Microsoft secures the infrastructure; customers must configure and enforce encryption for their data resources",
      explanation:
        "Under the Shared Responsibility Model, the provider secures hardware and foundational services; customers must enable, manage, and verify encryption settings for their workloads.",
      difficulty: "Hard",
      topic: "Security",
      points: 3,
    },
    {
      id: 20,
      text: "Which Kubernetes resource would you use to declaratively ensure exactly five identical Pods are running at all times?",
      options: ["Pod", "Job", "DaemonSet", "Deployment"],
      answer: "Deployment",
      explanation:
        "A Deployment manages ReplicaSets to maintain a desired number of identical Pods (e.g., replicas: 5) and handles rolling updates.",
      difficulty: "Hard",
      topic: "Containers",
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
