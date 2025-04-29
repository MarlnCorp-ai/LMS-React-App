import Card from "../common/Card";
import { Link } from "react-router-dom";

function Plan({
  heading,
  about,
  noOfCourses,
  price,
  contentIncluded,
  key,
  currency
}) {
    const [rate, symbol] = currency;
    price = Math.ceil(price * rate);
    price = price.toLocaleString('en-US');
  const [whatsIncluded, ...otherContent] = contentIncluded;

  return (
    <Card
      key={key}
      className={`flex flex-col w-[22rem] h-[40rem]`}
    >
      <main className="w-full h-1/2 bg-white flex flex-col gap-4 p-6">
        <header className="w-full flex flex-col">
          <h2 className="text-xl text-black tracking-wider font-semibold">{heading}</h2>
          <p className="text-xs text-gray-400 text-justify">{about}</p>
        </header>
        <main className="w-full flex flex-col gap-4">
          <section className="text-sm text-[#8C52FF]">
            <span className="mr-1">▶️</span> {noOfCourses} Courses
          </section>
          <section>
            <span className="text-2xl font-bold"><span className="mr-1">{symbol}</span>{price}</span>{" "}
            <span className="text-gray-400 text-sm">/year per user</span>
          </section>
          <button className="text-white bg-purple-grad rounded-full w-full h-11 font-light text-sm">
            Try for free<sup>*</sup>
          </button>
          <Link to={`/buy?currency=${symbol}&amount=${price}`}>
            <p className="font-medium underline text-sm">Buy now</p>
          </Link>
        </main>
      </main>
      <footer className="h-1/2 w-full bg-gray-200 p-6">
        <h3 className="text-sm font-semibold">What's incuded</h3>
        <ul className="text-sm font-light text-gray-800">
          <li className="mb-3">
            <h4 className="flex items-center">
              <span className="material-symbols-outlined">check_circle</span>Tech
              domains
            </h4>
            <ul className="text-sm ml-12" style={{"list-style-type" :"circle"}}>
              <li className="font-semibold">{whatsIncluded[0]}</li>
              <li>{whatsIncluded[1]}</li>
            </ul>
          </li>
          {otherContent.map((content, idx) => (
            <li key={idx} className="flex items-center mb-3">
              <span class="material-symbols-outlined">check_circle</span>{" "}
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </footer>
    </Card>
  );
}

export default Plan;
