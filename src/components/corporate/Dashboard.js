import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaFilter, FaHome, FaBook, FaChartLine, FaUsers, FaCog, FaBell } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getDaysInMonth } from 'date-fns';
import './Dashboard.css';
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAllCards, setShowAllCards] = useState(false);

  const currentMonthDate = new Date(2024, 7); // August 2024
  const currentMonth = currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  const daysInMonth = getDaysInMonth(currentMonthDate);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const complianceFilters = [
    { name: 'All', count: 106 },
    { name: 'Overdue', count: 99 },
    { name: 'Upcoming within next 30 days', count: 0 },
    { name: 'On track', count: 7 }
  ];

  const socialFeed = [
    { user: 'Chandni Active User', time: '>7 days ago', content: 'Fall back Check!' },
    { user: 'Chandni Active User', time: '>7 days ago', content: 'Social learning' },
    { user: 'Chandni Active User', time: '>7 days ago', content: 'There' }
  ];

  const leaderboardUsers = [
    { name: 'Chandni Valacha (You)', points: 22985 },
    { name: 'Chandni SSO User', points: 11253 }
  ];

  const cardTypes = ['SELF PACED', 'CLASSROOM', 'BLENDED'];
  const learningCards = Array.from({ length: 10 }, (_, i) => ({
    type: cardTypes[i % 3],
    title: `Course ${i + 1}`,
    description: `Description for Course ${i + 1}`,
    duration: `${30 + i} mins`,
    bgImage: `https://picsum.photos/seed/${i}/400/300`,
    progress: Math.floor(Math.random() * 100)
  }));

  const donutData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [25, 40, 35],
        backgroundColor: ['#4CAF50', '#2196F3', '#F44336'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>NEXUSHIVE</h1>
          <p>Learning Platform</p>
        </div>
        <div className="navbar-links">
          <a href="#"><FaHome /> Dashboard</a>
          <Link
             to="/myCourse"
          
         >
          <FaBook /> Courses</Link>
          <a href="#"><FaChartLine /> Progress</a>
          <a href="#"><FaUsers /> Community</a>
          <a href="#"><FaCog /> Settings</a>
        </div>
        <div className="navbar-actions">
          <button className="notification-btn">
            <FaBell />
            <span className="badge">3</span>
          </button>
          <div className="user-profile">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Chandni avatar" />
            <span>Chandni</span>
          </div>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="main-content">
        <div className="learning-cards-scroll">
  <div className="learning-cards">
    {(showAllCards ? learningCards : learningCards.slice(0, 4)).map((card, index) => (
      <div 
        className="card" 
        key={index}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${card.bgImage})` }}
      >
        <div className="card-header">
          <span className={`badge ${card.type.replace(' ', '-').toLowerCase()}`}>{card.type}</span>
        </div>
        <div className="card-body">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${card.progress}%` }}></div>
            <span>{card.progress}% Complete</span>
          </div>
          <div className="duration">{card.duration}</div>
        </div>
        <button className="continue-btn">CONTINUE</button>
      </div>
    ))}
  </div>
  <div className="show-more-wrapper">
    <button 
      className="show-more-btn" 
      onClick={() => setShowAllCards(!showAllCards)}
    >
      {showAllCards ? 'Show Less' : 'Show More'}
    </button>
  </div>
</div>


          <div className="stats-section">
            <div className="compliance-section">
              <div className="section-header">
                <h2>Compliance Status</h2>
                <div className="filter">All compliance-type enrollments</div>
              </div>
              <div className="status-container">
                <div className="donut-chart-container">
                  <Doughnut data={donutData} />
                </div>
                <div className="status-filters">
                  {complianceFilters.map((filter, index) => (
                    <button 
                      key={index}
                      className={activeFilter === filter.name ? 'active' : ''}
                      onClick={() => setActiveFilter(filter.name)}
                    >
                      {filter.name} ({filter.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="social-feed">
              <div className="section-header">
                <h2>Social feed</h2>
                <button className="explore-btn">Explore</button>
              </div>
              <div className="feed-items">
                {socialFeed.map((item, index) => (
                  <div className="feed-item" key={index}>
                    <div className="user-info">
                      <div className="user-avatar">
                        <img src={`https://randomuser.me/api/portraits/women/${index + 40}.jpg`} alt={`${item.user} avatar`} />
                      </div>
                      <div>
                        <span className="user-name">{item.user}</span>
                        <span className="post-time">{item.time}</span>
                      </div>
                    </div>
                    <p>{item.content}</p>
                    {index < socialFeed.length - 1 && <div className="divider" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="calendar">
            <div className="calendar-header">
              <button><FaChevronLeft /></button>
              <h3>{currentMonth}</h3>
              <button><FaChevronRight /></button>
            </div>
            <div className="weekdays">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <span key={index}>{day}</span>
              ))}
            </div>
            <div className="days-grid">
              {daysArray.map(day => (
                <div className={`day ${day === new Date().getDate() && currentMonthDate.getMonth() === new Date().getMonth() ? 'current-day' : ''}`} key={day}>
                  {day}
                </div>
              ))}
            </div>
            <button className="filter-btn">
              <FaFilter /> Filter sessions
            </button>
          </div>

          <div className="leaderboard">
            <div className="leaderboard-header">
              <div>
                <h3>Leaderboard</h3>
                <p>All levels achieved!</p>
              </div>
              <div className="your-points">
                <p>Your points:</p>
                <span>22945</span>
              </div>
            </div>
            <div className="leaderboard-users">
              {leaderboardUsers.map((user, index) => (
                <div className={`user ${user.name.includes('(You)') ? 'current-user' : ''}`} key={index}>
                  <div className="user-info">
                    <span className="user-rank">{index + 1}</span>
                    <div className="user-avatar">
                      <img src={`https://randomuser.me/api/portraits/women/${index + 41}.jpg`} alt={`${user.name} avatar`} />
                    </div>
                    <span className="user-name">{user.name}</span>
                  </div>
                  <span className="user-points">{user.points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
