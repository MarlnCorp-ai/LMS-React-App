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
    /* ----------  Transformer Fundamentals  ---------- */
    {
      id: 1,
      text: "In the original Transformer architecture, the computational complexity of self-attention for a sequence of length n is:",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
      answer: "O(n²)",
      explanation:
        "Each token attends to every other token, producing an n × n attention matrix, so time and memory scale quadratically.",
      difficulty: "Medium",
      topic: "Transformers",
      points: 2,
    },
    {
      id: 2,
      text: "Which tokenization strategy keeps unknown words intact by breaking them into smaller known sub-units?",
      options: [
        "Word-level tokenization",
        "Byte-Pair Encoding (BPE)",
        "Character RNN",
        "Fixed-hash bucketing",
      ],
      answer: "Byte-Pair Encoding (BPE)",
      explanation:
        "BPE iteratively merges frequent symbol pairs, allowing it to represent out-of-vocabulary words as sequences of sub-tokens.",
      difficulty: "Easy",
      topic: "Pre-processing",
      points: 1,
    },
    /* ----------  Fine-Tuning & Adaptation  ---------- */
    {
      id: 3,
      text: "Which parameter-efficient fine-tuning method inserts low-rank trainable matrices into existing weight layers?",
      options: ["LoRA", "Dropout", "Distillation", "Weight Pruning"],
      answer: "LoRA",
      explanation:
        "LoRA (Low-Rank Adaptation) freezes the original weights and trains small rank-r adapters, greatly reducing trainable parameters.",
      difficulty: "Medium",
      topic: "Fine-Tuning",
      points: 2,
    },
    {
      id: 4,
      text: "The typical three-stage Reinforcement Learning from Human Feedback (RLHF) pipeline is:",
      options: [
        "Reward modeling → Supervised fine-tuning → Policy optimization",
        "Supervised fine-tuning → Reward modeling → Policy optimization",
        "Policy optimization → Reward modeling → Supervised fine-tuning",
        "Unsupervised pre-training → Policy optimization → Reward modeling",
      ],
      answer: "Supervised fine-tuning → Reward modeling → Policy optimization",
      explanation:
        "SFT trains the model on demonstrations; a reward model is then trained on preference data; finally PPO or similar optimizes the policy with that reward.",
      difficulty: "Hard",
      topic: "RLHF",
      points: 3,
    },
    /* ----------  Prompt Engineering  ---------- */
    {
      id: 5,
      text: "Increasing the **temperature** parameter during sampling will generally:",
      options: [
        "Make outputs shorter",
        "Reduce randomness and make outputs more deterministic",
        "Increase randomness and creativity of outputs",
        "Cause the model to ignore the prompt entirely",
      ],
      answer: "Increase randomness and creativity of outputs",
      explanation:
        "Higher temperatures flatten the softmax distribution, giving lower-probability tokens a better chance of being selected.",
      difficulty: "Easy",
      topic: "Prompt Engineering",
      points: 1,
    },
    {
      id: 6,
      text: "A **chain-of-thought** prompt primarily aims to:",
      options: [
        "Reduce token count for cheaper inference",
        "Force the model to output its intermediate reasoning steps",
        "Block malicious jailbreak attempts",
        "Switch the model into instruction-tuning mode",
      ],
      answer: "Force the model to output its intermediate reasoning steps",
      explanation:
        "Explicit reasoning traces can improve factual accuracy and allow humans to audit the model’s logic.",
      difficulty: "Medium",
      topic: "Prompt Engineering",
      points: 2,
    },
    /* ----------  Retrieval-Augmented Generation (RAG)  ---------- */
    {
      id: 7,
      text: "In a RAG system, the **vector store** is responsible for:",
      options: [
        "Generating the final answer with language modeling",
        "Encoding the query into sparse term vectors",
        "Storing dense embeddings and returning the nearest neighbours",
        "Converting retrieved passages to PDFs",
      ],
      answer: "Storing dense embeddings and returning the nearest neighbours",
      explanation:
        "The retriever embeds the query, the vector DB returns top-k similar chunks, and the generator conditions on them.",
      difficulty: "Easy",
      topic: "RAG",
      points: 1,
    },
    {
      id: 8,
      text: "A common way to mitigate **retrieval lag** in real-time RAG pipelines is to:",
      options: [
        "Pre-compute and cache embeddings for frequent queries",
        "Disable batching in the retriever",
        "Use greedy decoding instead of beam search",
        "Lower the model temperature to 0",
      ],
      answer: "Pre-compute and cache embeddings for frequent queries",
      explanation:
        "Caching avoids recomputation and nearest-neighbour search for repeated or similar queries, reducing latency.",
      difficulty: "Medium",
      topic: "RAG",
      points: 2,
    },
    /* ----------  Diffusion & Image Models  ---------- */
    {
      id: 9,
      text: "During inference in a denoising diffusion model, the process generally proceeds:",
      options: [
        "From clear image → progressively add noise",
        "From pure noise → gradually denoise to image",
        "By directly predicting image pixels in a single forward pass",
        "By transforming an image into a latent space and back using GANs",
      ],
      answer: "From pure noise → gradually denoise to image",
      explanation:
        "The model reverses the forward noise schedule, iteratively predicting less-noisy versions until a crisp image remains.",
      difficulty: "Easy",
      topic: "Diffusion",
      points: 1,
    },
    {
      id: 10,
      text: "The **classifier-free guidance** trick in diffusion models works by:",
      options: [
        "Training without labels and applying CLIP post-hoc",
        "Interpolating between conditional and unconditional predictions to steer outputs",
        "Using a second GAN discriminator for feedback",
        "Replacing U-Net with a Vision Transformer backbone",
      ],
      answer:
        "Interpolating between conditional and unconditional predictions to steer outputs",
      explanation:
        "By scaling the difference between conditional and unconditional noise estimates, guidance strengthens adherence to text prompts.",
      difficulty: "Hard",
      topic: "Diffusion",
      points: 3,
    },
    /* ----------  Evaluation & Metrics  ---------- */
    {
      id: 11,
      text: "Which metric measures a language model’s average per-token log-likelihood on a corpus?",
      options: ["BLEU", "Perplexity", "ROUGE-L", "FID"],
      answer: "Perplexity",
      explanation:
        "Perplexity = 2^(cross-entropy); lower values indicate the model better predicts the test distribution.",
      difficulty: "Medium",
      topic: "Evaluation",
      points: 2,
    },
    {
      id: 12,
      text: "For image generation, **FID (Fréchet Inception Distance)** compares:",
      options: [
        "Pixel-wise MSE between generated and real images",
        "Statistics of generated and real image features in Inception-v3 embedding space",
        "Compression ratios of PNG vs. JPEG outputs",
        "Number of unique tokens in captions",
      ],
      answer:
        "Statistics of generated and real image features in Inception-v3 embedding space",
      explanation:
        "FID computes the Wasserstein-2 distance between multivariate Gaussians fitted to deep features of real and generated images.",
      difficulty: "Medium",
      topic: "Evaluation",
      points: 2,
    },
    /* ----------  Safety & Security  ---------- */
    {
      id: 13,
      text: "A **prompt-injection** attack against an LLM typically aims to:",
      options: [
        "Lower inference latency",
        "Force the model to reveal or perform disallowed content",
        "Decrease the model’s perplexity score",
        "Fine-tune the model on the attacker’s data",
      ],
      answer: "Force the model to reveal or perform disallowed content",
      explanation:
        "By appending malicious instructions, attackers can override system prompts or policies, leading to policy-breaking outputs.",
      difficulty: "Medium",
      topic: "Security",
      points: 2,
    },
    {
      id: 14,
      text: "OpenAI’s **RL-alignment training** primarily targets which risk?",
      options: [
        "Model collapse due to mode dropping",
        "Systematic preference for longer outputs",
        "Misalignment between model behaviors and human values",
        "Exceeding GPU VRAM limits during training",
      ],
      answer: "Misalignment between model behaviors and human values",
      explanation:
        "Human preferences guide reward modeling so the model’s actions better reflect desired, safe behaviors.",
      difficulty: "Hard",
      topic: "Safety",
      points: 3,
    },
    /* ----------  Deployment & Efficiency  ---------- */
    {
      id: 15,
      text: "Which technique quantizes both weights and activations to 8-bit integers while preserving accuracy for LLM inference?",
      options: [
        "LayerNorm folding",
        "QLoRA",
        "Vectorization",
        "Teacher forcing",
      ],
      answer: "QLoRA",
      explanation:
        "QLoRA adopts double-quantization with NF4 4-bit weights for training and 8-bit inference, retaining quality with massive memory savings.",
      difficulty: "Hard",
      topic: "Optimization",
      points: 3,
    },
    {
      id: 16,
      text: "Speculative decoding accelerates generation by:",
      options: [
        "Running a smaller draft model to propose tokens and a larger model to verify/correct them",
        "Increasing the batch size during beam search",
        "Caching KV tensors between unrelated requests",
        "Using stochastic weight averaging before inference",
      ],
      answer:
        "Running a smaller draft model to propose tokens and a larger model to verify/correct them",
      explanation:
        "The big model only computes accepted tokens, reducing overall FLOPs while maintaining quality.",
      difficulty: "Hard",
      topic: "Optimization",
      points: 3,
    },
    /* ----------  Audio & Multimodal  ---------- */
    {
      id: 17,
      text: "Which model architecture underpins **Whisper** for automatic speech recognition?",
      options: [
        "Conformer encoder-decoder Transformer",
        "Pure CNN with dilated convolutions",
        "Bidirectional LSTM + CTC",
        "WaveNet autoregressive decoder",
      ],
      answer: "Conformer encoder-decoder Transformer",
      explanation:
        "Whisper uses a log-Mel spectrogram input fed into a Conformer-style encoder and a text decoder Transformer.",
      difficulty: "Medium",
      topic: "Multimodal",
      points: 2,
    },
    /* ----------  Embeddings & Similarity  ---------- */
    {
      id: 18,
      text: "Cosine similarity between two embedding vectors is −1 when they are:",
      options: [
        "Identical",
        "Orthogonal",
        "Pointing in exactly opposite directions",
        "Of different dimensionalities",
      ],
      answer: "Pointing in exactly opposite directions",
      explanation:
        "Cosine similarity is the normalized dot product; opposite vectors have cosine = −1, indicating maximal dissimilarity in that metric.",
      difficulty: "Easy",
      topic: "Embeddings",
      points: 1,
    },
    /* ----------  Generative Adversarial Networks  ---------- */
    {
      id: 19,
      text: "In a GAN, **mode collapse** refers to the generator:",
      options: [
        "Failing to learn and outputting pure noise",
        "Producing limited varieties of outputs that fool the discriminator",
        "Overfitting exactly to the training dataset images",
        "Using gradients that vanish due to ReLU saturation",
      ],
      answer:
        "Producing limited varieties of outputs that fool the discriminator",
      explanation:
        "The generator collapses to a few modes, reducing diversity; techniques like minibatch discrimination help counteract this.",
      difficulty: "Medium",
      topic: "GANs",
      points: 2,
    },
    /* ----------  Ethics & Policy  ---------- */
    {
      id: 20,
      text: "The term **data poisoning** in generative-model training pipelines denotes:",
      options: [
        "Adversaries inserting malicious examples to manipulate model behavior",
        "Random label noise that improves generalization",
        "Applying CutMix augmentations to images",
        "Encrypting training data at rest",
      ],
      answer:
        "Adversaries inserting malicious examples to manipulate model behavior",
      explanation:
        "Poisoned data can steer generation (e.g., biased or harmful outputs) or create backdoors activated by trigger prompts.",
      difficulty: "Hard",
      topic: "Security",
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
