import React from 'react';
import './styles/Testimonials.css';
// honestly this part is probably not needed at all in the app since we don't have customers yet
const Testimonials = () => {
  const testimonials = [
    {
      quote: "The assessments helped us identify skill gaps and create targeted learning paths that improved our team's efficiency by 35%.",
      author: "Sean",
      title: "CTO, TechInnovate"
    },
    {
      quote: "We've reduced our hiring time by half by using skills assessments to pre-screen candidates and focus on those with validated skills.",
      author: "Badri",
      title: "Head of Engineering, DataFlow"
    },
    {
      quote: "The detailed insights from these assessments have transformed how we approach professional development across our organization.",
      author: "Priya Patel",
      title: "Learning & Development Director, Global Solutions"
    }
  ];

  return (
    <section className="testimonials">
      <div className="section-container">
        <h2>What our customers say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-mark">"</div>
              <p className="quote-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;