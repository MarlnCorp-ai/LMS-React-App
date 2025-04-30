import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSortUp, FaSortDown, FaEnvelope, FaDownload, FaBook, FaProjectDiagram, FaCertificate, FaHome, FaClipboardCheck, FaUsers,FaClipboardList } from "react-icons/fa";
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Legend } from 'chart.js';
import CertificateCompletionGraph from './CertificateCompletionGraph';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Legend
);

export default function TeamDashboard() {
    const [startDate, setStartDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState("team");
    const [sortDirection, setSortDirection] = useState({ field: null, ascending: true });
    const [selectedSkill, setSelectedSkill] = useState('Machine Learning');
    const [selectedLevel, setSelectedLevel] = useState('Level 3');
    const [userName, setUserName] = useState("Alex Johnson"); 
    // Sample data
    const donutData = [
        { title: "Enrollment", value: 330, people: 143, color: "#1E90FF", icon: <FaBook /> },
        { title: "Views", value: 12, people: 9, color: "#FFA500", icon: <FaProjectDiagram /> },
        { title: "Completions", value: 9, people: 9, color: "#32CD32", icon: <FaCertificate /> },
    ];

    const certificateData = [
        { learner: 'John Doe', date: '2025-01-15', certificateName: 'Cybersecurity Fundamentals' },
        { learner: 'Jane Smith', date: '2025-02-20', certificateName: 'Data Privacy Certification' },
        { learner: 'Sam Green', date: '2025-03-10', certificateName: 'Cloud Architecture' },
        { learner: 'Alex Johnson', date: '2025-01-22', certificateName: 'DevOps Essentials' },
        { learner: 'Taylor Brown', date: '2025-02-05', certificateName: 'AI Principles' },
    ];

    const complianceData = [
        { name: "Non-compliant Learners", value: 5, color: "#f87171" },
        { name: "Upcoming Deadlines (30 days)", value: 10, color: "#facc15" },
        { name: "Safe Deadlines", value: 8, color: "#34d399" },
        { name: "Fully Compliant", value: 7, color: "#60a5fa" },
    ];

    const learnersData = [
        { name: 'John Doe', training: 'Cybersecurity Basics', dueDate: '2025-05-01', status: 'Completed', score: '95%' },
        { name: 'Jane Smith', training: 'Compliance 101', dueDate: '2025-05-10', status: 'In Progress', score: 'N/A' },
        { name: 'Alice Johnson', training: 'Data Privacy', dueDate: '2025-04-30', status: 'Overdue', score: 'N/A' },
    ];

    const courseData = [
        { name: 'Cybersecurity Basics', category: 'Cybersecurity', progress: '80%', learners: 45 },
        { name: 'Compliance 101', category: 'Compliance', progress: '45%', learners: 32 },
        { name: 'Data Privacy', category: 'Privacy', progress: '90%', learners: 28 },
    ];

    const skillData = {
        'Machine Learning': {
            'Level 1': { inProgress: 40, achieved: 20, teamCompletion: [0, 15, 30, 45], projectedCompletion: [0, 20, 40, 60] },
            'Level 2': { inProgress: 50, achieved: 25, teamCompletion: [0, 20, 40, 55], projectedCompletion: [0, 25, 50, 70] },
            'Level 3': { inProgress: 66, achieved: 32, teamCompletion: [0, 32, 50, 70], projectedCompletion: [0, 32, 80, 90] },
        },
        'Data Science': {
            'Level 1': { inProgress: 30, achieved: 15, teamCompletion: [0, 10, 25, 35], projectedCompletion: [0, 12, 30, 50] },
            'Level 2': { inProgress: 45, achieved: 22, teamCompletion: [0, 18, 35, 48], projectedCompletion: [0, 20, 42, 60] },
            'Level 3': { inProgress: 55, achieved: 28, teamCompletion: [0, 25, 45, 65], projectedCompletion: [0, 30, 55, 75] },
        },
    };

    const levels = ['Level 1', 'Level 2', 'Level 3'];
    const currentData = skillData[selectedSkill][selectedLevel];

    // Action handlers
    const emailLearner = (learnerName) => {
        alert(`Email sent to ${learnerName}`);
    };

    const downloadReport = () => {
        alert("Report downloaded");
    };

    const handleSort = (field) => {
        const isAscending = sortDirection.field === field ? !sortDirection.ascending : true;
        setSortDirection({ field, ascending: isAscending });
    };

    const sortedData = (activeTab === "team" ? learnersData : courseData).sort((a, b) => {
        const field = sortDirection.field;
        if (!field) return 0;
        if (a[field] < b[field]) return sortDirection.ascending ? -1 : 1;
        if (a[field] > b[field]) return sortDirection.ascending ? 1 : -1;
        return 0;
    });

    // Custom tooltip for pie charts
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 border border-gray-300 rounded shadow">
                    <p className="font-semibold">{payload[0].name}</p>
                    <p>{payload[0].value}%</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex min-h-screen font-sans bg-gray-50">
            {/* Sidebar */}
            <div className="bg-gray-900 text-white w-64 p-6 flex flex-col">
            <div className="flex items-center mb-8 p-2 rounded-lg hover:bg-gray-800 transition-colors">
    <div className="relative w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 mr-3 overflow-hidden">
      {/* Profile photo - replace with actual user image if available */}
      <img 
        src="https://randomuser.me/api/portraits/men/1.jpg" 
        alt="User profile"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ddd'/%3E%3Ctext x='50%' y='50%' font-size='50' fill='%23666' text-anchor='middle' dy='.3em'%3E" + 
            (userName ? userName.charAt(0).toUpperCase() : 'U') + 
          "%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
    <div>
      <p className="font-medium text-sm">{userName || "John Doe"}</p>
      <p className="text-xs text-gray-400">Manager</p>
    </div>
  </div>
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                    <FaHome className="text-red-500 mr-2" />
                    Dashboard
                </h2>
                
                <div className="mb-6">
                    <h3 className="text-sm uppercase mb-2 text-gray-400">My Team View</h3>
                    <ul className="space-y-3">
                        <li>
                            <button
                                onClick={() => document.getElementById('learning-summary')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                            >
                                <FaBook className="text-red-500" />
                                <span>Learning Summary</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => document.getElementById('compliance-dashboard')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                            >
                                <FaClipboardCheck className="text-red-500" />
                                <span>Compliance Dashboard</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => document.getElementById('skills-summary')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                            >
                                <FaUsers className="text-red-500" />
                                <span>Team Skills</span>
                            </button>
                        </li>
                        
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-sm uppercase mb-2 text-gray-400">Learning</h3>
                    <ul className="space-y-3">
                    <li>
  <button
    onClick={() => document.getElementById('training-monitoring')?.scrollIntoView()}
    className="flex items-center space-x-2 hover:text-red-400"
  >
    <FaClipboardList className="text-red-500" />
    <span>Training Monitor</span>
  </button>
</li>
                        <li>
                            <button className="flex items-center space-x-2 hover:text-red-400 transition-colors">
                                <FaProjectDiagram className="text-red-500" />
                                <span>Learning Paths</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => document.getElementById('certificate-completion')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                            >
                                <FaCertificate className="text-red-500" />
                                <span>Certificates</span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-700">
                    <div className="text-sm text-gray-400">Team Size: 144</div>
                    <div className="text-xs text-gray-500 mt-1">Last updated: {new Date().toLocaleDateString()}</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 space-y-8 overflow-y-auto">
                {/* Learning Summary */}
                <div id="learning-summary" className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Learning Summary</h2>
                        <div className="text-sm text-gray-600">Team Size: 144</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {donutData.map((item, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-medium flex items-center">
                                        {item.icon}
                                        <span className="ml-2">{item.title}</span>
                                    </h3>
                                    <span className="text-sm text-gray-500">{item.people} people</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <PieChart width={120} height={120}>
                                        <Pie
                                            data={[{ name: "value", value: item.value }, { name: "rest", value: 100 - item.value }]}
                                            innerRadius={40}
                                            outerRadius={55}
                                            paddingAngle={5}
                                            dataKey="value"
                                            startAngle={90}
                                            endAngle={450}
                                        >
                                            <Cell fill={item.color} />
                                            <Cell fill="#eee" />
                                        </Pie>
                                        <Tooltip content={<CustomTooltip />} />
                                    </PieChart>
                                    <div className="ml-4 text-center">
                                        <div className="text-3xl font-bold" style={{ color: item.color }}>{item.value}</div>
                                        <div className="text-sm text-gray-500">Total</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Compliance Dashboard */}
                <div id="compliance-dashboard" className="bg-white p-6 rounded-lg shadow">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <h2 className="text-2xl font-semibold">Compliance Dashboard</h2>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="border border-gray-300 rounded p-2 text-sm w-full md:w-auto"
                                dateFormat="MMMM d, yyyy"
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={() => emailLearner("All Learners")}
                                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition flex-1 justify-center"
                                >
                                    <FaEnvelope />
                                    Email All
                                </button>
                                <button
                                    onClick={downloadReport}
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-black border border-black rounded hover:bg-gray-100 transition flex-1 justify-center"
                                >
                                    <FaDownload />
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        <div className="lg:col-span-1 flex flex-col items-center">
                            <PieChart width={200} height={200}>
                                <Pie
                                    data={[{ value: 1 }]}
                                    dataKey="value"
                                    innerRadius={70}
                                    outerRadius={90}
                                    startAngle={90}
                                    endAngle={450}
                                    fill="#f5f5f5"
                                    stroke="none"
                                />
                                <Pie 
                                    data={complianceData} 
                                    dataKey="value" 
                                    innerRadius={70} 
                                    outerRadius={90} 
                                    startAngle={90} 
                                    endAngle={450} 
                                    paddingAngle={2}
                                >
                                    {complianceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {complianceData.map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-lg flex items-center">
                                        <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                                        <div>
                                            <div className="font-medium">{item.name}</div>
                                            <div className="text-2xl font-bold">{item.value} learners</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex space-x-2 mb-4">
                            <button
                                className={`px-4 py-2 rounded-t ${activeTab === "team" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                onClick={() => setActiveTab("team")}
                            >
                                Team View
                            </button>
                            <button
                                className={`px-4 py-2 rounded-t ${activeTab === "course" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                onClick={() => setActiveTab("course")}
                            >
                                Course View
                            </button>
                        </div>

                        <div className="overflow-x-auto border rounded-b-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th 
                                            className="px-4 py-3 text-left cursor-pointer"
                                            onClick={() => handleSort('name')}
                                        >
                                            <div className="flex items-center">
                                                {activeTab === "team" ? "Learner" : "Course"}
                                                {sortDirection.field === 'name' && (
                                                    sortDirection.ascending ? 
                                                    <FaSortUp className="ml-1" /> : 
                                                    <FaSortDown className="ml-1" />
                                                )}
                                            </div>
                                        </th>
                                        {activeTab === "team" ? (
                                            <>
                                                <th className="px-4 py-3 text-left">Training</th>
                                                <th className="px-4 py-3 text-left">Due Date</th>
                                                <th className="px-4 py-3 text-left">Status</th>
                                                <th className="px-4 py-3 text-left">Score</th>
                                            </>
                                        ) : (
                                            <>
                                                <th className="px-4 py-3 text-left">Category</th>
                                                <th className="px-4 py-3 text-left">Progress</th>
                                                <th className="px-4 py-3 text-left">Learners</th>
                                            </>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {sortedData.map((data, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-4 py-3">{data.name}</td>
                                            {activeTab === "team" ? (
                                                <>
                                                    <td className="px-4 py-3">{data.training}</td>
                                                    <td className="px-4 py-3">{data.dueDate}</td>
                                                    <td className="px-4 py-3">
                                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                                            data.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                            data.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                            'bg-red-100 text-red-800'
                                                        }`}>
                                                            {data.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3">{data.score}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="px-4 py-3">{data.category}</td>
                                                    <td className="px-4 py-3">
                                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                            <div 
                                                                className="bg-blue-600 h-2.5 rounded-full" 
                                                                style={{ width: data.progress }}
                                                            ></div>
                                                        </div>
                                                        <div className="text-sm text-gray-600 mt-1">{data.progress}</div>
                                                    </td>
                                                    <td className="px-4 py-3">{data.learners}</td>
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Skills Summary */}
                <div id="skills-summary" className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Skills Summary</h2>
                        <a href="#" className="text-blue-600 hover:underline">Configure Skills</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Skill</label>
                                <select
                                    className="w-full border p-2 rounded-md"
                                    value={selectedSkill}
                                    onChange={(e) => {
                                        setSelectedSkill(e.target.value);
                                        setSelectedLevel('Level 1');
                                    }}
                                >
                                    {Object.keys(skillData).map((skill) => (
                                        <option key={skill} value={skill}>{skill}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                                <select
                                    className="w-full border p-2 rounded-md"
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                >
                                    {levels.map((level) => (
                                        <option key={level} value={level}>{level}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-medium mb-4">Current Status</h3>
                            <div className="h-64">
                                <Bar
                                    data={{
                                        labels: [`${selectedSkill} ${selectedLevel}`],
                                        datasets: [
                                            {
                                                label: 'In Progress',
                                                data: [currentData.inProgress],
                                                backgroundColor: '#4f46e5',
                                            },
                                            {
                                                label: 'Achieved',
                                                data: [currentData.achieved],
                                                backgroundColor: '#10b981',
                                            },
                                        ],
                                    }}
                                    options={{
                                        indexAxis: 'x',
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        scales: {
                                            x: { stacked: true },
                                            y: { 
                                                stacked: true, 
                                                beginAtZero: true, 
                                                max: 100,
                                                ticks: {
                                                    callback: function(value) {
                                                        return value + '%';
                                                    }
                                                }
                                            },
                                        },
                                        plugins: {
                                            tooltip: {
                                                callbacks: {
                                                    label: function(context) {
                                                        return context.dataset.label + ': ' + context.raw + '%';
                                                    }
                                                }
                                            },
                                            legend: { 
                                                position: 'bottom',
                                                labels: {
                                                    boxWidth: 12,
                                                    padding: 20
                                                }
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-medium mb-4">Progress Over Time</h3>
                            <div className="h-64">
                                <Line
                                    data={{
                                        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                                        datasets: [
                                            {
                                                label: 'Team Completion',
                                                data: currentData.teamCompletion,
                                                borderColor: '#4f46e5',
                                                backgroundColor: '#4f46e5',
                                                borderWidth: 2,
                                                tension: 0.3,
                                            },
                                            {
                                                label: 'Projected Completion',
                                                data: currentData.projectedCompletion,
                                                borderColor: '#10b981',
                                                backgroundColor: '#10b981',
                                                borderWidth: 2,
                                                borderDash: [5, 5],
                                                tension: 0.3,
                                            },
                                        ],
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        scales: {
                                            y: {
                                                beginAtZero: true,
                                                max: 100,
                                                ticks: {
                                                    callback: function(value) {
                                                        return value + '%';
                                                    }
                                                }
                                            },
                                        },
                                        plugins: {
                                            tooltip: {
                                                callbacks: {
                                                    label: function(context) {
                                                        return context.dataset.label + ': ' + context.raw + '%';
                                                    }
                                                }
                                            },
                                            legend: { 
                                                position: 'bottom',
                                                labels: {
                                                    boxWidth: 12,
                                                    padding: 20
                                                }
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Training Monitoring Section */}
<div id="training-monitoring" className="bg-white p-6 rounded-lg shadow">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-semibold">Training Progress</h2>
    <div className="flex gap-3">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="border p-2 rounded-md text-sm"
        placeholderText="Filter by date"
      />
      <button 
        onClick={downloadReport}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        <FaDownload /> Export Report
      </button>
    </div>
  </div>

  {/* Key Metrics */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
      <h3 className="text-sm font-medium text-blue-800">Total Trainings</h3>
      <p className="text-2xl font-bold">24</p>
      <p className="text-xs text-blue-600 mt-1">+5% vs last month</p>
    </div>
    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
      <h3 className="text-sm font-medium text-green-800">Avg. Completion</h3>
      <p className="text-2xl font-bold">68%</p>
      <p className="text-xs text-green-600 mt-1">12% improvement</p>
    </div>
    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
      <h3 className="text-sm font-medium text-amber-800">Overdue</h3>
      <p className="text-2xl font-bold">7</p>
      <button className="text-xs text-amber-600 hover:underline mt-1">Send reminders</button>
    </div>
    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
      <h3 className="text-sm font-medium text-purple-800">High Performers</h3>
      <p className="text-2xl font-bold">9</p>
      <button className="text-xs text-purple-600 hover:underline mt-1">View list</button>
    </div>
  </div>

  {/* Training Progress Charts */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    {/* Completion Rate by Department */}
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium mb-3">Completion by Department</h3>
      <div className="h-64">
        <Bar
          data={{
            labels: ['Engineering', 'Marketing', 'Sales', 'HR', 'Operations'],
            datasets: [{
              label: 'Completion %',
              data: [78, 65, 82, 59, 71],
              backgroundColor: '#3B82F6',
            }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: { max: 100, ticks: { callback: (val) => `${val}%` } }
            }
          }}
        />
      </div>
    </div>

    {/* Training Type Distribution */}
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium mb-3">Training Types</h3>
      <div className="h-64">
        <PieChart width={300} height={300}>
          <Pie
            data={[
              { name: 'Mandatory', value: 45, color: '#EF4444' },
              { name: 'Skills Dev', value: 30, color: '#10B981' },
              { name: 'Leadership', value: 15, color: '#3B82F6' },
              { name: 'Compliance', value: 10, color: '#F59E0B' },
            ]}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {[
              '#EF4444', 
              '#10B981', 
              '#3B82F6', 
              '#F59E0B'
            ].map((color, i) => (
              <Cell key={`cell-${i}`} fill={color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value} trainings`, 'Count']}
          />
          <Legend />
        </PieChart>
      </div>
    </div>
  </div>

  {/* Active Training List */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">Active Training Programs</h3>
      <button className="text-blue-600 text-sm hover:underline">
        View All (24)
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Training Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Department
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Participants
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Deadline
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[
            { 
              name: 'Cybersecurity Essentials', 
              department: 'All', 
              participants: 45,
              deadline: '2025-06-15',
              completion: 68,
              status: 'On Track'
            },
            { 
              name: 'Advanced Sales Techniques', 
              department: 'Sales', 
              participants: 12,
              deadline: '2025-05-30',
              completion: 42,
              status: 'Needs Attention'
            },
            { 
              name: 'DEI Training', 
              department: 'HR', 
              participants: 30,
              deadline: '2025-07-01',
              completion: 85,
              status: 'Ahead'
            }
          ].map((training, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap font-medium">
                {training.name}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {training.department}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {training.participants}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {new Date(training.deadline).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className={`h-2 rounded-full ${
                        training.completion > 70 ? 'bg-green-500' :
                        training.completion > 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${training.completion}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm ${
                    training.status === 'On Track' ? 'text-green-600' :
                    training.status === 'Needs Attention' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {training.completion}%
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <button className="text-blue-600 hover:underline mr-3">
                  Details
                </button>
                <button className="text-gray-600 hover:underline">
                  <FaEnvelope className="inline mr-1" /> Remind
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
  {/* Certification Tracking Section */}
<div id="certificate-completion" className="bg-white p-6 rounded-lg shadow mt-8">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-semibold">Certification Tracking</h2>
    <div className="flex gap-3">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="border p-2 rounded-md text-sm"
        placeholderText="Filter by date"
      />
      <button 
        onClick={downloadReport}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        <FaDownload /> Export Report
      </button>
    </div>
  </div>

  {/* Certification Summary Cards */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
      <h3 className="text-sm font-medium text-blue-800">Total Certifications</h3>
      <p className="text-2xl font-bold">18</p>
      <p className="text-xs text-blue-600 mt-1">+3 this quarter</p>
    </div>
    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
      <h3 className="text-sm font-medium text-green-800">Completed</h3>
      <p className="text-2xl font-bold">124</p>
      <p className="text-xs text-green-600 mt-1">78% completion rate</p>
    </div>
    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
      <h3 className="text-sm font-medium text-amber-800">Expiring Soon</h3>
      <p className="text-2xl font-bold">9</p>
      <button className="text-xs text-amber-600 hover:underline mt-1">View list</button>
    </div>
    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
      <h3 className="text-sm font-medium text-purple-800">In Progress</h3>
      <p className="text-2xl font-bold">32</p>
      <button className="text-xs text-purple-600 hover:underline mt-1">Send reminders</button>
    </div>
  </div>

  {/* Certification Progress Charts */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    {/* Certification Status */}
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium mb-3">Certification Status</h3>
      <div className="h-64">
        <PieChart width={300} height={300}>
          <Pie
            data={[
              { name: 'Completed', value: 124, color: '#10B981' },
              { name: 'In Progress', value: 32, color: '#3B82F6' },
              { name: 'Not Started', value: 45, color: '#F59E0B' },
              { name: 'Expired', value: 7, color: '#EF4444' },
            ]}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {['#10B981', '#3B82F6', '#F59E0B', '#EF4444'].map((color, i) => (
              <Cell key={`cell-${i}`} fill={color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value} certifications`, 'Count']}
          />
          <Legend />
        </PieChart>
      </div>
    </div>

    {/* Certification Completion Trend */}
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium mb-3">Completion Trend</h3>
      <div className="h-64">
        <Line
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Completed',
                data: [12, 19, 15, 28, 24, 26],
                borderColor: '#10B981',
                backgroundColor: '#10B981',
                borderWidth: 2,
                tension: 0.3,
              },
              {
                label: 'Started',
                data: [20, 25, 22, 30, 28, 35],
                borderColor: '#3B82F6',
                backgroundColor: '#3B82F6',
                borderWidth: 2,
                tension: 0.3,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom' },
            },
          }}
        />
      </div>
    </div>
  </div>

  {/* Certification Details Table */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">Team Certifications</h3>
      <div className="flex gap-2">
        <select className="border p-2 rounded-md text-sm">
          <option>All Certifications</option>
          <option>Cybersecurity</option>
          <option>Cloud Computing</option>
          <option>Data Privacy</option>
        </select>
        <button className="text-blue-600 text-sm hover:underline">
          View All (18)
        </button>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Team Member
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Certification
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Enrollment Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Completion Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expiry Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[
            { 
              name: 'John Doe', 
              certification: 'AWS Certified Solutions Architect', 
              status: 'Completed',
              enrollmentDate: '2024-01-15',
              completionDate: '2024-03-20',
              expiryDate: '2026-03-20',
              score: '92%'
            },
            { 
              name: 'Jane Smith', 
              certification: 'CISSP', 
              status: 'In Progress',
              enrollmentDate: '2024-02-10',
              completionDate: 'N/A',
              expiryDate: 'N/A',
              progress: '65%'
            },
            { 
              name: 'Alex Johnson', 
              certification: 'GDPR Practitioner', 
              status: 'Expired',
              enrollmentDate: '2022-05-01',
              completionDate: '2022-07-15',
              expiryDate: '2024-01-15',
              score: '88%'
            },
            { 
              name: 'Sarah Williams', 
              certification: 'Google Cloud Architect', 
              status: 'Not Started',
              enrollmentDate: '2024-04-01',
              completionDate: 'N/A',
              expiryDate: 'N/A',
              progress: '0%'
            }
          ].map((cert, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap font-medium">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                    <img 
                      src={`https://i.pravatar.cc/150?img=${idx+3}`} 
                      alt={cert.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {cert.name}
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {cert.certification}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  cert.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  cert.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  cert.status === 'Expired' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {cert.status}
                  {cert.status === 'In Progress' && ` (${cert.progress})`}
                  {cert.status === 'Completed' && ` (${cert.score})`}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {new Date(cert.enrollmentDate).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {cert.completionDate !== 'N/A' ? new Date(cert.completionDate).toLocaleDateString() : 'N/A'}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {cert.expiryDate !== 'N/A' ? new Date(cert.expiryDate).toLocaleDateString() : 'N/A'}
                {cert.status === 'Expired' && <span className="text-red-500 ml-1">(Expired)</span>}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <button 
                  onClick={() => emailLearner(cert.name)}
                  className="text-blue-600 hover:underline mr-3"
                >
                  <FaEnvelope className="inline mr-1" /> 
                </button>
                <button className="text-gray-600 hover:underline">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
            </div>
        </div>
    );
}