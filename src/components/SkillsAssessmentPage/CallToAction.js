import React from 'react';
import Button from '../LandingPage/Button';
import './styles/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="cta-container">
        <h2>Ready to assess and build skills that matter?</h2>
        <p>Join thousands of organizations using our skills assessments to make data-driven decisions.</p>
        <div className="cta-buttons">
          <Button text="Try a free assessment" primary={true} />
          <Button text="Talk to sales" primary={false} />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;