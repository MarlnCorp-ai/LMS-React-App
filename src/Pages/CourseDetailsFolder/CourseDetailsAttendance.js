
import { useState } from "react";

const quiz = {
  question: "Which algorithm is used in the Transformer model?",
  options: ["Naive Bayes", "Recurrent Neural Network", "Self-Attention", "SVM"],
  correctAnswer: "Self-Attention",
};

const attendanceHistory = [
    { date: 'April 8, 2025', status: 'Present', note: 'Quiz completed on time' },
    { date: 'April 1, 2025', status: 'Absent', note: 'Missed the quiz' },
    { date: 'March 25, 2025', status: 'Present' },
    { date: 'March 19, 2025', status: 'Present', note: 'Quiz completed on time' },
    { date: 'March 11, 2025', status: 'Present', note: 'Quiz completed on time' },
    { date: 'March 03, 2025', status: 'Present', note: 'Quiz completed on time' },
    { date: 'February 25, 2025', status: 'Absent', note: 'Incorrect Answer' },
    { date: 'February 18, 2025', status: 'Absent', note: 'Missed the quiz' },
    { date: 'February 10, 2025', status: 'Present', note: 'Quiz completed on time' },
  ];
  

const CourseAttendance = () => {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setIsCorrect(selected === quiz.correctAnswer);
  };

  return (
    <>
    
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Attendance Quiz of 13-April-2025</h2>
      <p className="mb-4 text-gray-700">
        Answer the following question to mark your attendance.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <p className="font-medium mb-2">{quiz.question}</p>
          {quiz.options.map((option, idx) => (
            <label key={idx} className="block mb-2">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selected === option}
                onChange={(e) => setSelected(e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Answer
        </button>
      </form>

      {submitted && (
        <div className={`mt-4 p-4 rounded ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {isCorrect ? "✅ Correct! Your attendance has been recorded." : "❌ Incorrect answer. Please try again tomorrow."}
        </div>
      )}
    </div>

    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Overall Attendance</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-green-500 h-4" style={{ width: '67%' }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">6 out of 9 sessions attended (67%)</p>
    </div>

    {/* Attendance History */}
    <div className="mt-8">
    <h3 className="text-xl font-semibold text-blue-700 mb-4">📅 Attendance History</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {attendanceHistory.map((entry, index) => (
        <div
            key={index}
            className={`p-4 rounded-xl shadow-md border-l-4 ${
            entry.status === 'Present' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
            }`}
        >
            <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">{entry.date}</span>
            <span className={`text-sm font-medium ${
                entry.status === 'Present' ? 'text-green-600' : 'text-red-600'
            }`}>
                {entry.status === 'Present' ? '✔️ Present' : '❌ Absent'}
            </span>
            </div>
            {entry.note && (
            <p className="text-gray-600 text-sm mt-1 italic">"{entry.note}"</p>
            )}
        </div>
        ))}
    </div>
    </div>
</>
  );
};

export default CourseAttendance;
