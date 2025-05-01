import { useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  Award,
  Settings,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const summaryData = [
  { label: "Total Users", value: 1200, color: "bg-blue-200" },
  { label: "Total Courses", value: 800, color: "bg-orange-300" },
  { label: "Total Categories", value: 5, color: "bg-purple-200" },
];

const statsData = [
  { label: "Issued Certifications", value: "105,774" },
  { label: "In-progress Enrollments", value: "76,536" },
  { label: "Enrollments Status", value: "510.01K" },
  { label: "Expiring Certifications", value: "2,309" },
  { label: "Certification By Status", value: "90.87K" },
  { label: "Completion Rate", value: "--%" },
  { label: "Expired Certifications", value: "41,005" },
];

const pieData = [
  { name: "Completed", value: 61 },
  { name: "Inprocess", value: 76 },
  { name: "Not Started", value: 85 },
];

const COLORS = ["#4ade80", "#facc15", "#f87171"];

const barData = [
  { name: "Course A", value: 3400 },
  { name: "Course B", value: 2800 },
  { name: "Course C", value: 2200 },
  { name: "Course D", value: 1700 },
  { name: "Course E", value: 1300 },
  { name: "Course F", value: 800 },
];

export default function AdminDashboardPage() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [video, setVideo] = useState("");
  const [viewCoursePage, setViewCoursePage] = useState(false);

  const addCourse = () => {
    if (newCourse) {
      setCourses([...courses, { title: newCourse, video: "" }]);
      setNewCourse("");
    }
  };

  const updateCourse = (index, title) => {
    const updated = [...courses];
    updated[index].title = title;
    setCourses(updated);
  };

  const uploadVideo = (index, video) => {
    const updated = [...courses];
    updated[index].video = video;
    setCourses(updated);
  };

  const deleteVideo = (index) => {
    const updated = [...courses];
    updated[index].video = "";
    setCourses(updated);
  };

  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, route: "/" },
    { name: "User/Courses Management", icon: BookOpen, route: "/coursesAdmin" },
    { name: "Reports", icon: FileText, route: "/report" },
    { name: "Certificates", icon: Award, route: "/certificate" },
    { name: "Master Settings", icon: Settings, route: "/setting" },
  ];

  // Mock user data
  const user = {
    name: "Admin User",
    email: "admin@example.com",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // You can replace this with your actual avatar URL
    role: "Administrator"
  };

  return (
    <div className="flex font-sans min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
        {/* User Profile Section */}
        <div className="flex items-center space-x-3 p-4 mb-6 border-b border-gray-200">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2 flex-1">
          {navItems.map(({ name, icon: Icon, route }) => (
            <div
              key={name}
              className="hover:bg-purple-200 px-3 py-2 rounded cursor-pointer flex items-center gap-2"
              onClick={() => navigate(route)}
            >
              <Icon className="w-5 h-5 text-purple-700" />
              {name}
            </div>
          ))}
        </div>

        {/* Footer/Logout (optional) */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-6 space-y-8">
        {viewCoursePage ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-2xl font-semibold text-purple-700">Course Management</h2>
              <button
                onClick={() => setViewCoursePage(false)}
                className="text-purple-600 hover:underline"
              >
                Back to Dashboard
              </button>
            </div>

            {/* Course Creation Section */}
            <div className="bg-purple-50 p-6 rounded shadow-md max-w-2xl space-y-4">
              <h3 className="text-lg font-semibold text-purple-800">Create New Course</h3>
              <input
                type="text"
                placeholder="Course Title"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <button
                onClick={addCourse}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Add Course
              </button>
            </div>

            {/* Course List */}
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 shadow-sm space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                    <input
                      type="text"
                      value={course.title}
                      onChange={(e) => updateCourse(index, e.target.value)}
                      className="border p-2 rounded w-full"
                      placeholder="Edit Course Title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Video URL or ID</label>
                    <input
                      type="text"
                      placeholder="Video URL"
                      value={course.video}
                      onChange={(e) => uploadVideo(index, e.target.value)}
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  {course.video && (
                    <button
                      onClick={() => deleteVideo(index)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Delete Video
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Hello, Admin</h2>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {summaryData.map((card) => (
                <div key={card.label} className={`p-4 rounded-lg shadow-md text-center ${card.color}`}>
                  <h3 className="text-sm text-gray-700 font-medium">{card.label}</h3>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {statsData.map((stat) => (
                <div key={stat.label} className="p-4 border rounded shadow-sm bg-gray-50">
                  <h4 className="text-sm font-medium text-gray-600 mb-1">{stat.label}</h4>
                  <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 border shadow rounded">
                <h4 className="font-semibold mb-4">Course Report</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" outerRadius={80} label>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-4 border shadow rounded md:col-span-2">
                <h4 className="font-semibold mb-4">Most and Least Completed Courses</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={barData} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={150} />
                    <Bar dataKey="value" fill="#60a5fa" />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}