import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { saveAs } from 'file-saver';
import { FaLaptopCode, FaChalkboardTeacher, FaAward, FaMedal, FaTrophy } from 'react-icons/fa'; // Icons for categories and certification types
import { useNavigate } from 'react-router-dom';

const AdminCertificatePage = () => {
  const [certificates, setCertificates] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: 'Python Basics',
        type: 'Technical',
        description: 'Introductory course on Python programming.',
        issuedBy: 'Marln LMS',
        duration: '3 weeks',
        expiry: 'None',
        totalUsers: 100,
        completed: 60,
        inProgress: 30,
        notStarted: 10,
        topLearners: ['Alice', 'Bob', 'Charlie'],
        category: 'Programming',
        valueOfCertification: '$200',
        badge: <FaAward className="text-yellow-500" /> 
      },
      {
        id: 2,
        name: 'Leadership Essentials',
        type: 'Soft Skills',
        description: 'Build foundational leadership skills.',
        issuedBy: 'Marln LMS',
        duration: '2 weeks',
        expiry: 'None',
        totalUsers: 80,
        completed: 40,
        inProgress: 25,
        notStarted: 15,
        topLearners: ['David', 'Eve', 'Frank'],
        category: 'Leadership',
        valueOfCertification: '$150',
        badge: <FaMedal className="text-gray-400" /> 
      },
      {
        id: 3,
        name: 'Data Analysis with Excel',
        type: 'Technical',
        description: 'Learn data analysis using Microsoft Excel.',
        issuedBy: 'Marln LMS',
        duration: '4 weeks',
        expiry: '1 year',
        totalUsers: 120,
        completed: 90,
        inProgress: 20,
        notStarted: 10,
        topLearners: ['Grace', 'Hank', 'Ivy'],
        category: 'Data Science',
        valueOfCertification: '$300',
        badge: <FaTrophy className="text-brown-500" /> 
      },
      {
        id: 4,
        name: 'Effective Communication',
        type: 'Soft Skills',
        description: 'Improve your communication skills.',
        issuedBy: 'Marln LMS',
        duration: '1 month',
        expiry: 'None',
        totalUsers: 60,
        completed: 35,
        inProgress: 20,
        notStarted: 5,
        topLearners: ['Jack', 'Jill', 'Sam'],
        category: 'Communication',
        valueOfCertification: '$100',
        badge: <FaMedal className="text-gray-400" /> 
      },
      {
        id: 5,
        name: 'Advanced Python Programming',
        type: 'Technical',
        description: 'Advanced course focusing on Python’s libraries.',
        issuedBy: 'Marln LMS',
        duration: '6 weeks',
        expiry: '2 years',
        totalUsers: 200,
        completed: 150,
        inProgress: 40,
        notStarted: 10,
        topLearners: ['Olivia', 'John', 'Mia'],
        category: 'Programming',
        valueOfCertification: '$500',
        badge: <FaAward className="text-yellow-500" /> 
      },
      {
        id: 6,
        name: 'Project Management Fundamentals',
        type: 'Soft Skills',
        description: 'Learn how to manage projects effectively.',
        issuedBy: 'Marln LMS',
        duration: '4 weeks',
        expiry: 'None',
        totalUsers: 70,
        completed: 50,
        inProgress: 15,
        notStarted: 5,
        topLearners: ['Anna', 'Paul', 'Mike'],
        category: 'Management',
        valueOfCertification: '$250',
        badge: <FaMedal className="text-gray-400" /> 
      },
      {
        id: 7,
        name: 'Data Science with Python',
        type: 'Technical',
        description: 'Learn data science techniques using Python.',
        issuedBy: 'Marln LMS',
        duration: '8 weeks',
        expiry: '1 year',
        totalUsers: 150,
        completed: 100,
        inProgress: 40,
        notStarted: 10,
        topLearners: ['Sophia', 'James', 'Liam'],
        category: 'Data Science',
        valueOfCertification: '$450',
        badge: <FaTrophy className="text-brown-500" /> 
      },
      {
        id: 8,
        name: 'UX/UI Design Principles',
        type: 'Creative',
        description: 'Master the basics of UX/UI design.',
        issuedBy: 'Marln LMS',
        duration: '3 weeks',
        expiry: 'None',
        totalUsers: 60,
        completed: 45,
        inProgress: 10,
        notStarted: 5,
        topLearners: ['Isabella', 'Lucas', 'Eva'],
        category: 'Design',
        valueOfCertification: '$180',
        badge: <FaAward className="text-yellow-500" /> 
      },
      {
        id: 9,
        name: 'Agile Methodology Certification',
        type: 'Management',
        description: 'Learn the principles of Agile project management.',
        issuedBy: 'Marln LMS',
        duration: '5 weeks',
        expiry: 'None',
        totalUsers: 120,
        completed: 80,
        inProgress: 30,
        notStarted: 10,
        topLearners: ['Noah', 'Charlotte', 'Amelia'],
        category: 'Management',
        valueOfCertification: '$350',
        badge: <FaMedal className="text-gray-400" />
      },
      {
        id: 10,
        name: 'Machine Learning with TensorFlow',
        type: 'Technical',
        description: 'Deep dive into machine learning with TensorFlow.',
        issuedBy: 'Marln LMS',
        duration: '10 weeks',
        expiry: '2 years',
        totalUsers: 180,
        completed: 150,
        inProgress: 20,
        notStarted: 10,
        topLearners: ['Daniel', 'Benjamin', 'Lily'],
        category: 'AI & ML',
        valueOfCertification: '$600',
        badge: <FaAward className="text-yellow-500" /> 
      },
    ];

    setCertificates(data);
  }, []);

  const filteredCertificates = certificates.filter(cert => {
    return (
      (filterType === 'All' || cert.type === filterType) &&
      cert.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const certTypeData = {
    labels: ['Technical', 'Soft Skills', 'Management', 'Creative', 'AI & ML'],
    datasets: [
      {
        label: 'Certificate Types',
        data: [
          certificates.filter(cert => cert.type === 'Technical').length,
          certificates.filter(cert => cert.type === 'Soft Skills').length,
          certificates.filter(cert => cert.type === 'Management').length,
          certificates.filter(cert => cert.type === 'Creative').length,
          certificates.filter(cert => cert.type === 'AI & ML').length,
        ],
        backgroundColor: ['#3b82f6', '#f59e0b', '#10b981', '#9333ea', '#f87171'],
      },
    ],
  };

  const certProgressData = {
    labels: filteredCertificates.map(c => c.name),
    datasets: [
      {
        label: 'Completed',
        data: filteredCertificates.map(c => c.completed),
        backgroundColor: '#10b981',
      },
      {
        label: 'In Progress',
        data: filteredCertificates.map(c => c.inProgress),
        backgroundColor: '#3b82f6',
      },
      {
        label: 'Not Started',
        data: filteredCertificates.map(c => c.notStarted),
        backgroundColor: '#f87171',
      },
    ],
  };

  const exportCSV = () => {
    const csvRows = [
      ['Name', 'Type', 'Issued By', 'Duration', 'Expiry', 'Completed', 'In Progress', 'Not Started', 'Category', 'Value of Certification'],
      ...filteredCertificates.map(cert => [
        cert.name,
        cert.type,
        cert.issuedBy,
        cert.duration,
        cert.expiry,
        cert.completed,
        cert.inProgress,
        cert.notStarted,
        cert.category,
        cert.valueOfCertification
      ])
    ];

    const csvContent = csvRows.map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'certificates.csv');
  };

  const paginateCertificates = (certificates, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    return certificates.slice(startIndex, startIndex + perPage);
  };

  const totalPages = Math.ceil(filteredCertificates.length / certificatesPerPage);
  const currentCertificates = paginateCertificates(filteredCertificates, currentPage, certificatesPerPage);

  return (
    <div className="max-w-7xl mx-auto p-6">
        <button
  onClick={() => navigate(-1)}
  className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm flex items-center gap-2 mb-4"
>
  <span className="text-lg">←</span> Back
</button>

      <h1 className="text-3xl font-bold mb-6">Admin Certificate Dashboard</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search certificate..."
          className="border px-4 py-2 rounded w-full md:w-1/3"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/4"
        >
          <option value="All">All Types</option>
          <option value="Technical">Technical</option>
          <option value="Soft Skills">Soft Skills</option>
          <option value="Management">Management</option>
          <option value="Creative">Creative</option>
          <option value="AI & ML">AI & ML</option>
        </select>
        <button
          onClick={exportCSV}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Export CSV
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-semibold text-lg mb-2">Certificate Type Breakdown</h2>
          <Pie data={certTypeData} />
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-semibold text-lg mb-2">Completion Overview</h2>
          <Bar data={certProgressData} />
        </div>
      </div>

      {/* Certificates Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Certificate List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Completed</th>
              <th className="px-4 py-2 text-left">Top Learners</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Value of Certification</th>
              <th className="px-4 py-2 text-left">Badge</th>
            </tr>
          </thead>
          <tbody>
            {currentCertificates.map(cert => (
              <React.Fragment key={cert.id}>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{cert.name}</td>
                  <td className="px-4 py-2">{cert.type}</td>
                  <td className="px-4 py-2">{cert.completed} / {cert.totalUsers}</td>
                  <td className="px-4 py-2">{cert.topLearners.join(', ')}</td>
                  <td className="px-4 py-2">{cert.category}</td>
                  <td className="px-4 py-2">{cert.valueOfCertification}</td>
                  <td className="px-4 py-2">{cert.badge}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan="7" className="px-4 py-2 text-sm text-gray-600">
                    <strong>Description:</strong> {cert.description} <br />
                    <strong>Issued By:</strong> {cert.issuedBy} | <strong>Duration:</strong> {cert.duration} | <strong>Expiry:</strong> {cert.expiry}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded-l-lg disabled:bg-gray-400"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg disabled:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminCertificatePage;
