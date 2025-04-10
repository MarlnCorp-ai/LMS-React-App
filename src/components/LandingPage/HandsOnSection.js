import handsOnImage from "../../images/LandingPage/HandsOn.png";
import { Link } from "react-router-dom";

function HandsOnSection() {
  return (
    <div className="flex items-center  gap-36 justify-center mx-auto w-full tracking-wide my-40">
      <aside>
        <img src={handsOnImage} alt="Tutors" className="h-[20rem] w-[26rem]" />
      </aside>
      <main className="flex flex-col gap-6">
        <h3 className="text-lg text-[#8C52FF] font-medium">
          Master skills by Doing
        </h3>
        <h2 className="text-2xl w-80 font-semibold">
          Gain confidence through hands-on practice
        </h2>
        <p className="text-md w-[30rem] leading-6">
          Explore 3,000+ interactive labs and AI or cloud sandboxes to master
          new skills in real-world environments-accelerating your expertise,
          career growth, and earning potential.
        </p>
        <Link to="">
          <p className="text-[#8C52FF]">
            <span className="mr-4">Learn about Labs</span>
            <span>&gt;</span>
          </p>
        </Link>
      </main>
    </div>
  );
}

export default HandsOnSection;
