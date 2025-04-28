import SearchBar from "../../components/CourseDashboard/SearchBar";
import Filters from "../../components/CourseDashboard/Filters";
import Courses from "../../components/CourseDashboard/Courses";
import Results from "../../components/CourseDashboard/Results";
import SideBar from "../../components/common/SideBar";
import Sage from "../../components/common/Sage";
import { useState } from "react";

function CourseDashboard() {
  const courseContents = [
    {
      type: "Course",
      topic: "Leveraging Parallel Streams for Fast Data Processing in Java 8",
      author: "Jose Paumard",
      libraries: ["Core Tech"],
      stats: {
        level: "Intermediate",
        duration: "2h 12m 57s",
        publishedDate: "30 Jun 2022",
        rating: "⭐️⭐️⭐️⭐️⭐️ (51)",
        ratingInNumber: 5
      },
    },
    {
      type: "Course",
      topic: "Using GitOps to Automate Kubernetes Deployments with Flux 2",
      author: "Nigel Brown",
      libraries: ["Core Tech"],
      stats: {
        level: "Advanced",
        duration: "2h 53m 39s",
        publishedDate: "23 Sep 2022",
        rating: "⭐️⭐️⭐️⭐️⭐️ (24)",
        ratingInNumber: 5
      },
    },
    {
      type: "Course",
      topic: "Optimizing Apache Spark on Databricks",
      author: "Janani Ravi",
      libraries: ["Cloud", "Data"],
      stats: {
        level: "Beginner",
        duration: "2h 32m",
        publishedDate: "03 Nov 2021",
        rating: "⭐️⭐️⭐️⭐️ (27)",
        ratingInNumber: 4
      },
    },
    {
      type: "Course",
      topic: "Emotional Intelligence for the Remote Worker",
      author: "Heather Ackmann",
      libraries: ["Core Tech"],
      stats: {
        level: "Advanced",
        duration: "1h 15m 47s",
        publishedDate: "19 Feb 2021",
        rating: "⭐️⭐️⭐️⭐️ (30)",
        ratingInNumber: 4
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
        publishedDate: "21 Mar 2022",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        ratingInNumber: 5
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
        publishedDate: "23 Jun 2022",
        rating: "⭐️⭐️⭐️⭐️⭐️ (133)",
        ratingInNumber: 5
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
        publishedDate: "21 Mar 2024",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        ratingInNumber: 5
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
        publishedDate: "21 Mar 2022",
        rating: "⭐️⭐️⭐️⭐️",
        ratingInNumber: 4
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

    if(category === "Rating")
    {
        value = parseFloat(value.split(" ")[1]);
    }

    switch(category)
    {
        case "Libraries":
            setCourseOptions(options => options.filter(option => option.libraries.includes(value)));
            break;
        case "Categories":
            setCourseOptions(options => options.filter(option => option.libraries.includes(value)));
            break;
        case "Content Type":
            setCourseOptions(options => options.filter(option => option.type === value));
            break;
        case "Rating":
            setCourseOptions(options => options.filter(option => option.ratingInNumber >= value));
            break;
        case "Skill level":
            setCourseOptions(options => options.filter(option => option.stats.level === value));
            break;
        default:
            setCourseOptions(courseContents);
            break;
    }
  };

  return (
    <div className="relative ">
      <aside className="fixed top-0 left-0">
        <SideBar />
      </aside>
      <main className="flex flex-col justify-between content-center bg-[#F4F7FA] h-full w-full gap-32 pb-12">
        <header className="w-full mt-28">
          <h1 className="text-center font-bold font-sans text-3xl max-w-[32rem] mx-auto leading-8">
            Thousands of courses authored by our network of industry experts
          </h1>
        </header>
        <div className="flex flex-col gap-8 w-full items-center">
          <SearchBar handleInputChange={getDelayedInputHandler()} />
          <div className="flex flex-col gap-6 w-full items-center">
            <Results noOfResults={8} />
            <div className="flex flex-row gap-12">
              <Filters handleFilter={handleFilter}/>
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
