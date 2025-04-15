import React, { useState } from "react";

const discussions = [
  { title: "Group Study", isClosed: false },
  { title: "Looking for final group", isClosed: false },
  { title: "Course Q&A Discussion", isClosed: false },
];

const CourseDetailsDiscussions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedClosed, setExpandedClosed] = useState(true);

  const openDiscussions = discussions.filter((d) => !d.isClosed);
  const closedDiscussions = discussions.filter((d) => d.isClosed);

  const filteredOpen = openDiscussions.filter((d) =>
    d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Top Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
        <div className="flex items-center gap-2">
          <select className="border px-2 py-1 rounded">
            <option>All</option>
            <option>Unread</option>
            <option>Closed</option>
          </select>
          <input
            type="text"
            placeholder="Search by title or author..."
            className="border px-3 py-1 rounded w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
            + Add Discussion
          </button>
          <button className="border px-3 py-1.5 rounded">Settings</button>
        </div>
      </div>

      {/* Discussions List */}
      <div className="border rounded mb-6">
        <div className="border-b p-3 bg-gray-100 font-semibold flex items-center justify-between">
          <span>Discussions</span>
          <span className="text-sm text-gray-500">Ordered by Recent Activity</span>
        </div>
        <ul>
          {filteredOpen.length > 0 ? (
            filteredOpen.map((discussion, index) => (
              <li
                key={index}
                className="px-4 py-3 border-t hover:bg-gray-50 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                    {discussion.title}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600" title="Bookmark">
                  🔖
                </button>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-gray-500">No discussions found</li>
          )}
        </ul>
      </div>

      {/* Closed for Comments Section */}
      <div className="border rounded">
        <div
          className="border-b p-3 bg-gray-100 font-semibold flex items-center justify-between cursor-pointer"
          onClick={() => setExpandedClosed(!expandedClosed)}
        >
          <span>Closed for Comments</span>
          <span className="text-sm text-gray-500">Ordered by Recent Activity</span>
        </div>

        {expandedClosed && (
          <div className="p-6 text-center text-gray-500 border-t border-dashed">
            <div className="flex justify-center mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png"
                alt="No closed discussions"
                className="w-16 h-16 opacity-70"
              />
            </div>
            <p>You currently have no discussions with closed comments</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailsDiscussions;
