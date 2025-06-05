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
    /* ----------  SQL & Warehousing  ---------- */
    {
      id: 1,
      text: "In a dimensional warehouse, a STAR schema organizes data so that:",
      options: [
        "Fact tables and dimension tables form a central fact with surrounding dimensions",
        "All tables are fully normalized up to 3NF",
        "Only one table holds both facts and dimensions",
        "Data is partitioned strictly by time",
      ],
      answer:
        "Fact tables and dimension tables form a central fact with surrounding dimensions",
      explanation:
        "A STAR schema optimizes analytic queries by denormalizing look-ups into separate dimension tables around a wide fact table.",
      difficulty: "Easy",
      topic: "Data Modeling",
      points: 1,
    },
    {
      id: 2,
      text: "Which SQL clause is processed LAST in the logical query execution order?",
      options: ["SELECT", "FROM", "GROUP BY", "ORDER BY"],
      answer: "ORDER BY",
      explanation:
        "Logical order: FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT/OFFSET.",
      difficulty: "Medium",
      topic: "SQL",
      points: 2,
    },
    /* ----------  Batch & ETL  ---------- */
    {
      id: 3,
      text: "In Apache Airflow, a DAG run is triggered but one task keeps retrying and failing. Which Airflow feature lets you prevent down-stream tasks from executing on partial data?",
      options: ["BranchPythonOperator", "Trigger Rules", "XCom", "Sensors"],
      answer: "Trigger Rules",
      explanation:
        "Trigger rules (e.g., `all_success`, `one_failed`) control whether a task runs based on the state of upstream tasks, guarding against partial pipelines.",
      difficulty: "Medium",
      topic: "Orchestration",
      points: 2,
    },
    {
      id: 4,
      text: "Which file format is **columnar**, supports schema evolution, and is optimized for analytics in Spark?",
      options: ["CSV", "JSON", "Parquet", "XML"],
      answer: "Parquet",
      explanation:
        "Parquet is a columnar storage format with compression, predicate push-down, and schema evolution—ideal for big-data analytics.",
      difficulty: "Easy",
      topic: "Storage Formats",
      points: 1,
    },
    /* ----------  Big-Data Processing  ---------- */
    {
      id: 5,
      text: "In Apache Spark, which transformation triggers execution of the DAG?",
      options: ["map()", "filter()", "select()", "count()"],
      answer: "count()",
      explanation:
        "Transformations are lazy; actions like `count()`, `collect()`, or `write()` execute the lineage DAG.",
      difficulty: "Medium",
      topic: "Spark",
      points: 2,
    },
    {
      id: 6,
      text: "Which component in Hadoop is responsible for resource management across the cluster?",
      options: ["HDFS", "MapReduce", "YARN", "Hive Metastore"],
      answer: "YARN",
      explanation:
        "Yet Another Resource Negotiator (YARN) allocates CPU and memory to applications running on Hadoop clusters.",
      difficulty: "Easy",
      topic: "Hadoop",
      points: 1,
    },
    /* ----------  Cloud Data Warehouses  ---------- */
    {
      id: 7,
      text: "Amazon Redshift Spectrum allows you to:",
      options: [
        "Run OLTP workloads on Redshift nodes",
        "Query data in S3 without loading it into Redshift clusters",
        "Stream Kinesis data directly into Redshift without staging",
        "Replicate Redshift snapshots to Glacier automatically",
      ],
      answer: "Query data in S3 without loading it into Redshift clusters",
      explanation:
        "Spectrum extends Redshift SQL to read external tables stored on S3, blending lake and warehouse data.",
      difficulty: "Medium",
      topic: "Cloud DW",
      points: 2,
    },
    {
      id: 8,
      text: "BigQuery charges for queries primarily based on:",
      options: [
        "Number of concurrent users",
        "Bytes processed",
        "Execution time",
        "Rows returned",
      ],
      answer: "Bytes processed",
      explanation:
        "On-demand BigQuery pricing computes cost from the number of bytes read by the query, encouraging partition/prune tactics.",
      difficulty: "Easy",
      topic: "Cloud DW",
      points: 1,
    },
    /* ----------  Streaming & Messaging  ---------- */
    {
      id: 9,
      text: "Which guarantee does **Kafka** achieve by default with acks=all and replication factor ≥ 3?",
      options: [
        "Exactly-once delivery",
        "At-least-once durability against single-broker failure",
        "At-most-once delivery",
        "Total ordering across independent topics",
      ],
      answer: "At-least-once durability against single-broker failure",
      explanation:
        "With `acks=all` the leader waits for ISR replicas; duplicates are possible (at-least-once) but data is safe if one broker fails.",
      difficulty: "Hard",
      topic: "Streaming",
      points: 3,
    },
    {
      id: 10,
      text: "Apache Flink’s **checkpointing** mechanism primarily supports:",
      options: [
        "Cluster autoscaling",
        "Exactly-once state consistency during failures",
        "Columnar storage",
        "SQL query parsing",
      ],
      answer: "Exactly-once state consistency during failures",
      explanation:
        "Flink snapshots operator state so it can restore and replay streams without duplicating side-effects, achieving exactly-once semantics.",
      difficulty: "Hard",
      topic: "Streaming",
      points: 3,
    },
    /* ----------  Data Governance & Quality  ---------- */
    {
      id: 11,
      text: "The **GDPR** ‘right to be forgotten’ most directly impacts which data-engineering practice?",
      options: [
        "Immutable data lakes",
        "Schema-on-read approaches",
        "Data lineage tracking",
        "Low-latency caching",
      ],
      answer: "Immutable data lakes",
      explanation:
        "Compliance may require physically deleting or masking personal data—challenging with append-only, immutable storage designs.",
      difficulty: "Medium",
      topic: "Governance",
      points: 2,
    },
    {
      id: 12,
      text: "Data **profiling** is BEST described as:",
      options: [
        "Encrypting sensitive columns",
        "Measuring and analyzing statistics of data sets to detect anomalies",
        "Creating surrogate keys in dimensional models",
        "Scheduling Airflow DAGs at midnight",
      ],
      answer:
        "Measuring and analyzing statistics of data sets to detect anomalies",
      explanation:
        "Profiling surfaces quality issues (nulls, distributions, uniqueness) before pipelines or ML consume data.",
      difficulty: "Easy",
      topic: "Quality",
      points: 1,
    },
    /* ----------  Performance & Storage  ---------- */
    {
      id: 13,
      text: "Partitioning a Hive table by date column improves performance mainly by:",
      options: [
        "Reducing the data scanned during query execution",
        "Increasing replication factor automatically",
        "Changing the file format to row-based",
        "Enabling ACID transactions",
      ],
      answer: "Reducing the data scanned during query execution",
      explanation:
        "Partitions create separate directories; query predicates prune irrelevant partitions, lowering I/O and runtime.",
      difficulty: "Medium",
      topic: "Performance",
      points: 2,
    },
    {
      id: 14,
      text: "Which compression codec is **splittable**, making it suitable for Hadoop input?",
      options: ["Gzip", "Bzip2", "Snappy", "LZ4"],
      answer: "Bzip2",
      explanation:
        "Bzip2 blocks allow Hadoop to split files for parallel processing; gzip streams cannot be split.",
      difficulty: "Hard",
      topic: "Storage",
      points: 3,
    },
    /* ----------  Security  ---------- */
    {
      id: 15,
      text: "In AWS, which service provides fine-grained, column-level access control for data in S3 and Glue Data Catalog?",
      options: [
        "AWS Shield",
        "AWS Lake Formation",
        "AWS IAM Roles Anywhere",
        "AWS Secrets Manager",
      ],
      answer: "AWS Lake Formation",
      explanation:
        "Lake Formation builds on Glue to define policies down to column level and integrates with Athena, Redshift Spectrum, EMR.",
      difficulty: "Medium",
      topic: "Security",
      points: 2,
    },
    /* ----------  Scheduling & Orchestration  ---------- */
    {
      id: 16,
      text: "A **Sensor** in Airflow will typically:",
      options: [
        "Spin up new Kubernetes pods for workers",
        "Block a task’s execution until a condition (file, partition, time) is met",
        "Encrypt data stored in XCom",
        "Monitor DAG throughput metrics",
      ],
      answer:
        "Block a task’s execution until a condition (file, partition, time) is met",
      explanation:
        "Sensors poll or wait for external events, enabling event-driven DAG workflows.",
      difficulty: "Easy",
      topic: "Orchestration",
      points: 1,
    },
    /* ----------  DataOps & Observability  ---------- */
    {
      id: 17,
      text: "The **DataOps** principle of ‘shift-left testing’ advocates for:",
      options: [
        "Running data-quality checks early in the pipeline development lifecycle",
        "Restricting database access to DBAs only",
        "Delaying schema validation until production",
        "Using manual deployments for critical jobs",
      ],
      answer:
        "Running data-quality checks early in the pipeline development lifecycle",
      explanation:
        "Shift-left detects issues sooner, reducing rework and promoting reliable delivery.",
      difficulty: "Medium",
      topic: "DataOps",
      points: 2,
    },
    /* ----------  Distributed Systems  ---------- */
    {
      id: 18,
      text: "In CAP theorem terms, Apache Cassandra prioritizes:",
      options: [
        "Consistency and Availability (CA)",
        "Availability and Partition Tolerance (AP)",
        "Consistency and Partition Tolerance (CP)",
        "Guaranteeing all three simultaneously",
      ],
      answer: "Availability and Partition Tolerance (AP)",
      explanation:
        "Cassandra trades immediate consistency for high availability and tolerance to network partitions; tunable consistency levels mitigate this trade-off.",
      difficulty: "Hard",
      topic: "Distributed Systems",
      points: 3,
    },
    /* ----------  ML & Feature Pipelines  ---------- */
    {
      id: 19,
      text: "A **feature store** in modern data platforms primarily provides:",
      options: [
        "Hyper-parameter search for models",
        "Storage, versioning, and serving of ML features for training and real-time inference",
        "GPU orchestration for deep-learning tasks",
        "Model interpretability dashboards",
      ],
      answer:
        "Storage, versioning, and serving of ML features for training and real-time inference",
      explanation:
        "Feature stores ensure feature consistency between training and serving, support lineage, and reduce duplication.",
      difficulty: "Medium",
      topic: "ML Engineering",
      points: 2,
    },
    /* ----------  Emerging & Advanced  ---------- */
    {
      id: 20,
      text: "Delta Lake’s **ACID** guarantees on data lakes are enabled primarily through:",
      options: [
        "Object-level versioning in S3 only",
        "Transaction logs (_delta_log) plus Parquet data files",
        "Hadoop NameNode edit logs",
        "Compaction of small files into ORC",
      ],
      answer: "Transaction logs (_delta_log) plus Parquet data files",
      explanation:
        "Delta Lake writes immutable Parquet files and records each transaction in JSON metadata logs, enabling ACID semantics and time travel.",
      difficulty: "Hard",
      topic: "Lakehouses",
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
