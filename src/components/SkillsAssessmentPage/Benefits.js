import React from 'react';
import './styles/Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: "accuracy-icon",
      title: "Proven accuracy",
      description: "Our assessments are created by industry experts and validated through rigorous testing."
    },
    {
      icon: "insights-icon",
      title: "Actionable insights",
      description: "Get detailed feedback on strengths and weaknesses with personalized learning paths."
    },
    {
      icon: "metrics-icon",
      title: "Team metrics",
      description: "Track skill progress across teams and identify gaps in your organization's capabilities."
    },
    {
      icon: "integrations-icon",
      title: "Easy integrations",
      description: "Connect with your existing HR systems, learning platforms, and talent management tools."
    }
  ];

  return (
    <section className="benefits">
      <div className="section-container">
        <h2>Benefits of our skills assessments</h2>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className={`benefit-icon ${benefit.icon}`}></div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;