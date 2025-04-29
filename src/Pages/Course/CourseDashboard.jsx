import SearchBar from "../../components/CourseDashboard/SearchBar";
import Filters from "../../components/CourseDashboard/Filters";
import Courses from "../../components/CourseDashboard/Courses";
import Results from "../../components/CourseDashboard/Results";
import SideBar from "../../components/common/SideBar";
import Sage from "../../components/common/Sage";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import banner from "../../images/Banners/Banner.png";

function CourseDashboard() {
  const { user, registeredUsers } = useAuth();

  const courseContents = [
    {
      type: "Course",
      topic: "Essential Data Concepts in Python",
      author: "Jose Paumard",
      libraries: ["Core Tech"],
      stats: {
        level: "Beginner",
        duration: "2h 12m 57s",
        publishedDate: "10 Apr 2025",
        rating: "★★★★★ (51)",
        ratingInNumber: 5,
      },
    },
    {
      type: "Course",
      topic: "Python Data Structures",
      author: "Nigel Brown",
      libraries: ["Core Tech"],
      stats: {
        level: "Intermediate",
        duration: "2h 53m 39s",
        publishedDate: "23 Sep 2024",
        rating: "★★★★★ (24)",
        ratingInNumber: 5,
      },
    },
    {
      type: "Course",
      topic: "Python Programming Fundamentals",
      author: "Janani Ravi",
      libraries: ["Cloud", "Data"],
      stats: {
        level: "Advanced",
        duration: "2h 32m",
        publishedDate: "03 Nov 2024",
        rating: "★★★★☆ (27)",
        ratingInNumber: 4,
      },
    },
    {
      type: "Course",
      topic: "Security Monitoring Fundamentals",
      author: "Heather Ackmann",
      libraries: ["Security", "Core Tech"],
      stats: {
        level: "Beginner",
        duration: "1h 15m 47s",
        publishedDate: "19 Feb 2025",
        rating: "★★★★☆ (30)",
        ratingInNumber: 4,
      },
    },
    {
      type: "Course",
      topic: "Cisco CyberOps Security Fundamentals",
      author: "Heather Ackmann",
      libraries: ["Security", "Core Tech"],
      stats: {
        level: "Intermediate",
        duration: "1h 15m 47s",
        publishedDate: "20 Mar 2025",
        rating: "★★★★☆ (30)",
        ratingInNumber: 4,
      },
    },
    {
      type: "Course",
      topic: "Cisco CyberOps Network Threat Analysis",
      author: "Heather Ackmann",
      libraries: ["Security", "Core Tech"],
      stats: {
        level: "Advanced",
        duration: "1h 15m 47s",
        publishedDate: "10 Apr 2025",
        rating: "★★★★☆ (30)",
        ratingInNumber: 4,
      },
    },
    {
      type: "Lab",
      topic: "Classify Images of Clouds in the Cloud wiht AutoML Images",
      author: "Google Cloud",
      libraries: ["AI", "Cloud"],
      stats: {
        level: "Intermediate",
        duration: "1h 12m",
        publishedDate: "21 Mar 2025",
        rating: "★★★★★",
        ratingInNumber: 5,
      },
    },
    {
      type: "Lab",
      topic: "Modularizing LookML Code with Extends",
      author: "Google Cloud",
      libraries: ["Cloud"],
      stats: {
        level: "Intermediate",
        duration: "1h 0m",
        publishedDate: "23 Jan 2025",
        rating: "★★★★★ (133)",
        ratingInNumber: 5,
      },
    },
    {
      type: "Lab",
      topic:
        "Create a Cosmetic Anomaly Detection Model using Visual Inspection AI",
      author: "Google Cloud",
      libraries: ["AI", "Cloud"],
      stats: {
        level: "Intermediate",
        duration: "1h 0m",
        publishedDate: "21 Nov 2024",
        rating: "★★★★★",
        ratingInNumber: 5,
      },
    },
    {
      type: "Lab",
      topic: "Authentication, Authorization, and identity with Vault",
      author: "Google Cloud",
      libraries: ["Cloud"],
      stats: {
        level: "Beginner",
        duration: "30m",
        publishedDate: "21 Dec 2024",
        rating: "★★★★☆",
        ratingInNumber: 4,
      },
    },
  ];

  const [courseOptions, setCourseOptions] = useState(courseContents);

  function getDelayedInputHandler() {
    let timeOutId = null;
    const handleInputChange = (event) => {
      const id = setTimeout(() => {
        const value = event.target.value.trim();

        if (!value.length) {
          setCourseOptions(courseContents);
        } else {
          setCourseOptions((options) =>
            options.filter((option) =>
              option.topic.toLowerCase().includes(value.toLowerCase())
            )
          );
        }
      }, 3000);
      clearTimeout(timeOutId);
      timeOutId = id;
    };
    return handleInputChange;
  }

  const handleFilter = (event) => {
    const category = event.target.getAttribute("category").trim();
    let value = event.target.name.trim();

    if (category === "Rating") {
      value = parseFloat(value.split(" ")[1]);
    }

    switch (category) {
      case "Libraries":
        setCourseOptions((options) =>
          options.filter((option) => option.libraries.includes(value))
        );
        break;
      case "Categories":
        setCourseOptions((options) =>
          options.filter((option) => option.libraries.includes(value))
        );
        break;
      case "Content Type":
        setCourseOptions((options) =>
          options.filter((option) => option.type === value)
        );
        break;
      case "Rating":
        setCourseOptions((options) =>
          options.filter((option) => option.ratingInNumber >= value)
        );
        break;
      case "Skill level":
        setCourseOptions((options) =>
          options.filter((option) => option.stats.level === value)
        );
        break;
      default:
        setCourseOptions(courseContents);
        break;
    }
  };

  return (
    <div className="relative ">
      <aside className="fixed top-0 left-0 bg-white">
        <SideBar />
      </aside>
      <main className="flex flex-col justify-between content-center bg-gray-200/20 h-full w-full gap-32 pb-12">
        <header className="w-full h-96 flex items-center text-white pl-40 bg-cover" style={{ backgroundImage: `url('${banner}')` }}>
          <h1 className="text-center font-bold font-sans text-5xl max-w-[45rem] mx-auto leading-12">
            Multiple courses authored by our network of industry experts
          </h1>
        </header>
        <div className="flex flex-col gap-8 w-full items-center ml-40">
          <SearchBar handleInputChange={getDelayedInputHandler()} />
          <div className="flex flex-col gap-6 w-full items-center">
            <Results noOfResults={8} />
            <div className="flex flex-row gap-12">
              <Filters handleFilter={handleFilter} />
              <Courses courseOptions={courseOptions} />
            </div>
          </div>
        </div>
      </main>
      <Sage />
    </div>
  );
}

export default CourseDashboard;
