import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import LandingPage2 from "./LandingPage2";
import Slider from "./Slider";
import AdvantageSection from "./AdvantageSection";
import '../Styles/home.css'

const Home = () => {
  return <div>
   <NavBar></NavBar>
   <div className="home">
      <h1 className="title">Advantages of Using Our Website</h1>
      <p className="description">Welcome to our self-help platform,
      where you can discover effective solutions for an array of 
      everyday challenges, including anxiety disorders and various
      mental health issues. Our resources encompass a diverse range
      of mediums, including informative blogs, insightful podcasts, 
      and meditative techniques, ensuring you find the optimal approach
      for your unique needs. We encourage you to explore our platform 
      and utilize our resources to improve your mental health and wellbeing.</p>
      {/* Additional content for the Home component */}
      {/* ... */}
    </div>
   <LandingPage></LandingPage>
   <LandingPage2></LandingPage2>
   <Slider></Slider>
   <AdvantageSection></AdvantageSection>
   <Footer></Footer>
   
  </div>;
};

export default Home;
