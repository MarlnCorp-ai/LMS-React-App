import { Fragment, useRef, useState, useEffect } from "react";
import send from "../../images/send.png";
import { Link } from "react-router-dom";
import logo1 from "../../images/Sage/logo-1.png";

function SageChat() {
  const inputRef = useRef(null);
  const textChatRef = useRef(null);
  const [chatResponses, setChatResponses] = useState([]);

  const textResponse = (
    <section className="mt-8">
      <header className="font-bold flex gap-2 items-center text-xl">
        <img src={logo1} alt="Sage AI" className="w-4 h-4" /> Sage
      </header>
      <div className="leading-[3rem]">
        <p className="text-xl">
          Here are some Python courses available on NexusHive:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">Python 3 Fundamentals</Link>
            </h3>
            <p className="text-lg">
              Python is a great programming language for beginners and experts
              alike. This course will teach you how to program in Python.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">Python 3: The Big Picture</Link>
            </h3>
            <p className="text-lg">
              Python is an excellent choice, but how do you know if it is a good
              fit for you and your team? This course will teach you about
              Python’s philosophy and culture, helping you determine if it is a
              good fit for you.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">Debugging in Python</Link>
            </h3>
            <p className="text-lg">
              This course will teach you techniques and tools for identifying
              and understanding errors in your Python code.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Introduction to Python for IT Pros and Sysadmins
              </Link>
            </h3>
            <p className="text-lg">
              Leverage the power of Python. This course will teach you the
              essential Python skills and knowledge needed to automate IT ops
              and sysadmin tasks.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">Python Collections</Link>
            </h3>
            <p className="text-lg">
              Mastering Python’s containers is key to tackling complex data
              structures efficiently. This course will teach you how to utilize
              Python's built-in and specialized container types for optimal data
              management and manipulation.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Playwright Foundations with Python
              </Link>
            </h3>
            <p className="text-lg">
              Starting a new end-to-end test automation project? This course
              will teach you how to test web applications using the open-source
              tool Playwright with Python. Try it and never look back!
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Python for Linux System Administration
              </Link>
            </h3>
            <p className="text-lg">
              Python is a widely used scripting language on Linux. This course
              will teach you the core of the Python language and how to combine
              Python scripts with other Linux tools.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">Python 3 Performance</Link>
            </h3>
            <p className="text-lg">
              Python developers love Python's high productivity. Unfortunately,
              many Python applications suffer from slow performance. This course
              is about concrete approaches for improving the performance of your
              Python applications.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Migrating Python 2 to Python 3
              </Link>
            </h3>
            <p className="text-lg">
              Python 3 has been out for over a decade and is widely used around
              the world. In this course, you will learn how to migrate from
              Python 2 to Python 3 and how to benefit from Python 3's improved
              features and performance.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Design Patterns in Python 3
              </Link>
            </h3>
            <p className="text-lg">
              This course will teach you how to use proven object-oriented
              design patterns to significantly enhance the stability,
              testability, and maintainability of your Python development while
              decreasing your development time.
            </p>
          </li>
        </ul>
        <p className="text-lg">
          Feel free to explore these courses to enhance your Python skills!
        </p>
      </div>
    </section>
  );

  // Sample Response 1
  const textResponse1 = (
    <section className="mt-8">
      <header className="font-bold flex gap-2 items-center text-xl">
        <img src={logo1} alt="Sage AI" className="w-4 h-4" /> Sage
      </header>
      <div className="leading-[3rem]">
        <p className="text-xl">
          Here are some cloud courses available on Pluralsight:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Cloud Computing Fundamentals: Cloud Concepts
              </Link>
            </h3>
            <p className="text-lg">
              In this course, you will learn the basics of cloud computing
              focusing on the core features of cloud technologies, including
              cloud deployment models, networking concepts, storage types, and
              cloud design.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                AWS Certified Cloud Practitioner (CLF-C02): Cloud Foundations
                and Compute
              </Link>
            </h3>
            <p className="text-lg">
              Understanding cloud technology is essential for modern businesses
              and cloud engineers. This course will teach you how to effectively
              leverage AWS Cloud Foundations and Compute to optimize operations
              and enhance scalability.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Getting Started with Terraform Cloud
              </Link>
            </h3>
            <p className="text-lg">
              As Terraform is adopted across the industry, companies discover
              they need to collaborate within teams and across the organization.
              This course will teach you how to use Terraform Cloud to deliver
              collaboration and automation in a managed environment.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Data Engineering in the Cloud
              </Link>
            </h3>
            <p className="text-lg">
              Explore the transformative capabilities of cloud computing in data
              engineering. This course will teach you how to design, deploy, and
              manage scalable and efficient data solutions in the cloud.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Application Development with Cloud Run
              </Link>
            </h3>
            <p className="text-lg">
              This course introduces you to fundamentals, practices,
              capabilities, and tools applicable to modern cloud-native
              application development using Google Cloud Run.
            </p>
          </li>
        </ul>
        <p className="text-lg">
          These courses cover a range of cloud technologies and concepts, from
          foundational knowledge to specific tools like AWS and Terraform.
        </p>
      </div>
    </section>
  );

  // Sample Response 2
  const textResponse2 = (
    <section className="mt-8">
      <header className="font-bold flex gap-2 items-center text-xl">
        <img src={logo1} alt="Sage AI" className="w-4 h-4" /> Sage
      </header>
      <div className="leading-[3rem]">
        <p className="text-xl">
          Here are some data engineering courses available on Pluralsight:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Data Engineering in the Cloud
              </Link>
            </h3>
            <p className="text-lg">
              Explore the transformative capabilities of cloud computing in data
              engineering. This course will teach you how to design, deploy, and
              manage scalable and efficient data solutions in the cloud.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                OneLake and Data Engineering with Microsoft Fabric
              </Link>
            </h3>
            <p className="text-lg">
              The OneLake and data engineering workloads are at the core of the
              Microsoft Fabric platform. This course will teach you how to
              implement and manage efficient and scalable data engineering
              solutions in Microsoft Fabric.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">SQL for Data Engineers</Link>
            </h3>
            <p className="text-lg">
              Level up your skills for using SQL with relational databases and
              big data systems with techniques for analysis, query optimization,
              workflow integration, and advanced technologies like streaming,
              data lakes, and data meshes.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Real-time Data Processing for Data Engineers
              </Link>
            </h3>
            <p className="text-lg">
              In today’s world, valuable data can often be produced in great
              quantity and at great speed. This course will teach you to process
              data in real time and keep up with high-volume data throughput.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Data Warehousing for Data Engineers
              </Link>
            </h3>
            <p className="text-lg">
              Data warehouses are essential for data engineers and organizations
              that work with large volumes of data. In this course, you’ll learn
              the main concepts of data warehouses and how to implement
              solutions in three leading data warehousing platforms.
            </p>
          </li>
        </ul>
        <p className="text-lg">
          These courses cover various aspects of data engineering, from cloud
          integration to real-time processing and data warehousing.
        </p>
      </div>
    </section>
  );

  // Sample Response 3
  const textResponse3 = (
    <section className="mt-8">
      <header className="font-bold flex gap-2 items-center text-xl">
        <img src={logo1} alt="Sage AI" className="w-4 h-4" /> Sage
      </header>
      <div className="leading-[3rem]">
        <p className="text-xl">
          Here are some cybersecurity courses available on Pluralsight:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Building a Strong Cyber Security Foundation
              </Link>
            </h3>
            <p className="text-lg">
              Join us in this introductory course as the first step that covers
              the essential skills and knowledge for a successful career in the
              cyber security field.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Cybersecurity and Artificial Intelligence
              </Link>
            </h3>
            <p className="text-lg">
              Whether you’re a business executive, office worker, or simply
              curious about cybersecurity and AI, this course will empower you
              with the essential skills and understanding to stay safe in an
              AI-driven world.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Information and Cyber Security Literacy: Security Operations
              </Link>
            </h3>
            <p className="text-lg">
              A thorough understanding of the roles and responsibilities within
              a security operations center is vital to safeguarding your
              company’s assets.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">Cybersecurity in Five</Link>
            </h3>
            <p className="text-lg">
              There’s lots to remember about cybersecurity. This course will
              summarize the five essential security behaviors to stay safe
              online.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Information and Cyber Security Literacy: Security Engineering
                and Architecture
              </Link>
            </h3>
            <p className="text-lg">
              This course will teach you how security must be embedded in all
              organizational technology using security architecture and
              engineering concepts.
            </p>
          </li>
        </ul>
        <p className="text-lg">
          These courses cover a range of cybersecurity topics, from foundational
          knowledge to specific areas like AI and security operations.
        </p>
      </div>
    </section>
  );

  // Sample Response 4
  const textResponse4 = (
    <section className="mt-8">
      <header className="font-bold flex gap-2 items-center text-xl">
        <img src={logo1} alt="Sage AI" className="w-4 h-4" /> Sage
      </header>
      <div className="leading-[3rem]">
        <p className="text-xl">
          Here are some courses on generative AI available on Pluralsight:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Generative AI Foundations: Generative AI in Action
              </Link>
            </h3>
            <p className="text-lg">
              Move past basic GenAI chatbot interactions to explore practical,
              real-world applications, explore use cases and ideas like
              Generative AI Agents and Retrieval-Augmented Generation (RAG),
              giving you tools to implement more sophisticated AI solutions.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Generative AI for Customers
              </Link>
            </h3>
            <p className="text-lg">
              Generative AI is changing the way that business communication is
              done. This course will teach you how to leverage Gen AI to
              communicate more effectively and efficiently.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Introduction to Generative AI
              </Link>
            </h3>
            <p className="text-lg">
              This is an introductory level microlearning course aimed at
              explaining what Generative AI is, how it is used, and how it
              differs from traditional machine learning methods. It also covers
              Google Tools to help you develop your own Gen AI apps.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Integrating Generative AI for Developers
              </Link>
            </h3>
            <p className="text-lg">
              Generative AI unlocks a whole new set of next-level
              functionalities. This course will teach you what you need to know
              to integrate Gen AI into your application.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Generative AI for Presenters
              </Link>
            </h3>
            <p className="text-lg">
              GenAI models can be used in a variety of ways to help presenters
              with meetings. This course will teach you how to use multimodal,
              GenAI models to work with preparation and slide deck development,
              meeting summarization, and follow-up.
            </p>
          </li>
        </ul>
        <p className="text-lg">
          These courses cover a range of topics related to generative AI, from
          foundational knowledge to specific applications in business and
          development.
        </p>
      </div>
    </section>
  );

  // Sample Response 5
  const textResponse5 = (
    <section className="mt-8">
      <header className="font-bold flex gap-2 items-center text-xl">
        <img src={logo1} alt="Sage AI" className="w-4 h-4" /> Sage
      </header>
      <div className="leading-[3rem]">
        <p className="text-xl">
          Here are some software development courses available on Pluralsight
          that you might find useful:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Software Development: The Big Picture
              </Link>
            </h3>
            <p className="text-lg">
              Success in software development requires far more than just coding
              skills. This course will teach you the basics of how high-quality
              software is produced, from requirements to delivery and beyond.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Software Development Concepts for CompTIA Tech+
              </Link>
            </h3>
            <p className="text-lg">
              This course will teach you the high-level concepts of software
              development needed to succeed when taking the CompTIA Tech+ Exam.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                CompTIA ITF+: Software Development and Databases
              </Link>
            </h3>
            <p className="text-lg">
              Databases are used by most organizations today and development
              knowledge is becoming increasingly important for a lot of roles.
              This course will teach you foundational database and development
              knowledge that can help you kick start your IT career.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                Software Development Security for CISSP®
              </Link>
            </h3>
            <p className="text-lg">
              Security practices must be built into software. This course will
              teach you software development security needed for the Certified
              Information Systems Security Professional examination.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-lg text-purple-400">
              <Link to="/courses?search=python">
                AI-powered Python Applications: Using Agentic Frameworks
              </Link>
            </h3>
            <p className="text-lg">
              Enhance your Python skills and learn to build autonomous AI agents
              using frameworks like LangChain, CrewAI, and AutoGen. Master
              integration of pre-trained models, performance optimization, and
              deployment across cloud and local environments.
            </p>
          </li>
        </ul>
        <p className="text-lg">
          These courses cover a range of topics in software development, from
          foundational concepts to security and AI-powered applications.
        </p>
      </div>
    </section>
  );

  const submitHandler = (event) => {
    if (event.type === "submit") {
      event.preventDefault();
      console.log("Submitted!!");
    }

    let chatValue = inputRef.current.value.toLowerCase();

    if (chatValue.includes("python")) {
      setChatResponses((state) => [...state, textResponse]);
    } else if (chatValue.includes("cloud")) {
      setChatResponses((state) => [...state, textResponse1]);
    } else if (chatValue.includes("data")) {
      setChatResponses((state) => [...state, textResponse2]);
    } else if (chatValue.includes("security")) {
      setChatResponses((state) => [...state, textResponse3]);
    } else if (chatValue.includes("ai")) {
      setChatResponses((state) => [...state, textResponse4]);
    } else if (chatValue.includes("soft")) {
      setChatResponses((state) => [...state, textResponse5]);
    }

    inputRef.current.value = "";
  };

  useEffect(() => {
    if (textChatRef.current) {
      textChatRef.current.scrollTop = textChatRef.current.scrollHeight;
    }
  }, [chatResponses]);

  return (
    <Fragment>
      <div className="h-[80%] overflow-scroll p-10" ref={textChatRef}>
        <section>
          <header className="font-bold flex gap-2 items-center text-xl">
            <img src={logo1} alt="Sage AI" className="w-4 h-4" /> Sage
          </header>
          <main className="text-justify mt-2">
            <p className="text-xl">
              Hi! I’m Sage. Here are a few things I can do to help you make the
              most out of NexusHive:
            </p>
            <ul className="list-disc ml-6 text-lg leading-10">
              <li>
                Assist you in getting started. Not sure where to begin? Share
                your challenge, and I'll guide you to the best technology and
                relevant content.
              </li>
              <li>
                Curate content tailored to your goals. Access to NexusHive's
                entire library of video courses, assessments, and labs, and
                paths allows me to curate a learning journey based on your
                goals. Just let me know what you want to learn.
              </li>
              <li>
                Answer your technology questions. Are you stuck? I’m here to
                help you troubleshoot and overcome obstacles.
              </li>
            </ul>
            <p className="mt-2 text-xl">Interaction Guidelines</p>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Protect Your Information: Be mindful not to disclose sensitive
                information, as your chat history might be reviewed or utilized
                to enhance our services.
              </li>
              <li>
                Verify Information: Information provided in Iris v1 may be
                inaccurate and require independent verification.
              </li>
            </ul>
          </main>
        </section>
        <section className="mt-8">
          <header className="font-bold flex gap-2 items-center text-xl">
            <img src={logo1} alt="Sage AI" className="w-4 h-4" /> Sage
          </header>
          <main className="text-xl">
            <p>Let’s get started. What can I assist you with today?</p>
          </main>
        </section>
        {chatResponses}
      </div>
      <form
        className="h-[10%] bg-gray-200 border-2 border-gray-300 flex items-center justify-center"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          name="sage-chat"
          className="w-4/5 h-10 text-lg tracking-wide font-medium pl-3 border-2 border-black rounded-full"
          placeholder="Enter Text Here"
          ref={inputRef}
        />
        <img src={send} alt="send" onClick={submitHandler} />
      </form>
      <section className="h-[10%] text-justify leading-4 text-xs p-4">
        <p>
          Do not disclose sensitive personal data; chat logs may be utilized for
          product enhancements. AI recommendations may be inaccurate, verify
          independently. By continuing you agree to{" "}
          <Link to="" className="text-blue-700">
            AI/ML T&C's
          </Link>{" "}
          and the{" "}
          <Link to="" className="text-blue-700">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </Fragment>
  );
}

export default SageChat;
