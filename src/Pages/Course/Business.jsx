import React from 'react';
import SideBar from "../../components/common/SideBar";
import '../styles/header.css';
import foundationimg from "../../images/CouseImages/foundations.png";
import excelefficiency from "../../images/CouseImages/exceleffiency.png";
import leadershipscrum from "../../images/CouseImages/leadershipSCRUM.png";
import excelcopilot from "../../images/CouseImages/excelcopilot.png";
import mistakesavoid from "../../images/CouseImages/mistakesavoid.png";
import yourtime from "../../images/CouseImages/yourtime.png";
import aiforwriting from "../../images/CouseImages/aiforimprovingwriting.png";
import aiforbusiness from "../../images/CouseImages/aiforbusiness.png";
import designpatterns from "../../images/CouseImages/designpatterns.png";
import userresearch from "../../images/CouseImages/userresearch.png";
import buildingroadmaps from "../../images/CouseImages/buildingroadmaps.png";
import productdesignfundamentals from "../../images/CouseImages/productdesignfundamentals.png";
import communicationskills from "../../images/CouseImages/communicationskills.png";
import leadershipmanagment from "../../images/CouseImages/leadershipmanagment.png";
import managingconflict from "../../images/CouseImages/managingconflict.png";
import agileproject from "../../images/CouseImages/agileproject.png";
import excel from "../../images/CouseImages/Excel.png";
import jira from "../../images/CouseImages/jira.png";
import microsoftsharepoint from "../../images/CouseImages/microsoftsharepoint.png";
import microsoft365 from "../../images/CouseImages/microsoft365.png";
import projectmanagmentinst from "../../images/CouseImages/projectmanagmentinst.png";
import iiba from "../../images/CouseImages/IIBA.png";
import icagile from "../../images/CouseImages/icagile.png";
import acmp from "../../images/CouseImages/acmp.png";

const Business = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col flex-1">
        <div className="header p-8">
            <h1 className="text-4xl font-bold mb-8">Business</h1>
            <h4 style={{fontWeight: "bold"}}>Empower Your Teams with Business & Professional
            Development Courses</h4>
            <p>Equip your teams with the skills they need to thrive in today’s
  fast-paced business environment. Our curated course library
  helps professionals earn valuable certifications, enhance their
  role-specific knowledge, streamline daily operations with
  essential business tools, and strengthen soft skills for effective
  collaboration and leadership.</p>
            <br></br>
            <p>Explore top learning paths and start building high-performing
            teams today.</p>
            <br></br>
          </div>
        <div className="p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">New Business Courses</h2>
          <p>Discover our latest and greatest business courses.</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            <CourseCard title="SharePoint: Foundations" image={foundationimg} />
            <CourseCard title="Excel: Boosting Efficiency and Collaboration" image={excelefficiency}/>
            <CourseCard title="Excel Copilot" image={leadershipscrum} />
            <CourseCard title="Applying Leadership as a Scrum Master" image={excelcopilot} />
          </div>

          <h2 className="text-2xl font-semibold mb-4">New Professional Development Courses</h2>
          <p>Gain proficiency in a number of different Business roles</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Mistakes to Avoid When Managing" image={mistakesavoid} />
            <CourseCard title="Your Time / Using Feedback to Drive" image={yourtime} />
            <CourseCard title="Generative AI for Business Analysis" image={aiforbusiness} />
            <CourseCard title="Generative AI for Improving Writing" image={aiforwriting} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">New Product and UX Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Product Design: Design Patterns" image={designpatterns} />
            <CourseCard title="Product Design: User Research and Analysis" image={userresearch} />
            <CourseCard title="Product Management: Building Roadmaps" image={buildingroadmaps} />
            <CourseCard title="Product Design Fundamentals" image={productdesignfundamentals} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Popular Business Topics</h2>
          <p>Explore the most popular Business topics in use by professionals today</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Communication Skills" image={communicationskills} />
            <CourseCard title="Leadership & Management" image={leadershipmanagment} />
            <CourseCard title="Managing Conflict" image={managingconflict} />
            <CourseCard title="Agile Project Management" image={agileproject} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Popular Business Tools</h2>
          <p>With coverage of major tools including</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Excel" image={excel} />
            <CourseCard title="Jira" image={jira}/>
            <CourseCard title="Microsoft SharePoint" image={microsoftsharepoint} />
            <CourseCard title="Microsoft 365" image={microsoft365} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Business Certifications</h2>
          <p>Looking to get certified? Start here to prepare for the most in-demand Business certifications</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Project Management Institute" image={projectmanagmentinst} />
            <CourseCard title="IIBA" image={iiba} />
            <CourseCard title="ICAgile" image={icagile} />
            <CourseCard title="ACMP" image={acmp} />
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

export default Business;
