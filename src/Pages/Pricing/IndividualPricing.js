import { Fragment } from "react";
import Card from "../../components/common/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComparePlans from "../../components/SubscriptionPage/ComparePlans";
import CountryDropdown from "../../components/SubscriptionPage/CountryDropdown";

function calculatePrice(price, currency) {
  price = Math.ceil(price * currency);
  price = price.toLocaleString("en-US");

  return price;
}

function generatePrimaryPlan(
  { heading, about, price, withoutDiscount, contentIncluded },
  currency,
  key
) {
  const [rate, symbol] = currency;
  price = calculatePrice(price, rate);
  withoutDiscount = calculatePrice(withoutDiscount, rate);
  return (
    <Card key={key} className="flex flex-row gap-8 w-[38.5rem]">
      <main className="p-6 flex flex-col gap-8">
        <header className="w-full flex flex-col">
          <h2 className="text-xl text-black tracking-wider font-semibold">
            {heading}
          </h2>
          <p className="text-xs text-gray-400 text-justify">{about}</p>
        </header>
        <main>
          <section className="mb-4">
            <span className="text-2xl font-bold">
              <span className="mr-1">{symbol}</span>
              {price}
            </span>{" "}
            <span className="text-gray-400 text-sm">
              <span className="line-through">
                <span>{symbol}</span>
                {withoutDiscount}
              </span>{" "}
              /year
            </span>
          </section>
          <p className="text-[#8C52FF] text-sm font-medium mb-2">
            <span>🛍️</span>50% off first year
          </p>
          <Link to={`/buy?currency=${symbol}&amount=${price}&role=individual`}>
            <button className="text-white bg-purple-400/60 rounded-full w-full h-9 font-light text-sm">
              Buy now
            </button>
          </Link>
        </main>
        <footer className="flex gap-4 text-sm font-semibold tracking-wide underline">
          <Link to="">
            <p>
              Try 10 days free<sup>*</sup>
            </p>
          </Link>
          <Link to="">
            <p>Plan details</p>
          </Link>
        </footer>
      </main>
      <aside className="bg-gray-200 h-full p-5">
        <h3 className="text-sm font-semibold">What's incuded</h3>
        <ul className="text-sm font-light text-gray-800">
          <li className="mb-3">
            <h4 className="flex items-center gap-1">
              <span className="material-symbols-outlined">check_circle</span>
              Course topics:
            </h4>
            <ul
              className="text-sm ml-12"
              style={{ "list-style-type": "circle" }}
            >
              <li>Software development</li>
              <li>IT Operations</li>
              <li>Product & UX</li>
              <li>Business skills</li>
            </ul>
          </li>
          {contentIncluded.map((content, idx) => (
            <li key={idx} className="flex items-start mb-3 gap-2">
              <span class="material-symbols-outlined">check_circle</span>{" "}
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </aside>
    </Card>
  );
}

function generateSecondaryPlan(
  { heading, about, includes, price, withoutDiscount },
  currency,
  key
) {
  const [rate, symbol] = currency;
  price = calculatePrice(price, rate);
  withoutDiscount = calculatePrice(withoutDiscount, rate);
  return (
    <Card key={key} className="w-[18rem] h-[20rem] p-6 flex flex-col gap-6">
      <header className="w-full flex flex-col">
        <h2 className="text-xl text-black tracking-wider font-semibold">
          {heading}
        </h2>
        <p className="text-xs text-gray-400 text-justify">{about}</p>
        <p className="font-semibold text-purple-grad text-sm">
          Includes {includes}
        </p>
      </header>
      <main>
        <section className="mb-4">
          <span className="text-2xl font-bold">
            <span className="mr-1">{symbol}</span>
            {price}
          </span>{" "}
          <span className="text-gray-400 text-sm">
            <span className="line-through">
              <span>{symbol}</span>
              {withoutDiscount}
            </span>{" "}
            /year
          </span>
        </section>
        <p className="text-[#8C52FF] text-sm font-medium mb-2">
          <span className="mr-1">🛍️</span>50% off first year
        </p>
        <Link to={`/buy?currency=${symbol}&amount=${price}&role=individual`}>
          <button className="text-white bg-purple-400/60 rounded-full w-full h-9 font-light text-sm">
            Buy now
          </button>
        </Link>
      </main>
      <footer className="flex gap-4 text-sm font-semibold tracking-wide underline">
        <Link to="">
          <p>
            Try 10 days free<sup>*</sup>
          </p>
        </Link>
        <Link to="">
          <p>Plan details</p>
        </Link>
      </footer>
    </Card>
  );
}

function IndividualPricing() {
  const [planChosen, setPlan] = useState("Complete");
  const [currentCurrency, setCurrency] = useState([1, "$"]);
  const primaryPlans = [
    {
      heading: "Core Tech",
      about:
        "Start your learning journey with a strong foundation in the basics and access to over 3,900 courses.",
      price: 126,
      withoutDiscount: 252,
      contentIncluded: [
        "Skill assessments, learning paths, certification prep, hands-on labs",
      ],
    },
    {
      heading: "Complete",
      about:
        "Build expertise across all tech domains with unlimited access to over 6,500 courses.",
      price: 234,
      withoutDiscount: 468,
      contentIncluded: [
        "Skill assessments, learning paths, certification prep, hands-on labs, and sandboxes",
        "Expanded course libraries: AI, data, cloud, and security",
      ],
    },
  ];

  const secondaryPlans = [
    {
      heading: "AI+",
      about:
        "Prepare for the future with hands-on AI learning from the experts.",
      includes: "Core Tech",
      price: 147,
      withoutDiscount: 294,
    },
    {
      heading: "Cloud+",
      about: `Advance your cloud career with access to all the Cloud Guru courses.`,
      includes: "Core Tech",
      price: 147,
      withoutDiscount: 294,
    },
    {
      heading: "Data+",
      about:
        "Become a specialist with access to over 1,400 data science courses.",
      includes: "Core Tech",
      price: 147,
      withoutDiscount: 294,
    },
    {
      heading: "Security+",
      about:
        "Learn the skills to keep up with tomorrow’s cybersecurity threats.",
      includes: "Core Tech",
      price: 147,
      withoutDiscount: 294,
    },
  ];

  const planComparisonInfo = [
    {
      topic: "Core Tech library",
      features: [
        { content: "Software development", restricted: false },
        { content: "IT Operations", restricted: false },
        { content: "Product & UX", restricted: false },
        { content: "Business skills", restricted: false },
      ],
    },
    {
      topic: "Expanded libraries",
      features: [
        { content: "AI", restricted: false },
        { content: "Cloud", restricted: false },
        { content: "Data", restricted: false },
        { content: "Security", restricted: false },
      ],
    },
    {
      topic: "Hands-on playground",
      features: [
        { content: "Instant terminal", restricted: false },
        { content: "Cloud servers", restricted: false },
        { content: "Cloud sandboxes", restricted: false },
        { content: "AI sandboxes", restricted: false },
      ],
    },
    {
      topic: "Features",
      features: [
        { content: "Skill assessments", restricted: false },
        { content: "Certification courses", restricted: false },
        { content: "Learning paths & channels", restricted: false },
        { content: "Hands-on labs", restricted: false },
      ],
    },
  ];

  const handleCurrencyUpdate = (currencies, element) => {
    const currency = currencies.find(([code]) => code === element.value);
    setCurrency(currency.slice(2));
  };

  const planOptions = [
    "Complete",
    "Core Tech",
    "AI+",
    "Cloud+",
    "Data+",
    "Security+",
  ];

  const handlePlanUpdate = ({ target }) => {
    setPlan(target.value);
  };

  switch (planChosen) {
    case "Core Tech":
      planComparisonInfo[1].features.forEach(
        (curr) => (curr.restricted = true)
      );
      planComparisonInfo[2].features.at(-1).restricted = true;
      planComparisonInfo[2].features.at(-2).restricted = true;
      break;
    case "AI+":
      planComparisonInfo[1].features.forEach(
        (curr, idx) => idx !== 0 && (curr.restricted = true)
      );
      planComparisonInfo[2].features.at(-2).restricted = true;
      break;
    case "Cloud+":
      planComparisonInfo[1].features.forEach(
        (curr, idx) => idx !== 1 && (curr.restricted = true)
      );
      planComparisonInfo[2].features.at(-1).restricted = true;
      break;
    case "Data+":
      planComparisonInfo[1].features.forEach(
        (curr, idx) => idx !== 2 && (curr.restricted = true)
      );
      planComparisonInfo[2].features.at(-2).restricted = true;
      planComparisonInfo[2].features.at(-1).restricted = true;
      break;
    case "Security+":
      planComparisonInfo[1].features.forEach(
        (curr, idx) => idx !== 3 && (curr.restricted = true)
      );
      planComparisonInfo[2].features.at(-2).restricted = true;
      planComparisonInfo[2].features.at(-1).restricted = true;
      break;
    default:
      break;
  }

  return (
    <Fragment>
      <main>
        <header className="text-center my-20">
          <h1 className="text-4xl tracking-wide font-bold mb-4">
            Innovate faster. Deliver better.
          </h1>
          <section className=" w-3/4 flex justify-around">
            <aside className="">
              <CountryDropdown handleCurrencyUpdate={handleCurrencyUpdate} />
            </aside>
            <p className="tracking-wider">
              Develop tech teams, build job-ready confidence. and accelerate
              outcomes.
            </p>
          </section>
        </header>
        <section className="flex flex-col items-center">
          <div className="flex">
            {primaryPlans.map((plan, idx) =>
              generatePrimaryPlan(plan, currentCurrency, idx)
            )}
          </div>
          <div className="flex">
            {secondaryPlans.map((plan, idx) =>
              generateSecondaryPlan(plan, currentCurrency, idx)
            )}
          </div>
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
        <section className="w-[62rem] h-[24rem] flex flex-col justify-start p-6 gap-8 bg-gradient-to-b from-purple-grad to-white rounded-3xl mx-auto mb-20 p-4 shadow shadow-2xl shadow-purple-300">
          <ComparePlans
            planComparisonInfo={planComparisonInfo}
            handlePlanUpdate={handlePlanUpdate}
            planOptions={planOptions}
          />
        </section>
      </main>
    </Fragment>
  );
}

export default IndividualPricing;
