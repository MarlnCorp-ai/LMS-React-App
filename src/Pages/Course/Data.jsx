import React from 'react';
import SideBar from "../../components/common/SideBar";
import '../styles/header.css';
import banner from "../../images/Banners/Banner.png";
import foundationimg from "../../images/CouseImages/foundations.png";
import excelefficiency from "../../images/CouseImages/exceleffiency.png";
import amazonbedrock from "../../images/CouseImages/amazonbedrock.png";
import aiinaction from "../../images/CouseImages/aiinaction.png";
import guidednode from "../../images/CouseImages/guidednode.png";
import guidedapi from "../../images/CouseImages/guidedapi.png";
import guidedtesting from "../../images/CouseImages/guidedtesting.png";
import promptengineering2 from "../../images/CouseImages/promptengineering2.png";
import rolebased from "../../images/CouseImages/rolebased.png";
import unsupervised from "../../images/CouseImages/unsupervised.png";
import supervised from "../../images/CouseImages/supervised.png";
import image1 from "../../images/CouseImages/Data/1.png";
import image2 from "../../images/CouseImages/Data/2.png";
import image3 from "../../images/CouseImages/Data/3.png";
import image4 from "../../images/CouseImages/Data/4.png";
import image5 from "../../images/CouseImages/Data/5.png";
import image6 from "../../images/CouseImages/Data/6.png";
import image7 from "../../images/CouseImages/Data/7.png";
import image8 from "../../images/CouseImages/Data/8.png";
import aiforbusiness from "../../images/CouseImages/aiforbusiness.png";
import designpatterns from "../../images/CouseImages/designpatterns.png";
import userresearch from "../../images/CouseImages/userresearch.png";
import buildingroadmaps from "../../images/CouseImages/buildingroadmaps.png";
import introtonn from "../../images/CouseImages/introtonn.png";
import webinar from "../../images/CouseImages/webinar.png";
import aifoundations from "../../images/CouseImages/aifoundations.png";
import artificialfoundations from "../../images/CouseImages/artificalfoundations.png";
import csharp from "../../images/CouseImages/csharp.png";
import flutterapp from "../../images/CouseImages/flutterapp.png";



const Data = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col flex-1">
      <div
          className="h-96 text-white flex flex-col items-center justify-center bg-cover mb-8"
          style={{ backgroundImage: `url('${banner}')` }}
        >
          <h1 className="text-5xl text-center font-bold mb-8">Data</h1>
        </div>
        <div className="p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
          <p>Discover our latest and greatest Data content</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            <CourseCard title="Perform Basic Statistical Analysis in Microsoft Excel" image={image1} />
            <CourseCard title="Data Show and Tell: From Dream Team to Global Team - NBA in the Olympics" image={image2} />
            <CourseCard title="Build Power BI Reports" image={image3} />
            <CourseCard title="Create and Use Views in Snowflake" image={image4} />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Popular Data Literacy Topics</h2>
          <p>Start here with content curated for Data Literacy</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Reading Data" image={image5} />
            <CourseCard title="Working with Data" image={image6} />
            <CourseCard title="Communicating with Data" image={image7} />
            <CourseCard title="Data Visualization Literacy" image={image8} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Role-Based Skills</h2>
          <p>Gain proficiency in a number of different Data roles</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Data Analyst" image={foundationimg} />
            <CourseCard title="Data Scientist" image={excelefficiency} />
            <CourseCard title="Data Engineer" image={amazonbedrock} />
            <CourseCard title="Business Intelligence Analyst" image={guidednode} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Popular Data Topics</h2>
          <p>Explore the most popular Data topics in use by Data professionals today</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Python for Data Analysis" image={rolebased} />
            <CourseCard title="Microsoft Power BI for Analysts" image={unsupervised} />
            <CourseCard title="LangChain for Data Professionals" image={promptengineering2} />
            <CourseCard title="Data Architecture Foundations" image={supervised} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Data Hands-on Labs</h2>
          <p>Ready to practice what you've learned? Try these hands-on experiences to hone your skills</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Reading and Writing CSV Files in C#" image={csharp} />
            <CourseCard title="Merging Data from Different Sources in Python Hands-On Practice" image={guidedtesting} />
            <CourseCard title="Statistical Analysis with Matplotlib Hands-On Practice" image={aifoundations} />
            <CourseCard title="Getting Started with matplotlib Hands-On Practice" image={designpatterns} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Data Skills IQ's</h2>
          <p>Access your skill profiency accross a number of different Data topics and technologies</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Skill IQ" image={userresearch} />
            <CourseCard title="Business Analytics and Intelligence" image={guidedapi} />
            <CourseCard title="Data Governance Literacy" image={artificialfoundations} />
            <CourseCard title="Power BI Admin" image={aiforbusiness} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Popular Data Certifications</h2>
          <p>Looking to get certified? Start here to prepare for the most in-demand Data certifications</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Certified Analytics Professional (CAP)" image={buildingroadmaps} />
            <CourseCard title="TensorFlow Developer Certificate" image={aiinaction} />
            <CourseCard title="Microsoft Power BI Data Analyst - PL - 300" image={introtonn} />
            <CourseCard title="SnowPro Core (COF-C02)" image={image4} />
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
