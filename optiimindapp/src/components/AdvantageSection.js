import React, { useEffect, useState } from "react";
import "../Styles/AdvantageSection.css";

const AdvantageSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const sectionOffsetTop = document.getElementById("advantage-section").offsetTop;

    if (scrollTop + windowHeight >= sectionOffsetTop) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="advantage-section" className={`advantage-section ${isVisible ? "visible" : ""}`}>
      <div className="advantage-container">
        <h2 className="advantage-title">Advantages of Using Our Website</h2>
        <p className="advantage-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel purus sagittis, tristique lacus vel, auctor
          tortor. Etiam et elit tellus. Proin euismod blandit neque, id congue sem scelerisque vitae. Fusce bibendum
          ultrices diam ut dignissim.
        </p>
        <ul className="advantage-list">
          <li className="advantage-item">Expert Consultation with Qualified Doctors</li>
          <li className="advantage-item">Secure and Private Communication</li>
          <li className="advantage-item">Filter Blogs from Top Mental Health Websites</li>
          <li className="advantage-item">Easy-to-Use and User-Friendly Interface</li>
        </ul>
      </div>
    </section>
  );
};

export default AdvantageSection;
