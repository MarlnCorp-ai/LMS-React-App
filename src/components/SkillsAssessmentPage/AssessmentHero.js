import React from "react";
import Button from "../LandingPage/Button";
import "./styles/AssessmentHero.css";
import { Link } from "react-router-dom";

const AssessmentHero = () => {
  return (
    <section className="assessment-hero bg-purple-banner">
      <div className="hero-content">
        <h1 className="text-5xl">Measure tech skills with confidence</h1>
        <p>
          Validate skills for hiring, upskilling and building world-class teams
          with role-based assessments designed by industry experts.
        </p>
        <Link to="/Search">
          <div className="hero-buttons">
            <Button text="Try a free assessment" primary={true}>
              Test your skills
            </Button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default AssessmentHero;
