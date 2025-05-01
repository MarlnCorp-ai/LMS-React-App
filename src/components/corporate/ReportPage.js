import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie,Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const fetchUsers = async () => {
  return [
    { id: 1, name: 'User 1', role: 'Learner', email: 'user1@example.com', registrationDate: '2025-04-01T10:00:00', lastLogin: '2025-04-28T14:30:00', status: 'active' },
    { id: 2, name: 'User 2', role: 'Admin', email: 'user2@example.com', registrationDate: '2025-04-02T11:15:00', lastLogin: '2025-04-29T09:15:00', status: 'active' },
    { id: 3, name: 'User 3', role: 'Manager', email: 'user3@example.com', registrationDate: '2025-04-03T12:30:00', lastLogin: '2025-04-27T16:45:00', status: 'active' },
    { id: 4, name: 'User 4', role: 'Learner', email: 'user4@example.com', registrationDate: '2025-04-04T14:45:00', lastLogin: '2025-04-25T11:20:00', status: 'inactive' },
    { id: 5, name: 'User 5', role: 'Learner', email: 'user5@example.com', registrationDate: '2025-04-05T08:30:00', lastLogin: '2025-04-30T10:10:00', status: 'active' },
    { id: 6, name: 'User 6', role: 'Manager', email: 'user6@example.com', registrationDate: '2025-04-06T13:20:00', lastLogin: '2025-04-29T17:30:00', status: 'active' },
  ];
};



export const exportCSV = (data, filename) => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    data.map(row => row.join(",")).join("\n");
  const blob = new Blob([decodeURIComponent(encodeURI(csvContent))], {
    type: "text/csv;charset=utf-8;",
  });
  saveAs(blob, filename);
};

