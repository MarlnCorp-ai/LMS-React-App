import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload, FiTrash2, FiSearch, FiFilter, FiX, FiArrowLeft } from 'react-icons/fi';

export default function CourseAdmin() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [filterCourse, setFilterCourse] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    const dummyVideos = [
      {
        id: 1,
        url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
        title: 'Python Programming Basics',
        description: 'Introduction to Python syntax, variables, and data types.',
        size: '5.0 MB',
        course: 'Python',
        duration: '5:30',
        uploadDate: '2023-05-15'
      },
      {
        id: 2,
        url: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
        title: 'Java Introduction',
        description: 'Basics of Java language and its structure.',
        size: '6.2 MB',
        course: 'Java',
        duration: '8:45',
        uploadDate: '2023-06-20'
      },
      {
        id: 3,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'HTML Essentials',
        description: 'Learn basic tags and document structure in HTML.',
        size: '3.4 MB',
        course: 'HTML',
        duration: '12:15',
        uploadDate: '2023-07-10'
      },
      {
        id: 4,
        url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        title: 'AI Fundamentals',
        description: 'Overview of artificial intelligence concepts and applications.',
        size: '4.8 MB',
        course: 'AI',
        duration: '15:20',
        uploadDate: '2023-08-05'
      },
      {
        id: 5,
        url: 'https://media.w3.org/2010/05/bunny/movie.mp4',
        title: 'Machine Learning Basics',
        description: 'Supervised vs unsupervised learning explained.',
        size: '6.1 MB',
        course: 'ML',
        duration: '18:30',
        uploadDate: '2023-09-12'
      },
      {
        id: 6,
        url: 'https://media.w3.org/2010/05/video/movie_300.mp4',
        title: 'Data Science Overview',
        description: 'What is data science? Tools and techniques overview.',
        size: '7.5 MB',
        course: 'Data Science',
        duration: '22:45',
        uploadDate: '2023-10-18'
      },
    ];
    setVideos(dummyVideos);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!videoFile || !title || !course) {
      alert('Course, title, and video file are required.');
      return;
    }

    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      const newVideo = {
        id: Date.now(),
        file: videoFile,
        url: previewUrl,
        title,
        description,
        size: (videoFile.size / 1024 / 1024).toFixed(2) + ' MB',
        course,
        duration: '10:00', // In a real app, you'd calculate this
        uploadDate: new Date().toISOString().split('T')[0]
      };

      setVideos((prev) => [newVideo, ...prev]);
      resetForm();
      setIsUploading(false);
    }, 1500);
  };

  const resetForm = () => {
    setVideoFile(null);
    setTitle('');
    setDescription('');
    setCourse('');
    setPreviewUrl('');
    document.getElementById('video-upload').value = '';
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      setVideos((prev) => prev.filter((video) => video.id !== id));
    }
  };

  const handleResetFilters = () => {
    setFilterCourse('');
    setSearchQuery('');
  };

  const filteredVideos = videos.filter(video =>
    (filterCourse === '' || video.course === filterCourse) &&
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const courseOptions = [
    'React', 'HTML', 'Python', 'JavaScript', 
    'Java', 'Node.js', 'CSS', 'AI', 'ML', 'Data Science'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <button
              className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
              onClick={() => navigate('/dashboards/admin')}
            >
              <FiArrowLeft className="mr-1" />
              Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Course Video Management</h1>
          </div>
          <div className="text-sm text-gray-500">
            {videos.length} videos uploaded
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload New Video</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Course</option>
                  {courseOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Video title"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  placeholder="Video description"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Video File</label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                  <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="video-upload" className="cursor-pointer">
                    {videoFile ? (
                      <div className="text-center">
                        <p className="font-medium">{videoFile.name}</p>
                        <p className="text-sm text-gray-500">{(videoFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-4">
                        <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">MP4, MOV, or AVI (Max 100MB)</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {previewUrl && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preview</label>
                  <video 
                    src={previewUrl} 
                    controls 
                    className="w-full h-auto max-h-48 rounded-md border border-gray-300"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 mr-2 hover:bg-gray-50"
              onClick={resetForm}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center ${isUploading ? 'opacity-75 cursor-not-allowed' : ''}`}
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                <>
                  <FiUpload className="mr-2" />
                  Upload Video
                </>
              )}
            </button>
          </div>
        </div>

        {/* Video List Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">Video Library</h2>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={filterCourse}
                  onChange={(e) => setFilterCourse(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Courses</option>
                  {courseOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                
                <button
                  className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={handleResetFilters}
                >
                  <FiX className="mr-1" />
                  Reset
                </button>
              </div>
            </div>
          </div>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <FiFilter className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No videos found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchQuery || filterCourse ? 'Try changing your search or filter criteria' : 'Upload your first video to get started'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Upload Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Preview
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredVideos.map((video) => (
                    <tr key={video.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {video.course}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{video.title}</div>
                        <div className="text-sm text-gray-500">{video.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {video.uploadDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {video.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <video 
                          src={video.url} 
                          controls 
                          className="w-32 h-auto rounded-md"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDelete(video.id)}
                          className="text-red-600 hover:text-red-900 flex items-center"
                        >
                          <FiTrash2 className="mr-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}