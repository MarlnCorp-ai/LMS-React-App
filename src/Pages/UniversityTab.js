import { useState } from "react";
import LeftSidebar from "../components/UniversityComponents/LeftSideBar.js";
import CourseDrawer from "../components/UniversityComponents/CourseDrawer.js";
import CourseCards from "../components/UniversityComponents/CourseCards.js";
import RightSidebar from "../components/UniversityComponents/RightSidebar.js";

const UniversityTab = () => {
  // track which drawer is active (null = none, 0 = Home, 1 = Courses, etc.)
  const [activeTabIndex, setActiveTabIndex] = useState(null);

  const handleTabSelect = (index) => {
    // toggle if clicking the same tab
    setActiveTabIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="flex font-sans h-screen relative">
      <LeftSidebar onSelect={handleTabSelect} activeIndex={activeTabIndex} />
      
      {/* Drawer example -  drawer content based on activeTabIndex */}
      <CourseDrawer isOpen={activeTabIndex === 1} onClose={() => setActiveTabIndex(null)} />

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-lg font-bold">NexusHive Policy Begins July 1, 2025</h1>
        <CourseCards />
      </div>

      <RightSidebar />
    </div>
  );
};

export default UniversityTab;
