import React from "react";
import "../Styles/landingpage.css";

const LandingPage = () => {
  return (
    
    <div className="landing-page-container">
      <h1 className="landing-page-heading">Welcome to Our Mental Health Care App</h1>
      <p className="landing-page-paragraph">
        We provide a safe and supportive space for you to take care of your mental health. Our
        platform offers a range of resources and tools to help you improve your well-being.
      </p>
      <h2 className="landing-page-subheading">Why Choose Our App?</h2>
      <ul className="landing-page-benefits">
        <li className="landing-page-benefit-item">
          <h3 className="landing-page-benefit-heading">Professional Support</h3>
          <p className="landing-page-benefit-paragraph">
            Our app connects you with licensed therapists and counselors who can provide
            professional support tailored to your needs.
          </p>
        </li>
        <li className="landing-page-benefit-item">
          <h3 className="landing-page-benefit-heading">Convenient and Flexible</h3>
          <p className="landing-page-benefit-paragraph">
            You can access our app from anywhere, at any time, making it convenient and flexible to
            fit into your busy schedule.
          </p>
        </li>
        <li className="landing-page-benefit-item">
          <h3 className="landing-page-benefit-heading">Personalized Resources</h3>
          <p className="landing-page-benefit-paragraph">
            Our app offers personalized resources, including self-care exercises, coping strategies,
            and mental health assessments, to help you on your mental health journey.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
