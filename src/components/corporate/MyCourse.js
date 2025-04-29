import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaBookOpen, FaCheckCircle, FaRegClock, FaCertificate, FaBullhorn } from 'react-icons/fa';
import './MyCourses.css';

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState('in-progress');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCourseIds, setExpandedCourseIds] = useState([]);

  const toggleShowMore = (id) => {
    setExpandedCourseIds(prev =>
      prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
    );
  };

  const allCourses = {
    'in-progress': [
      {
        id: 1,
        title: 'Mindful course creation',
        institution: 'Mount Orange Community',
        category: 'Education',
        progress: 69,
        modules: [
          'Models and Mountaineering - Physical Education - 14% complete',
          'Activity Examples - Module Resources',
          'Facilitation Strategies - Module 3',
          'Learner Reflection Journal - Optional Module'
        ],
        lastAccessed: '2 days ago',
        thumbnail: 'https://picsum.photos/seed/101/100/100',
        nextDeadline: 'May 5, 2025'
      },
      {
        id: 2,
        title: 'Celebrating Cultures',
        institution: 'Society and Environment',
        progress: 27,
        modules: [
          'Class and Conflict in World Cinema - Art and Media - 50% complete',
          'Critical Thinking: Develop your skills - Society and Environment - 66% complete'
        ],
        lastAccessed: '1 week ago',
        thumbnail: 'https://picsum.photos/seed/102/100/100',
        nextDeadline: 'May 12, 2025'
      },
      {
        id: 6,
        title: 'UX Design Basics',
        institution: 'Design Institute',
        progress: 45,
        modules: [
          'User Research - 45% complete',
          'Wireframing Tools',
          'Prototyping Methods'
        ],
        lastAccessed: '3 days ago',
        thumbnail: 'https://picsum.photos/seed/103/100/100',
        nextDeadline: 'May 20, 2025'
      }
    ],
    'completed': [
      {
        id: 3,
        title: 'Introduction to Programming',
        institution: 'Computer Science Department',
        progress: 100,
        modules: [
          'Variables and Data Types - Completed',
          'Control Structures - Completed'
        ],
        completedDate: 'May 15, 2023',
        grade: 'A',
        certificate: true
      },
      {
        id: 4,
        title: 'Digital Marketing Fundamentals',
        institution: 'Business School',
        progress: 100,
        modules: [
          'SEO Basics - Completed',
          'Social Media Marketing - Completed'
        ],
        completedDate: 'March 28, 2023',
        grade: 'B+',
        certificate: false
      },
      {
        id: 7,
        title: 'Ethics in Technology',
        institution: 'Philosophy Department',
        progress: 100,
        modules: [
          'Moral Frameworks - Completed',
          'Technology and Society - Completed'
        ],
        completedDate: 'January 10, 2024',
        grade: 'A-',
        certificate: true
      }
    ],
    'not-started': [
      {
        id: 5,
        title: 'Advanced Data Analysis',
        institution: 'Statistics Department',
        progress: 0,
        modules: [
          'Python for Data Science - Not started',
          'Machine Learning Basics - Not started'
        ],
        startDate: 'Starts June 1, 2025'
      },
      {
        id: 8,
        title: 'Entrepreneurship 101',
        institution: 'Business School',
        progress: 0,
        modules: [
          'Startup Basics - Not started',
          'Pitching & Fundraising - Not started'
        ],
        startDate: 'Starts June 10, 2025'
      }
    ]
  };

  const announcements = [
    '📢 New course "AI in Education" launching next week!',
    '📢 Your feedback helps us improve – fill out the latest learner survey.',
    '📢 Server maintenance scheduled for May 10 from 1AM–3AM.'
  ];

  const filteredCourses = allCourses[activeTab].filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.institution.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusIcon = () => {
    switch (activeTab) {
      case 'completed':
        return <FaCheckCircle className="status-icon completed" />;
      case 'not-started':
        return <FaRegClock className="status-icon not-started" />;
      default:
        return <FaBookOpen className="status-icon in-progress" />;
    }
  };

  return (
    <div className="my-courses-container">
      <div className="courses-header">
        <h1>My courses</h1>
        <div className="course-actions">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="sort-dropdown">
            <span>Sort by course name</span>
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>
      </div>

      <div className="announcement-bar">
        <FaBullhorn />
        <marquee>{announcements.join('   •   ')}</marquee>
      </div>

      <div className="course-overview">
        <h2>Course overview</h2>
        <div className="overview-options">
          <span 
            className={activeTab === 'in-progress' ? 'active' : ''}
            onClick={() => setActiveTab('in-progress')}
          >
            In progress
          </span>
          <span 
            className={activeTab === 'completed' ? 'active' : ''}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </span>
          <span 
            className={activeTab === 'not-started' ? 'active' : ''}
            onClick={() => setActiveTab('not-started')}
          >
            Not started
          </span>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="courses-list">
          {filteredCourses.map(course => {
            const isExpanded = expandedCourseIds.includes(course.id);
            const visibleModules = isExpanded ? course.modules : course.modules.slice(0, 2);
            return (
              <div className="course-card" key={course.id}>
                <div className="course-main">
                  {course.thumbnail && (
                    <img src={course.thumbnail} alt={course.title} className="course-thumbnail" />
                  )}
                  <div className="course-icon">
                    {getStatusIcon()}
                  </div>
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p className="institution">{course.institution}</p>

                    {activeTab === 'in-progress' && (
                      <>
                        <div className="progress-container">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="progress-text">{course.progress}% complete</span>
                        </div>
                        <p className="last-accessed">Last accessed: {course.lastAccessed}</p>
                        <p className="deadline">Next deadline: {course.nextDeadline}</p>
                      </>
                    )}

                    {activeTab === 'completed' && (
                      <div className="completion-details">
                        <p>Completed on: {course.completedDate}</p>
                        <p>Grade: <span className="grade">{course.grade}</span></p>
                        {course.certificate && (
                          <p className="certificate"><FaCertificate /> Certificate Available</p>
                        )}
                      </div>
                    )}

                    {activeTab === 'not-started' && (
                      <div className="start-details">
                        <p>{course.startDate}</p>
                        <button className="start-course-btn">Start Course</button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="course-modules">
                  {visibleModules.map((module, index) => (
                    <div className="module-item" key={index}>
                      <div className="module-divider">:</div>
                      <p>{module}</p>
                    </div>
                  ))}
                  {course.modules.length > 2 && (
                    <button 
                      className="toggle-modules-btn" 
                      style={{ color: '#2196F3' }}
                      onClick={() => toggleShowMore(course.id)}
                    >
                      {isExpanded ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-courses">
          <p>No courses found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
