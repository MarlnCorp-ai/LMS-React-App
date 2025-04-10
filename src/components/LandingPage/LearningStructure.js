import hexagon from "../../images/LandingPage/hexagon.png";

function LearningStructure() {
  return (
    <div className="flex flex-col items-center mt-40">
      <h2 className=" text-4xl tracking-wide w-84 text-center font-medium">
        An all-in-one <br />
        learning experience
      </h2>
      <img
        src={hexagon}
        alt="Learning Structure"
        className="w-[85rem] h-[45rem] mx-auto"
      />
    </div>
  );
}

export default LearningStructure;
