import React from "react";
import "../Styles/LandingPage2.css";

const LandingPage2 = () => {
  return (
    <div className="landing-page-container">
      <h1 className="landing-page-heading">Welcome to Our Website</h1>
      <p className="landing-page-paragraph">
        We provide various features and benefits to help you with your mental health and well-being.
      </p>
      {/* Benefits section */}
      <h2 className="landing-page-subheading">Benefits</h2>
      <div className="landing-page-benefits">
        <div className="landing-page-benefit-item">
          <h3 className="landing-page-benefit-heading">Chat with Doctors</h3>
          <p className="landing-page-benefit-paragraph">
            Get professional advice and support through our chat feature with certified doctors.
          </p>
        </div>
        <div className="landing-page-benefit-item">
          <h3 className="landing-page-benefit-heading">Consultancy</h3>
          <p className="landing-page-benefit-paragraph">
            Schedule virtual consultations with mental health experts to discuss your concerns.
          </p>
        </div>
        <div className="landing-page-benefit-item">
          <h3 className="landing-page-benefit-heading">Filter Blogs</h3>
          <p className="landing-page-benefit-paragraph">
            Access top mental health websites and filter blogs for relevant and helpful content.
          </p>
        </div>
      </div>
      {/* Cards section */}
      <h2 className="landing-page-subheading">Specialties</h2>
      <div className="landing-page-cards-container">
        <div className="landing-page-card landing-page-card-animation" style={{ "--card-index": 0 }}>
          <h3 className="landing-page-card-heading">Card 1</h3>
          <p className="landing-page-card-paragraph">
            Card 1 content here. You can customize this as per your requirements.
          </p>
        </div>
        <div className="landing-page-card landing-page-card-animation" style={{ "--card-index": 1 }}>
          <h3 className="landing-page-card-heading">Card 2</h3>
          <p className="landing-page-card-paragraph">
            Card 2 content here. You can customize this as per your requirements.
          </p>
        </div>
        <div className="landing-page-card landing-page-card-animation" style={{ "--card-index": 2 }}>
          <h3 className="landing-page-card-heading">Card 3</h3>
          <p className="landing-page-card-paragraph">
            Card 3 content here. You can customize this as per your requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