const AdminReportCard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalLearners: 0,
    learnersCompleted: 0,
    certStatus: { inProgress: 0, completed: 0 },
    activeUsers: 0,
    courses: { total: 0, published: 0, draft: 0 },
    monthlyGrowth: [120, 190, 130, 170, 150, 200, 220, 240, 210, 230, 250, 300],
  });

  const [users, setUsers] = useState([]);
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [timePeriod, setTimePeriod] = useState('last30');

  const [exportLoading, setExportLoading] = useState({
    user: false,
    course: false,
    all: false
  });

  useEffect(() => {
    const fetchReportData = async () => {
    
      const response = {
        totalUsers: 542,
        totalLearners: 387,
        learnersCompleted: 218,
        certStatus: {
          inProgress: 75,
          completed: 143,
        },
        activeUsers: 489,
        courses: {
          total: 24,
          published: 18,
          draft: 6
        },
        monthlyGrowth: [120, 190, 130, 170, 150, 200, 220, 240, 210, 230, 250, 300],
      };
      setStats(response);
    };

    const fetchUserData = async () => {
      const users = await fetchUsers();
      setUsers(users);
    };

    fetchReportData();
    fetchUserData();
  }, []);


  const handleRoleChange = (userId, newRole) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Chart Data Setup
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly User Growth',
        data: stats.monthlyGrowth,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['Total Users', 'Active Users', 'Learners', 'Completed'],
    datasets: [
      {
        label: 'User Statistics',
        data: [stats.totalUsers, stats.activeUsers, stats.totalLearners, stats.learnersCompleted],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(16, 185, 129, 0.7)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(16, 185, 129, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Published Courses', 'Draft Courses'],
    datasets: [
      {
        data: [stats.courses.published, stats.courses.draft],
        backgroundColor: [
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const completionData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [72, 18, 10],
        backgroundColor: [
          '#10B981', // green
          '#F59E0B', // yellow
          '#E5E7EB', // gray
        ],
        borderWidth: 0,
      },
    ],
  };
  const activityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#3B82F6',
        borderRadius: 4,
      },
    ],
  };

  

  const exportReportData = (type) => {
    // Set loading state for this specific export type
    setExportLoading(prev => ({ ...prev, [type]: true }));
    
    setTimeout(() => {
      let content, mimeType, fileName;
      
      switch(type) {
        case 'user':
          content = 'user_id,name,email,last_login\n1,John Doe,john@example.com,2023-01-15\n2,Jane Smith,jane@example.com,2023-01-14';
          mimeType = 'text/csv';
          fileName = `user_data_${new Date().toISOString().slice(0,10)}.csv`;
          break;
        case 'course':
          content = 'course_id,title,enrollments,completion_rate\n101,Introduction to React,150,72%\n102,Advanced JavaScript,85,68%';
          mimeType = 'application/vnd.ms-excel';
          fileName = `course_data_${new Date().toISOString().slice(0,10)}.xls`;
          break;
        case 'all':
          content = JSON.stringify({
            users: [
              { id: 1, name: 'John Doe', email: 'john@example.com' },
              { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ],
            courses: [
              { id: 101, title: 'Introduction to React', enrollments: 150 },
              { id: 102, title: 'Advanced JavaScript', enrollments: 85 }
            ]
          }, null, 2);
          mimeType = 'application/json';
          fileName = `full_export_${new Date().toISOString().slice(0,10)}.json`;
          break;
        default:
          return;
      }
      
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      // Reset loading state for this specific export type
      setExportLoading(prev => ({ ...prev, [type]: false }));
    }, 1000);
  };


//   const userData = [
//     ["User ID", "Name", "Email", "Courses Completed"],
//     ["1", "Alice", "alice@example.com", "5"],
//     ["2", "Bob", "bob@example.com", "3"],
//   ];

//   const courseData = [
//     ["Course ID", "Course Name", "Enrolled Users", "Completion Rate"],
//     ["101", "React Basics", "120", "85%"],
//     ["102", "Python Advanced", "90", "72%"],
//   ];

//   const allData = [...userData, [], ...courseData];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
      
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className="mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Go back"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your overview.</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

    
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${selectedTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`px-4 py-2 font-medium ${selectedTab === 'users' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('users')}
          >
            Users
          </button>
          <button
            className={`px-4 py-2 font-medium ${selectedTab === 'courses' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('courses')}
          >
            Courses
          </button>
          <button
            className={`px-4 py-2 font-medium ${selectedTab === 'reports' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('reports')}
          >
            Reports
          </button>
        </div>

        {selectedTab === 'dashboard' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Total Users */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{stats.totalUsers}</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">+12% from last month</p>
              </div>

              {/* Active Users */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{stats.activeUsers}</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">+8% from last month</p>
              </div>

              {/* Total Courses */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Courses</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{stats.courses.total}</p>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">+3 new courses this month</p>
              </div>

              {/* Completion Rate */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Completion Rate</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-1">
                      {stats.totalLearners > 0 ? Math.round((stats.learnersCompleted / stats.totalLearners) * 100) : 0}%
                    </p>
                  </div>
                  <div className="bg-purple-100 p-2 rounded-full">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">56% of learners completed</p>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Line Chart */}
              <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4">User Growth Over Time</h3>
                <Line data={lineChartData} />
              </div>

              {/* Pie Chart */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Course Status</h3>
                <Pie data={pieChartData} />
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-semibold mb-4">User Statistics Overview</h3>
              <Bar data={barChartData} />
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Recent User Activity</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.slice(0, 5).map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-medium">{user.name.charAt(0)}</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 
                              user.role === 'Manager' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-green-100 text-green-800'}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.lastLogin).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                          <button className="text-gray-600 hover:text-gray-900">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {selectedTab === 'users' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">User Management</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New User
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.registrationDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user.id, e.target.value)}
                          className="text-sm border rounded p-1"
                        >
                          <option value="Admin">Admin</option>
                          <option value="Manager">Manager</option>
                          <option value="Learner">Learner</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'courses' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-6">Course Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-500 h-32 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Course 1</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">Introduction to React</h4>
                  <p className="text-gray-600 text-sm mb-4">Learn the fundamentals of React.js</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">12 Lessons</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Published</span>
                  </div>
                </div>
              </div>

          
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-500 h-32 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Course 2</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">Advanced JavaScript</h4>
                  <p className="text-gray-600 text-sm mb-4">Deep dive into JavaScript concepts</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">18 Lessons</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Published</span>
                  </div>
                </div>
              </div>

        
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-500 h-32 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Course 3</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">CSS Masterclass</h4>
                  <p className="text-gray-600 text-sm mb-4">Master modern CSS techniques</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">15 Lessons</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Draft</span>
                  </div>
                </div>
              </div>

              {/* Add New Course Card */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors">
                <button className="flex flex-col items-center p-6 text-gray-500 hover:text-gray-700">
                  <svg className="h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="font-medium">Add New Course</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'reports' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Reports & Analytics</h3>
            <div className="flex space-x-2">
              <select 
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="last7">Last 7 days</option>
                <option value="last30">Last 30 days</option>
                <option value="last90">Last quarter</option>
                <option value="last365">Last year</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg text-sm transition-colors">
                Refresh
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Completion Report */}
            <div className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-700">Course Completion Report</h4>
                <button className="text-blue-600 text-sm font-medium">View Details</button>
              </div>
              <div className="h-64">
                <Doughnut 
                  data={completionData}
                  options={{
                    cutout: '70%',
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          boxWidth: 12,
                          padding: 20
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }}
                />
              </div>
              <div className="text-center mt-2 text-sm text-gray-500">
                {timePeriod === 'last7' && '7-day completion rate: 68%'}
                {timePeriod === 'last30' && '30-day completion rate: 72%'}
                {timePeriod === 'last90' && 'Quarterly completion rate: 75%'}
                {timePeriod === 'last365' && 'Annual completion rate: 78%'}
              </div>
            </div>

            {/* User Activity */}
            <div className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-700">User Activity</h4>
                <button className="text-blue-600 text-sm font-medium">View Details</button>
              </div>
              <div className="h-64">
                <Bar
                  data={activityData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    },
                    maintainAspectRatio: false
                  }}
                />
              </div>
              <div className="mt-3 text-right text-xs text-gray-500">
                Peak activity: {timePeriod === 'last7' ? '10 AM - 12 PM' : '2 PM - 4 PM'}
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-5 lg:col-span-2 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-700 mb-4">Export Data</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
  onClick={() => exportReportData('user')}
  disabled={exportLoading.user}
  className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-100 transition-all flex flex-col items-center relative"
>
  {exportLoading.user && (
    <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-lg">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
    </div>
  )}
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Export User Data</span>
                  <span className="text-xs text-gray-500 mt-1">CSV, Excel, JSON</span>
                </button>
                
                <button 
  onClick={() => exportReportData('course')}
  disabled={exportLoading.course}
  className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 hover:border-green-100 transition-all flex flex-col items-center relative"
>
  {exportLoading.course && (
    <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-lg">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
    </div>
  )}

                  <div className="bg-green-100 p-3 rounded-full mb-3">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Export Course Data</span>
                  <span className="text-xs text-gray-500 mt-1">CSV, Excel, PDF</span>
                </button>
                
                <button 
  onClick={() => exportReportData('all')}
  disabled={exportLoading.all}
  className="border border-gray-200 rounded-lg p-4 hover:bg-purple-50 hover:border-purple-100 transition-all flex flex-col items-center relative"
>
  {exportLoading.all && (
    <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-lg">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
    </div>
  )}
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Export All Data</span>
                  <span className="text-xs text-gray-500 mt-1">Full system archive</span>
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
                <p>Exports may take several minutes to prepare. You'll receive an email when your download is ready.</p>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default AdminReportCard;