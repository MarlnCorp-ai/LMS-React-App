import { useEffect, useState } from "react";
import user1 from "../../images/LandingPage/userGroups/user1.png";
import user2 from "../../images/LandingPage/userGroups/user2.png";
import user3 from "../../images/LandingPage/userGroups/user3.png";

function Carousel() {
    const slides = [
        <img src={user1} alt="User 1" className="w-[36rem] h-[40rem]" />,
        <img src={user2} alt="User 2" className="w-[36rem] h-[40rem]" />,
        <img src={user3} alt="User 3" className="w-[36rem] h-[40rem]" />
    ];
  
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent(prev => (prev + 1) % slides.length);
      }, 10000);
      return () => clearInterval(timer);
    }, [slides.length]);
  
    const goPrev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);
    const goNext = () => setCurrent(prev => (prev + 1) % slides.length);
  
    return (
      <div className="relative w-[37rem] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-12 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-20 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
        >
          ›
        </button>
      </div>
    );
  }
  

function UserGroupsSection()
{
    return <div className="flex flex-col items-center gap-32 justify-center w-full">
        <header className="text-center flex flex-col gap-8">
            <h2 className="text-3xl font-semibold">Train variety of user groups</h2>
            <p className="text-">Measure the impact of training your customers, generating revenue, and provide an exceptional brand experience for your end users.</p>
        </header>
        <main>
            <Carousel/>
        </main>
    </div>
}

export default UserGroupsSection;