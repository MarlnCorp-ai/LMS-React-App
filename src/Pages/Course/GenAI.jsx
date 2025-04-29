import React from 'react';
import SideBar from "../../components/common/SideBar";
import '../styles/header.css';
import sagemaker from '../../images/CouseImages/sagemaker.png';
import amazonbedrock from "../../images/CouseImages/amazonbedrock.png";
import aiinaction from "../../images/CouseImages/aiinaction.png";
import mentorsandcoaches from "../../images/CouseImages/mentorsandcoaches.png";
import promptengineering from "../../images/CouseImages/promptengineering.png";
import copilot from "../../images/CouseImages/copilot.png";
import promptengineering2 from "../../images/CouseImages/promptengineering2.png";
import rolebased from "../../images/CouseImages/rolebased.png";
import unsupervised from "../../images/CouseImages/unsupervised.png";
import supervised from "../../images/CouseImages/supervised.png";
import numpybasics from "../../images/CouseImages/numpybasics.png";
import introtonn from "../../images/CouseImages/introtonn.png";
import webinar from "../../images/CouseImages/webinar.png";
import aifoundations from "../../images/CouseImages/aifoundations.png";
import artificialfoundations from "../../images/CouseImages/artificalfoundations.png";
import openaienterprise from "../../images/CouseImages/openaienterprise.png";
import genaifordev from "../../images/CouseImages/genaifordev.png";
import openaifordev from "../../images/CouseImages/openaifordev.png";
import exploringgenaifordev from "../../images/CouseImages/exploringgenaifordev.png";
import genaiforcloud from "../../images/CouseImages/genaiforcloud.png";
import genaiforbusprof from "../../images/CouseImages/genaiforbusprof.png";
import genaifoundations from "../../images/CouseImages/genaifoundations.png";
import firstlook from "../../images/CouseImages/firstlook.png";
import genaiforleaders from "../../images/CouseImages/genaiforleaders.png";
import langchain from "../../images/CouseImages/langchain.png";
import openaifordevelopers from "../../images/CouseImages/openaifordevelopers.png";
import llm from "../../images/CouseImages/llm.png";
import prompteng from "../../images/CouseImages/prompteng.png";
 
const GenAI = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col flex-1">
        <div className="header p-8">
            <h1 className="text-4xl font-bold mb-8">Generative AI</h1>
            <h4 style={{fontWeight: "bold"}}>From Curiosity to Creation — Master Generative AI</h4>
            <br></br>
            <p>Whether you're an aspiring innovator or a seasoned AI
professional, our curated Generative AI learning path
equips you with the latest tools, techniques, and hands-on
practice. Learn how to build, fine-tune, and apply
cutting-edge AI models to real-world challenges — all
guided by industry experts.</p>
            <br></br>
          </div>
        <div className="p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
          <p>Discover our latest and greatest Generative AI content</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            <CourseCard title="Training Models with Amazon SageMaker" image={sagemaker} />
            <CourseCard title="Developing Foundations Models with Amazon Bedrock" image={amazonbedrock} />
            <CourseCard title="Generative AI Foundations: Generative AI in Action" image={aiinaction}/>
            <CourseCard title="Generative AI for Mentors and Coaches" image={mentorsandcoaches} />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Popular Generative AI Topics</h2>
          <p>Explore the most popular Promt Engineering topics in use by Generative AI professionals today</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Generative AI Foundations: Prompt Engineering" image={promptengineering} />
            <CourseCard title="Introduction to Microsoft Copilot" image={copilot} />
            <CourseCard title="Propmt Engineering" image={promptengineering2} />
            <CourseCard title="OpenAI Role-based Prompt Engineering" image={rolebased} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Generative AI Hands-On Labs</h2>
          <p>Ready to practice what you've learned? Try these hands-on experiences to hone your skills</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Exploring Unsupervised Learning" image={unsupervised} />
            <CourseCard title="Exploring Supervised Learning" image={supervised} />
            <CourseCard title="Numpy Basics in Python" image={numpybasics} />
            <CourseCard title="Introduction to Neural Networks" image={introtonn} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Getting Started in Generative AI</h2>
          <p>New to Generative AI? Start here with content curated for those just getting started</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Real-World Generative AI: Practical and Pragmatic Applications (Webinar)" image={webinar} />
            <CourseCard title="Generative AI Foundations" image={aifoundations} />
            <CourseCard title="Artificial Intelligence Foundations" image={artificialfoundations} />
            <CourseCard title="OpenAI ChatGPT Enterprise" image={openaienterprise} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Generative AI Role-Based Skills for Builders</h2>
          <p>Gain proficiency in a number of different Generative AI roles</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Generative AI for Developers" image={genaifordev} />
            <CourseCard title="OpenAI for Developers" image={openaifordev} />
            <CourseCard title="Emerging Gen AI Use Cases for Devlopers" image={exploringgenaifordev} />
            <CourseCard title="Generative AI for Cloud Engineers" image={genaiforcloud} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Generative AI for Business Professionals</h2>
          <p>Gain proffiency in a number of different Generative AI roles</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="Generative AI for Business Professionals" image={genaiforbusprof} />
            <CourseCard title="Generative AI Foundations: Ethics, Issues, and Limitations of Generative AI" image={genaifoundations} />
            <CourseCard title="First Look: OpenAI GPT-4o" image={firstlook} />
            <CourseCard title="Generative AI for Leaders" image={genaiforleaders} />
          </div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Generative AI Skill IQs</h2>
          <p>Access your skill proficiency across a number of different Generative AI topics and tehnologies</p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard title="LangChain for Data Professionals" image={langchain} />
            <CourseCard title="OpenAI for Developers" image={openaifordevelopers} />
            <CourseCard title="Large Language Models (LLMs) for Data Professionals" image={llm} />
            <CourseCard title="Prompt Engineering" image={prompteng} />
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

export default GenAI;
