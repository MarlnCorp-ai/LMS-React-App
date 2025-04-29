import Button from "./Button";
import banner1 from "../../images/LandingPage/Main Banner/Banner-image1.png";
import banner2 from "../../images/LandingPage/Main Banner/Banner-image2.png";

function MainBanner() {
  return (
    <div className="h-[51rem] w-full bg-gradient-to-r from-white to-purple-grad flex flex-row">
      <section className="h-full w-1/2 flex flex-col justify-center items-start px-60 gap-12">
        <h1 className="font-bold text-5xl w-[40rem] tracking-wide font-serif leading-normal">
          Empower Your Team with Knowledge
        </h1>
        <p className="text-lg">
          Enhance productivity with interactive learning tailored to your
          business needs.
        </p>
        <Button>Book a demo</Button>
      </section>
      {/* <section className="flex flex-col items-center mx-auto justify-center">
            <div className="flex gap-12">
                <img src={job1} alt="Job 1" className="h-[25rem]"/>
                <img src={job2} alt="Job 2" className="h-[25rem]"/>
            </div>
            <img src={job3} alt="Job 3" className="h-[25rem]"/>
        </section> */}
      <section className="flex h-full">
        <div className="flex items-end mb-28">
          <img
            src={banner1}
            alt="Main Banner-1"
            className="h-60 rounded-lg"
          />
        </div>
        <div className="mr-12 mt-28">
          <img
            src={banner2}
            alt="Main Banner-2"
            className="h-60 rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default MainBanner;
