import { useState } from "react";
import courseList1 from "../../images/LandingPage/courselist1.png";
import courseList3 from "../../images/LandingPage/courselist3.png";
import courseList4 from "../../images/LandingPage/courselist4.png";
import courseList2 from "../../images/LandingPage/courselist2.png";

const ImageSwitcher = () => {
  const [imageSrc, setImageSrc] = useState(courseList1);
  const [labelChosen, setLabel] = useState("Business skills");
  const [fade, setFade] = useState(false);
  const [pendingImage, setPendingImage] = useState(courseList1);

  const handleOptionClick = (label, newImage) => {
    if(label === labelChosen) return;
    setLabel(label);
    setPendingImage(newImage);
    setFade(true);
  };

  const handleTransitionEnd = () => {
    if (fade && pendingImage) {
      setImageSrc(pendingImage);
      setFade(false);
      setPendingImage(null);
    }
  };

  const courseOptions = [
    {
      label: "Business skills",
      content: courseList1,
    },
    {
      label: "Compliance",
      content: courseList2,
    },
    {
      label: "Safety",
      content: courseList3,
    },
    {
      label: "Technology",
      content: courseList4,
    },
  ];

  return (
    <div className="bg-[#F9F9F9] h-[40rem] my-40 flex flex-col items-center py-8 gap-12">
        <div className="bg-white p-3 rounded-full flex gap-8">
            {courseOptions.map(({label, content}, idx) => (
                <button
                key={idx}
                onClick={() => handleOptionClick(label, content)}
                className={`p-4 text-black font-semibold rounded-full hover:bg-[#e8dbff] hover:text-[#8c52ff] ${ labelChosen === label && "bg-black text-white"}`}
              >
                {label}
              </button>
            ))}
        </div>
      <img
        src={imageSrc}
        alt="Display"
        onTransitionEnd={handleTransitionEnd}
        className={`w-full h-auto transition-opacity duration-500 w-[68rem] mx-auto ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default ImageSwitcher;
