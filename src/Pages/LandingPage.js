import { Fragment } from "react";
import MainBanner from "../components/LandingPage/MainBanner";
import RevolvingPosters from "../components/LandingPage/RevolvingPosters";
import Tutors from "../components/LandingPage/Tutors";
import LearningStructure from "../components/LandingPage/LearningStructure";
import Courses from "../components/LandingPage/Courses";
import UserGroupsSection from "../components/LandingPage/UserGroupsSection";
import TechSkillsSection from "../components/LandingPage/TechSkillsSection";
import HandsOnSection from "../components/LandingPage/HandsOnSection";
import SecondaryBanner from "../components/LandingPage/SecondaryBanner";
import GettingStarted from "../components/LandingPage/GettingStarted";
import FAQ from "../components/LandingPage/FAQ";
import Posters from "../components/LandingPage/Posters";


function LandingPage() {
  return (
    <Fragment>
        <section>
          <MainBanner />
        </section>
        <section>
          <RevolvingPosters />
        </section>
        <section>
          <Tutors />
        </section>
        <section>
          <LearningStructure />
        </section>
        <section>
          <Courses />
        </section>
        <section>
            <Posters />
        </section>
        <section>
          <UserGroupsSection />
        </section>
        <section>
          <TechSkillsSection />
        </section>
        <section>
          <HandsOnSection />
        </section>
        <section>
          <SecondaryBanner />
        </section>
        <section>
          <GettingStarted />
        </section>
        <section>
            <FAQ />
        </section>
    </Fragment>
  );
}

export default LandingPage;
