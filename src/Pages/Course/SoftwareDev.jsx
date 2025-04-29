import React from 'react';
import SideBar from "../../components/common/SideBar";
import '../styles/header.css';
import nodejs from "../../images/CouseImages/nodejs.png";
import apisecurity from "../../images/CouseImages/apisecurity.png";
import managinggithub from "../../images/CouseImages/managinggithub.png";
import grpc from "../../images/CouseImages/grpc.png";
import handsonreact from '../../images/CouseImages/guidedreact.png';
import guidednode from "../../images/CouseImages/guidednode.png";
import guidedapi from "../../images/CouseImages/guidedapi.png";
import guidedtesting from "../../images/CouseImages/guidedtesting.png";
import carbon from "../../images/CouseImages/carbon.png";
import git from "../../images/CouseImages/git.png";
import rust from "../../images/CouseImages/rust.png";
import csharp from "../../images/CouseImages/csharp.png";
import flutterapp from "../../images/CouseImages/flutterapp.png";
import javascriptdev from "../../images/CouseImages/javascriptdev.png";
import expressiondev from "../../images/CouseImages/expressiontrees.png";
import swift from "../../images/CouseImages/swift.png";
import istqb from "../../images/CouseImages/istqb.png";
import beta from "../../images/CouseImages/BETA.png";
import newmaui from "../../images/CouseImages/newmaui.png";
import tdd from "../../images/CouseImages/tdd.png";

const SoftwareDev = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col flex-1">
        <div className="header p-8">
            <h1 className="text-4xl font-bold mb-8">Software Development</h1>
            <h4 style={{fontWeight: "bold"}}>Master the Art of Software Development</h4>
            <br></br>
            <p>Strengthen your software development expertise with expertly curated content designed by industry professionals. 
                From foundational concepts to advanced techniques, explore resources that empower you to build, innovate, and excel.</p>
            <br></br>
          </div>
        <div className="p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
          <p>Discover our latest and greatest Software Development content</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            <CourseCard title="Node.js and Express Foundations" image={nodejs} />
            <CourseCard title="API Security Practices" image={apisecurity} />
            <CourseCard title="Managing GitHub Packages" image={managinggithub} />
            <CourseCard title="gPRC Fundamentals" image={grpc} />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Software Development Hands-On Labs</h2>
          <p>Ready to practice what you've learned? Try these hands-on experiences to hone your skills</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Guided: Optimization in React" image={handsonreact} />
            <CourseCard title="Guided:Implementing RESTful Communication Between Node.js Microservices" image={guidednode} />
            <CourseCard title="Guided: Exploring Best Practices in RESTful API Development" image={guidedapi} />
            <CourseCard title="Guided: Unit Testing in JavaScript" image={guidedtesting} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Learn a New Language, Framework, or Tool</h2>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Carbon" image={carbon} />
            <CourseCard title="Git" image={git} />
            <CourseCard title="Rust" image={rust} />
            <CourseCard title="C#" image={csharp} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Popular Dev Topics</h2>
          <p>Explore some of the most popular topics in use by Software Dev professionals today</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Creating a Full Stack App with Flutter and Firebase" image={flutterapp} />
            <CourseCard title="Building a JavaScript Development Environment" image={javascriptdev} />
            <CourseCard title="Expression Trees in C#" image={expressiondev} />
            <CourseCard title="Concurrent Programming in Swift 5" image={swift} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Software Development Skills IQs</h2>
          <p>Access your skill proficiency across a number of different Software Development topics and technologies</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="ISTQB CTFL" image={istqb} />
            <CourseCard title="GitHub Foundations - BETA" image={beta} />
            <CourseCard title="NET MAUI - BETA" image={newmaui} />
            <CourseCard title="Test-Driven Development (TDD) - BETA" image={tdd} />
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

export default SoftwareDev;
