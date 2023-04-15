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
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam faucibus est, eu dapibus tortor. Sed vestibulum mi id finibus vestibulum. Vestibulum a massa metus. Vivamus ullamcorper risus a magna dapibus, at tempus justo tristique.</p>
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
