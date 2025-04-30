import { useEffect, useState, useRef } from "react";
import user1 from "../../images/LandingPage/userGroups/user1.png";
import user2 from "../../images/LandingPage/userGroups/user2.png";
import user3 from "../../images/LandingPage/userGroups/user3.png";

export default function Carousel() {
  const slides = [user1, user2, user3];
  const count = slides.length;
  // duplicate first so the “wrap” is seamless
  const loopSlides = [...slides, slides[0]];

  // Each slide container is: image 35rem wide + p-2 on left/right (0.5rem each) = 36rem
  const SLIDE_WIDTH_REM = 36;

  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  // auto-advance every 10s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % count);
    }, 10000);
    return () => clearInterval(id);
  }, [count]);

  // pause/resume on hover
  const pause = () => trackRef.current?.classList.add("paused");
  const resume = () => trackRef.current?.classList.remove("paused");

  return (
    <div className="w-full">
      <header className="text-center flex flex-col gap-8 mb-32">
        <h2 className="text-5xl font-semibold">Train variety of user groups</h2>
        <p className="text-2xl">
          Measure the impact of training your customers, generating revenue, and
          provide an exceptional brand experience for your end users.
        </p>
      </header>

      {/* outer viewport: exactly 2 slides wide, centered */}
      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
        className="relative mx-auto overflow-hidden"
        style={{ width: `calc(${SLIDE_WIDTH_REM}rem * 2)` }}
      >
        {/* strip: width = number_of_loopSlides * SLIDE_WIDTH_REM */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${loopSlides.length * SLIDE_WIDTH_REM}rem`,
            transform: `translateX(-${current * SLIDE_WIDTH_REM}rem)`,
          }}
        >
          {loopSlides.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 p-2"
              style={{ flex: `0 0 ${SLIDE_WIDTH_REM}rem` }}
            >
              <img
                src={src}
                alt={`User ${idx + 1}`}
                className="w-[35rem] h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* dots for the 3 “windows”: [0,1], [1,2], [2,0] */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors
                ${current === idx
                  ? "bg-purple-500"
                  : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
