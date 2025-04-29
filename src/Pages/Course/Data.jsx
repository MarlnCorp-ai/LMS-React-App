import React from 'react';
import SideBar from "../../components/common/SideBar";
import '../styles/header.css';

const Data = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col flex-1">
        <div className="header p-8">
            <h1 className="text-4xl font-bold mb-8">Data</h1>
            <h4 style={{fontWeight: "bold"}}>Ready to launch or accelerate your career in data science,
            analytics, or AI?</h4>
            <br></br>
            <p>Our expert-designed courses are tailored for learners across the
Middle East and beyond. From foundational skills to advanced
techniques, discover data programs that align with global
industry demand and Vision 2030 goals. Start learning today and
transform your future."</p>
            <br></br>
          </div>
        <div className="p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
          <p>Discover our latest and greatest Data content</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            <CourseCard title="Perform Basic Statistical Analysis in Microsoft Excel" image="sharepoint.png" />
            <CourseCard title="Data Show and Tell: From Dream Team to Global Team - NBA in the Olympics" image="excel-efficiency.png" />
            <CourseCard title="Build Power BI Reports" image="excel-copilot.png" />
            <CourseCard title="Create and Use Views in Snowflake" image="scrum-master.png" />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Popular Data Literacy Topics</h2>
          <p>Start here with content curated for Data Literacy</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Reading Data" image="mistakes-managing.png" />
            <CourseCard title="Working with Data" image="feedback-drive.png" />
            <CourseCard title="Communicating with Data" image="genai-business.png" />
            <CourseCard title="Data Visualization Literacy" image="genai-writing.png" />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Role-Based Skills</h2>
          <p>Gain proficiency in a number of different Data roles</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Data Analyst" image="mistakes-managing.png" />
            <CourseCard title="Data Scientist" image="feedback-drive.png" />
            <CourseCard title="Data Engineer" image="genai-business.png" />
            <CourseCard title="Business Intelligence Analyst" image="genai-writing.png" />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Popular Data Topics</h2>
          <p>Explore the most popular Data topics in use by Data professionals today</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Python for Data Analysis" image="mistakes-managing.png" />
            <CourseCard title="Microsoft Power BI for Analysts" image="feedback-drive.png" />
            <CourseCard title="LangChain for Data Professionals" image="genai-business.png" />
            <CourseCard title="Data Architecture Foundations" image="genai-writing.png" />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Data Hands-on Labs</h2>
          <p>Ready to practice what you've learned? Try these hands-on experiences to hone your skills</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Reading and Writing CSV Files in Python" image="mistakes-managing.png" />
            <CourseCard title="Merging Data from Different Sources in Python Hands-On Practice" image="feedback-drive.png" />
            <CourseCard title="Statistical Analysis with Matplotlib Hands-On Practice" image="genai-business.png" />
            <CourseCard title="Getting Started with matplotlib Hands-On Practice" image="genai-writing.png" />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Data Skills IQ's</h2>
          <p>Access your skill profiency accross a number of different Data topics and technologies</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Skill IQ" image="mistakes-managing.png" />
            <CourseCard title="Business Analytics and Intelligence" image="feedback-drive.png" />
            <CourseCard title="Data Governance Literacy" image="genai-business.png" />
            <CourseCard title="Power BI Admin" image="genai-writing.png" />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Popular Data Certifications</h2>
          <p>Looking to get certified? Start here to prepare for the most in-demand Data certifications</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Certified Analytics Professional (CAP)" image="mistakes-managing.png" />
            <CourseCard title="TensorFlow Developer Certificate" image="feedback-drive.png" />
            <CourseCard title="Microsoft Power BI Data Analyst - PL - 300" image="genai-business.png" />
            <CourseCard title="SnowPro Core (COF-C02)" image="genai-writing.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ title, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={`${image}`} alt={title} className="h-40 w-full object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  </div>
);

export default Data;
