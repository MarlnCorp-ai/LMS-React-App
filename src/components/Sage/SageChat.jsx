import { Fragment, useRef, useState, useEffect } from "react";
import send from "../../images/send.png";
import { Link } from "react-router-dom";
function SageChat() {
  const inputRef = useRef(null);
  const textChatRef = useRef(null);
  const [chatResponses, setChatResponses] = useState([]);

  const textResponse = (
    <section className="mt-8">
      <header className="font-semibold">Sage</header>
      <div>
        <p>Here are some Python courses available on NexusHive:</p>
        <ul className="list-disc ml-6">
          <li>
            <h3 className="text-xl font-semibold">Python 3 Fundamentals</h3>
            <p>
              Python is a great programming language for beginners and experts
              alike. This course will teach you how to program in Python.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Python 3: The Big Picture</h3>
            <p>
              Python is an excellent choice, but how do you know if it is a good
              fit for you and your team? This course will teach you about
              Python’s philosophy and culture, helping you determine if it is a
              good fit for you.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Debugging in Python</h3>
            <p>
              This course will teach you techniques and tools for identifying
              and understanding errors in your Python code.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">
              Introduction to Python for IT Pros and Sysadmins
            </h3>
            <p>
              Leverage the power of Python. This course will teach you the
              essential Python skills and knowledge needed to automate IT ops
              and sysadmin tasks.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Python Collections</h3>
            <p>
              Mastering Python’s containers is key to tackling complex data
              structures efficiently. This course will teach you how to utilize
              Python's built-in and specialized container types for optimal data
              management and manipulation.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">
              Playwright Foundations with Python
            </h3>
            <p>
              Starting a new end-to-end test automation project? This course
              will teach you how to test web applications using the open-source
              tool Playwright with Python. Try it and never look back!
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">
              Python for Linux System Administration
            </h3>
            <p>
              Python is a widely used scripting language on Linux. This course
              will teach you the core of the Python language and how to combine
              Python scripts with other Linux tools.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Python 3 Performance</h3>
            <p>
              Python developers love Python's high productivity. Unfortunately,
              many Python applications suffer from slow performance. This course
              is about concrete approaches for improving the performance of your
              Python applications.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">
              Migrating Python 2 to Python 3
            </h3>
            <p>
              Python 3 has been out for over a decade and is widely used around
              the world. In this course, you will learn how to migrate from
              Python 2 to Python 3 and how to benefit from Python 3's improved
              features and performance.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">
              Design Patterns in Python 3
            </h3>
            <p>
              This course will teach you how to use proven object-oriented
              design patterns to significantly enhance the stability,
              testability, and maintainability of your Python development while
              decreasing your development time.
            </p>
          </li>
        </ul>
        <p>Feel free to explore these courses to enhance your Python skills!</p>
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
    }
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
          <header className="font-semibold">Sage</header>
          <main className="text-justify mt-2">
            <p>
              Hi! I’m Sage. Here are a few things I can do to help you make the
              most out of NexusHive:
            </p>
            <ul className="list-disc ml-6">
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
            <p className="mt-2">Interaction Guidelines</p>
            <ul className="list-disc ml-6">
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
          <header className="font-semibold">Sage</header>
          <main>
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
