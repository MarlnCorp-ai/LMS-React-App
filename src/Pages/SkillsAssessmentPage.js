import React from 'react';
import AssessmentHero from '../components/SkillsAssessmentPage/AssessmentHero';
import HowItWorks from '../components/SkillsAssessmentPage/HowItWorks';
import AssessmentTypes from '../components/SkillsAssessmentPage/AssessmentTypes';
import Benefits from '../components/SkillsAssessmentPage/Benefits';
import Testimonials from '../components/SkillsAssessmentPage/Testimonials';
import CallToAction from '../components/SkillsAssessmentPage/CallToAction';

const SkillsAssessmentPage = () => {
  return (
    <>
      <AssessmentHero />
      <HowItWorks />
      <AssessmentTypes />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default SkillsAssessmentPage;
