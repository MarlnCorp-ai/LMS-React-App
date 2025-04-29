import { Link } from "react-router-dom";
import poster1 from "../../images/LandingPage/Posters/poster1.png";
import poster2 from "../../images/LandingPage/Posters/poster2.png";
import poster3 from "../../images/LandingPage/Posters/poster3.png";
import poster4 from "../../images/LandingPage/Poster4.png";
import poster5 from "../../images/LandingPage/Posters/poster5.png";

function Poster({
  bannerPosition,
  bannerImage,
  heading,
  content,
  link,
  children,
  idx,
}) {
  const image = (
    <img
      src={bannerImage}
      alt={`Poster${idx}`}
      className="w-[30rem] h-[25rem]"
    />
  );
  return (
    <div className="flex gap-52 justify-center items-center">
      {bannerPosition === "before" && image}
      <div className="flex flex-col gap-8 w-96">
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <p className="text-lg text-gray-700 text-justify">{content}</p>
        {children}
        <Link to={link} className="text-lg font-bold flex items-center gap-2">
          Learn More{" "}
          <span class="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
      {bannerPosition === "after" && image}
    </div>
  );
}

function Posters() {
  const posters = [
    {
      heading: "Smarter Training Insights",
      content:
        "Unlock powerful, data-driven insights with Auzmor’s intuitive reporting tools. Monitor compliance and employee development across your organization, and give managers the ability to track team progress with customized reports—so everyone stays aligned and on track.",
      link: "",
      bannerImage: poster1,
      bannerPosition: "before",
    },
    {
      heading: "Blended Learning",
      content:
        "We empower organizations to unlock the full potential of their workforce through dynamic blended learning solutions that cater to every learning style—visual, auditory, or kinesthetic. By combining the flexibility of self-paced digital content with the impact of live, instructor-led sessions and in-person workshops, our programs are designed to meet learners where they are. Whether you're focused on upskilling teams, developing future leaders, or ensuring compliance, our tailored approach seamlessly integrates e-learning modules, hands-on application, and interactive experiences to boost engagement and drive measurable business outcomes.",
      link: "",
      bannerImage: poster2,
      bannerPosition: "after",
    },
    {
      heading: "What Does an LMS Do?",
      content:
        "A Learning Management System (LMS) streamlines the entire training process by offering essential tools for course management, user administration, and content delivery. It supports mobile access, enables certification, and provides powerful tracking and reporting features. With built-in communication tools and capabilities for assessment and evaluation, an LMS ensures that learning is accessible, personalized, and results-driven.",
      link: "",
      bannerImage: poster3,
      bannerPosition: "before",
    },
  ];
  return (
    <div className="my-40">
      <header className="mb-40 text-center flex flex-col gap-8">
        <h2 className="text-6xl font-semibold">Empowering Teams Through Training</h2>
        <p className="text-2xl ">Foster a culture of continuous learning in your organization by implementing a strategic and effective employee training program.</p>
      </header>
      <main className="flex flex-col gap-32 items-center">
        {posters.map((poster, idx) => Poster({ ...poster, idx }))}
        <img src={poster5} alt="Poster5" className="w-[65%]" />
      </main>
    </div>
  );
}

export default Posters;
