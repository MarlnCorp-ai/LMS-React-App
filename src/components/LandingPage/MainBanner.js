import Button from "./Button";
import job1 from "../../images/LandingPage/Job1.png";
import job2 from "../../images/LandingPage/Job2.png";
import job3 from "../../images/LandingPage/Job3.png";

function MainBanner() {
    
  return <div className="h-[51rem] w-full bg-gradient-to-r from-white to-purple-grad flex flex-row">
        <section className="h-full w-1/2 flex flex-col justify-center items-start px-60 gap-12">
            <h1 className="font-bold text-5xl w-[40rem] tracking-wide font-serif leading-normal">Empower Your Team with Knowledge</h1>
            <p className="text-lg">Enhance productivity with interactive learning tailored to your business needs.</p>
            <Button>Book a demo</Button>
        </section>
        {/* <section className="flex flex-col items-center mx-auto justify-center">
            <div className="flex gap-12">
                <img src={job1} alt="Job 1" className="h-[25rem]"/>
                <img src={job2} alt="Job 2" className="h-[25rem]"/>
            </div>
            <img src={job3} alt="Job 3" className="h-[25rem]"/>
        </section> */}
  </div>
}

export default MainBanner;