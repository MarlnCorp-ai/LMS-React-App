import React, { useState } from "react";
import { Link } from "react-router-dom";
import beginner from "../../images/Badges/beginner.png";
import intermediate from "../../images/Badges/intermediate.png";
import advanced from "../../images/Badges/advanced.png";
import banner from "../../images/Banners/Banner.png";

const MainBanner = () => (
  <div className=" text-white h-96 flex items-center bg-cover" style={{backgroundImage: `url('${banner}')`}}>
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Master Cybersecurity Skills</h1>
      <p className="text-xl mb-8">
        Build your cybersecurity expertise with hands-on tests from industry
        experts
      </p>
    </div>
  </div>
);

const CybersecurityBrowsePage = () => {
  const [searchQuery, setSearchQuery] = useState("cybersecurity");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  // Mock data for cybersecurity skill tests
  const tests = [
    {
      id: 1,
      title: "Ethical Hacking Fundamentals",
      author: "Sarah Johnson",
      level: "Beginner",
      duration: "5h 15m",
      rating: 4.8,
      updated: "Mar 15, 2025",
      image: beginner,
      passScore: 80,
      link: "/EthicalHacking",
    },
    {
      id: 2,
      title: "Network Security Fundamentals",
      author: "Michael Chen",
      level: "Intermediate",
      duration: "1h",
      rating: 4.9,
      updated: "Feb 22, 2025",
      image: intermediate,
      passScore: 80,
      link: "/NetworkSecurityFundamentals",
    },
    {
      id: 3,
      title: "Security Incident Response",
      author: "David Brown",
      level: "Advanced",
      duration: "1h 45m",
      rating: 4.7,
      updated: "Jan 10, 2025",
      image: advanced,
      passScore: 80,
      link: "/NetworkSecurityFundamentals",
    },
    {
      id: 4,
      title: "Cybersecurity for Cloud Environments",
      author: "Samantha Lee",
      level: "Intermediate",
      duration: "30m",
      rating: 4.6,
      updated: "Mar 8, 2025",
      image: intermediate,
      passScore: 70,
      link: "/CyberCloudEnv",
    },
    {
      id: 5,
      title: "Advanced Penetration Testing",
      author: "Robert Wilson",
      level: "Advanced",
      duration: "1h 10m",
      rating: 4.8,
      updated: "Feb 5, 2025",
      image: advanced,
      passScore: 80,
      link: "/AdvPenTesting",
    },
    {
      id: 6,
      title: "Security Risk Assessment",
      author: "Jennifer Martinez",
      level: "Intermediate",
      duration: "15m",
      rating: 4.5,
      updated: "Mar 18, 2025",
      image: intermediate,
      passScore: 80,
      link: "/NetworkSecurityFundamentals",
    },
  ];

  const levelColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <MainBanner />

      {/* Search Bar */}
      <div className="mt-20 mx-auto bg-white rounded-full flex flex-row gap-4 w-[70rem] h-12 justify-start border border-gray-300">
        <span className="material-symbols-outlined content-center ml-7">
          search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[90%] focus:outline-transparent h-8 my-auto placeholder-gray-500 placeholder:font-bold text-base text-gray-500 font-bold tracking-wide"
          placeholder="Search"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="text-sm mb-6">
          <span className="text-gray-500">tests</span> /{" "}
          <span className="text-blue-600">Search Results: {searchQuery}</span>
        </div>

        {/* Results Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Cybersecurity tests</h1>
          <p className="text-gray-600">{tests.length} results</p>
        </div>

        {/* Filters and Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters on left */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded shadow p-6">
              <h2 className="font-bold text-lg mb-4">Filter by</h2>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Content type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="type-all"
                      name="type"
                      checked={selectedFilter === "all"}
                      onChange={() => setSelectedFilter("all")}
                      className="mr-2"
                    />
                    <label htmlFor="type-all">All</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="type-tests"
                      name="type"
                      checked={selectedFilter === "tests"}
                      onChange={() => setSelectedFilter("tests")}
                      className="mr-2"
                    />
                    <label htmlFor="type-tests">Skill Assessments</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="type-labs"
                      name="type"
                      checked={selectedFilter === "labs"}
                      onChange={() => setSelectedFilter("labs")}
                      className="mr-2"
                    />
                    <label htmlFor="type-labs">Hands-on Lab Exams</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="type-assessments"
                      name="type"
                      checked={selectedFilter === "assessments"}
                      onChange={() => setSelectedFilter("assessments")}
                      className="mr-2"
                    />
                    <label htmlFor="type-assessments">Course exams</label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Skill level</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="level-beginner"
                      className="mr-2"
                    />
                    <label htmlFor="level-beginner">Beginner</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="level-intermediate"
                      className="mr-2"
                    />
                    <label htmlFor="level-intermediate">Intermediate</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="level-advanced"
                      className="mr-2"
                    />
                    <label htmlFor="level-advanced">Advanced</label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Topic</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="topic-network"
                      className="mr-2"
                    />
                    <label htmlFor="topic-network">Network Security</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="topic-ethical"
                      className="mr-2"
                    />
                    <label htmlFor="topic-ethical">Ethical Hacking</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="topic-cloud" className="mr-2" />
                    <label htmlFor="topic-cloud">Cloud Security</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="topic-risk" className="mr-2" />
                    <label htmlFor="topic-risk">Risk Management</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="topic-incident"
                      className="mr-2"
                    />
                    <label htmlFor="topic-incident">Incident Response</label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Updated</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="updated-3months"
                      className="mr-2"
                    />
                    <label htmlFor="updated-3months">Last 3 months</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="updated-6months"
                      className="mr-2"
                    />
                    <label htmlFor="updated-6months">Last 6 months</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="updated-year" className="mr-2" />
                    <label htmlFor="updated-year">Last year</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results content */}
          <div className="flex-grow">
            {/* Sorting kinda jank here though */}
            <div className="mb-6 flex justify-end">
              <div className="inline-flex items-center">
                <span className="mr-2 text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tests.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="mx-auto mt-4 h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      by {course.author}
                    </p>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center text-yellow-500 mr-2">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill={
                                i < Math.floor(course.rating)
                                  ? "currentColor"
                                  : "none"
                              }
                              stroke="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        {course.rating}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          levelColors[course.level]
                        }`}
                      >
                        {course.level}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {course.duration}
                      </span>
                    </div>

                    <div className="mt-2 bg-purple-600 w-20 flex justify-center p-1 text-white rounded active:shadow-lg active:-translate-y-1 active:translate-x-1">
                      <Link to={course.link}>
                        <button>Take test</button>
                      </Link>
                    </div>

                    <div className="mt-2">
                      <span className="text-gray-600 text-sm">
                        Passing Score: {course.passScore}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityBrowsePage;
