import "./styles/AssessmentHero.css";
import { Link } from "react-router-dom";
import rightArrow from "../../images/arrow_right_alt.png";

function Button({ children }) {
  return (
    <div className="flex gap-8 p-2 justify-center items-center bg-gray-400/80 rounded-full">
      <span className="pl-2">{children}</span>
      <div className="flex items-center justify-center bg-white rounded-full">
        <img src={rightArrow} alt="Right Arrow" className="h-10"/>
      </div>
    </div>
  );
}

const AssessmentHero = () => {
  return (
    <section className="assessment-hero">
      <div className="hero-content">
        <h1 className="text-5xl">Measure tech skills with confidence</h1>
        <p>
          Validate skills for hiring, upskilling and building world-class teams
          with role-based assessments designed by industry experts.
        </p>

        <div className="flex gap-16 mt-10">
          <Link to="/Search">
            <Button>
              Explore Skill Tests
            </Button>
          </Link>
          <Link to="/mcq">
            <Button>
               Instant Test
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AssessmentHero;
