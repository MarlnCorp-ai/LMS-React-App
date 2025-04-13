import { Fragment, useState } from "react";
import Plan from "../../components/SubscriptionPage/Plan";
import ComparePlans from "../../components/SubscriptionPage/ComparePlans";
import CountryDropdown from "../../components/SubscriptionPage/CountryDropdown";

function OrganizationPricing() {
  const [currentCurrency, setCurrency] = useState([1, "$"]);
  const [planChosen, setPlan] = useState("Everything");
  const planInformation = [
    {
      heading: "AI + Data",
      about:
        "Embrace the world of AI with our focused course library, AI sandboxes, and assessments.",
      noOfCourses: "5000",
      price: 399,
      contentIncluded: [
        [
          "AI and data",
          "Software development, IT Ops, UX & product, and business skills",
        ],
        "Hands-on labs and AI sandboxes",
        "Certification exam prep",
        "Assessments",
        "All analytics and leader features",
      ],
    },
    {
      heading: "Security + Cloud",
      about:
        "Get your hands cloudy with thousands of labs, Hands-on Playground, and certification prep.",
      noOfCourses: "5,500",
      price: 499,
      contentIncluded: [
        [
          "Security and cloud",
          "Software development, IT Ops, UX & product, and business skills",
        ],
        "Hands-on labs and cloud sandboxes",
        "Certification exam prep",
        "Assessments",
        "All analytics and leader features",
      ],
    },
    {
      heading: "Everything",
      about:
        "Go all in with our full library of courses, hands-on experiences, and advanced analytics.",
      noOfCourses: "6,500",
      price: 565,
      contentIncluded: [
        [
          "AI, data, security, and cloud",
          "Software development, IT Ops, UX & product, and business skills",
        ],
        "All hands-on labs and sandboxes",
        "Certification exam prep",
        "Assessments",
        "All analytics and leader features",
        "Custom cloud sandboxes",
      ],
    },
  ];

  const planComparisonInfo = [
    {
      topic: "Content",
      features: [
        {
          content: "Learning paths",
          about:
            " Develop your own proficiency with a pre-curated  plan for which courses to watch in which order, with coursework curated by experts.",
        },
        {
          content: "Certification paths",
          about:
            "Get step-by-step guidance on what skills to learn (and in what order) to ace certification exams.",
        },
        {
          content: "Channels",
          about:
            "Combine sections of different courses or paths to create a custom learning plan aligned to your goals or to share with others.",
        },
        {
          content: "Course discussions",
          about:
            "Engage with peers and the expert author in a community dedicated to each course.",
        },
        {
          content: "Exercise files",
          about:
            "Get helpful resources like course slides, instructor notes, source codes, and more.",
        },
        {
          content: "Mobile & TV apps",
          about:
            "Learn anytime, anywhere with mobile and desktop apps that allow for offline viewing.",
        },
        {
          content: "Offline viewing",
          about:
            "Learn anytime, anywhere with mobile and desktop apps that allow for offline viewing.",
        },
        {
          content: "Course complete certificates",
          about: "Receive verification when a course is completed.",
        },
        {
          content: "Bookmarks",
          about:
            "Save courses, modules, and clips for later or to use as a reference.",
        },
        {
          content: "Badges",
          about: "Earn badges as you learn and reach new milestones.",
        },
      ],
    },
    {
      topic: "Assessments",
      features: [
        {
          content: "Skill IQ",
          about:
            "Measure your skill level with confidence in as little as 5 questions and 20 minutes.",
        },
        {
          content: "Role IQ",
          about:
            "Know if you have the skills you need to succeed in your job, and what you need to do to get to the next level.",
        },
        {
          content: "Course learning checks",
          about:
            "Use short, self-paced quizzes to test retention of course material.",
        },
        {
          content: "Certification practice exams",
          about:
            "Prepare for professional certifications with industry leading practice exams.",
        },
      ],
    },
    {
      topic: "Hands-on experiences",
      features: [
        {
          content: "Hands-on labs",
          about:
            "Practice your skills in real-world environments across cloud, AI, security, data, software development, and more.",
          restricted: false,
          restrictedText: "",
        },
        {
          content: "Cloud servers",
          about:
            "Spin up pre-configured, auto-provisioned servers in just a few clicks.",
          restricted: false,
          restrictedText: "",
        },
        {
          content: "Instant terminals",
          about:
            "Quickly launch a secure, in-browser SSH terminal into any instance on any provider—even behind a firewall.",
          restricted: false,
          restrictedText: "",
        },
        {
          content: "AI sandboxes",
          about:
            "Practice and explore AI tools, services, and solutions with hands-on experiences in an isolated environment.",
          restricted: false,
          restrictedText: "",
        },
        {
          content: "Cloud sandboxes",
          about:
            "Try out new cloud skills in live AWS, Azure, and GCP sandbox environments—without racking up a surprise bill. Cloud along with courses, test an idea at work or prepare for exams.",
          restricted: false,
          restrictedText: "",
        },
        {
          content: "Custom cloud sandboxes",
          about:
            "Build one-of-a-kind sandbox experiences and give your teams a risk-free way to play with cloud services in an environment customized to your cloud infrastructure.",
          restricted: false,
          restrictedText: "",
        },
      ],
    },
    {
      topic: "Analytics",
      features: [
        {
          content: "API access",
          about:
            "See skill and role proficiency, user data, course usage and course completions from Pluralsight in your internal systems. Configure, bulk actions like team and channel management.",
        },
        {
          content: "Usage analytics",
          about:
            "View usage, hours spent learning, and a leaderboard of your top members.",
        },
        {
          content: "Trend analytics",
          about:
            "See courses and subjects that are popular or trending across your teams.",
        },
        {
          content: "Advanced skills inventory analytics",
          about:
            "Get unmatched insights into individual skill proficiency across your organization to put the right people on the right projects.",
        },
        {
          content: "Advanced roles analytics",
          about:
            "View individual role proficiency to know which team members are prepared to tackle key objectives.",
        },
        {
          content: "Advanced channels analytics",
          about:
            "Measure progress towards business objectives with content and course completion metrics.",
        },
      ],
    },
    {
      topic: "Leader features",
      features: [
        {
          content: "Team management",
          about:
            "Create and assign learners to teams for easier management, tracking, and reporting. Designate team coordinators to help keep teams on track, and know who’s conquering the cloud or needs a nudge with the team leaderboard.",
        },
        {
          content: "License management",
          about: "Assign licenses via manual selection or bulk upload.",
        },
        {
          content: "API Access",
          about:
            "See skill and role proficiency, user data, course usage and course completions from Pluralsight in your internal systems. Configure bulk actions like team and channel management.",
        },
        {
          content: "Centralized billing",
          about:
            "Easily assign new users, track learning and ROI with usage and skill analytics, and manage your entire experience from one central location.",
        },
        {
          content: "Role customization",
          about:
            "Select specific skills to design custom roles that are aligned to your organization’s unique needs.",
        },
        {
          content: "Priorities",
          about:
            "Deliver on your top initiatives faster with skill development plans and skill progress insights for your teams.",
        },
      ],
    },
    {
      topic: "Professional services",
      features: [
        {
          content: "Single sign-on (SSO)",
          about:
            "Decrease the hassle of managing multiple systems and ensure the highest standards of security and data privacy for your organization.",
        },
        {
          content: "Onboarding",
          about:
            "Get started on the right foot so you can drive progress towards initiatives faster.",
        },
        {
          content: "Custom Home",
          about:
            "Customize the Pluralsight homepage to tailor your learners’ experience and tell your upskilling journey with a pinch of personality.",
        },
        {
          content: "Skills Strategy",
          about:
            "Fast-track results by aligning skill development to your business objectives.",
        },
        {
          content: "System integrations (LMS, LXP)",
          about:
            "Integrate with your learning management system (LMS), learning experience platform (LXP), or business intelligence reporting tools.",
        },
        {
          content: "Data feeds",
          about:
            "Automate data with our Data Feeds service, freeing up your time and bolstering your learning initiatives.",
        },
        {
          content: "Account maintenance",
          about:
            "Access expert account maintenance for 12 months of platform perfection. Offered in tiers of Core, Accelerated, and Premium.",
        },
        {
          content: "Transformation services",
          about:
            "Align talent strategy with business objectives, focusing on upskilling and reskilling to anticipate your organization’s needs.",
        },
      ],
    },
  ];

  const restrictedFeatures = planComparisonInfo[2].features;

  const planOptions =[
    "Everything",
    "AI + Data",
    "Security + Cloud"
  ];

  switch (planChosen) {
    case "AI + Data":
      restrictedFeatures.at(-1).restricted = true;
      restrictedFeatures.at(-2).restricted = true;
      restrictedFeatures[0].restrictedText = "(limited)";
      break;
    case "Security + Cloud":
      restrictedFeatures[0].restrictedText = "(limited)";
      restrictedFeatures.at(-3).restricted = true;
      break;
    default:
      break;
  }

  const handleCurrencyUpdate = (currencies, element) => {
    const currency = currencies.find(([code]) => code === element.value);
    setCurrency(currency.slice(2));
  };

  const handlePlanUpdate = ({ target }) => {
    setPlan(target.value);
  };

  return (
    <Fragment>
      <main className="w-full">
        <header className="text-center my-20">
          <h1 className="text-4xl tracking-wide font-bold mb-4">
            Innovate faster. Deliver better.
          </h1>
          <section className=" w-3/4 flex justify-around">
            <aside>
              <CountryDropdown handleCurrencyUpdate={handleCurrencyUpdate} />
            </aside>
            <p className="tracking-wider">
              Develop tech teams, build job-ready confidence. and accelerate
              outcomes.
            </p>
          </section>
        </header>
        <main className="w-full">
          <section className="flex justify-center">
            {planInformation.map((plan, idx) => (
              <Plan {...plan} key={idx} currency={currentCurrency} />
            ))}
          </section>
          <section className="flex flex-col items-center my-20 gap-4">
            <p>
              <sup>*</sup>Free trial excludes lab and sandbox features.
            </p>
            <div className="flex items-center w-72 bg-purple-grad rounded-full p-3 justify-evenly">
              Compare plans and features{" "}
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            </div>
          </section>
          <section className="w-[85rem] h-[50rem] flex flex-col justify-start p-6 gap-8 bg-gradient-to-b from-purple-grad to-white rounded-3xl mx-auto mb-20 p-4 shadow shadow-2xl shadow-purple-300">
            <ComparePlans
              planComparisonInfo={planComparisonInfo}
              columnsNeeded={true}
              handlePlanUpdate={handlePlanUpdate}
              planOptions={planOptions}
            />
          </section>
        </main>
      </main>
    </Fragment>
  );
}

export default OrganizationPricing;
