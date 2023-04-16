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
    
   <body>
    <div id="header">
    
        <div className="container">
            <nav>
                <img src="https://globalbrains.com/strapi/uploads/invested-in-optimind/og-optimind.png"/>
                <ul id="sidemenu">
                    <li><a href="#header"/>Home</li>
                    <li><a href="#about"/>About</li>
                    <li><a href="#services"/>Work</li>
                    <li><a href="#contact"/>Contacts</li>
                    <i className="fas fa-times"></i>
                </ul>
                <i className="fa-solid fa-bars"></i>
            </nav>
            <div className="header-text">
                <h1>Optiimind<span></span><br/>Optimize your Mind!</h1>
            </div>
        </div>
    </div>
    
    <div id="about">
        <div clasNames="container">
            <div className="row">
                <div className="about-col-1">
                    <img src="astro.png"/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-titlte">About Us</h1>
                    <p> Welcome to our mental health platform, where we are committed to providing
                        valuable resources and tools to promote your mental wellbeing. We recognize 
                        the crucial importance of taking care of your mental health in achieving a 
                        fulfilling and satisfying life. Therefore, we offer an extensive range of r
                        esources tailored to meet your unique needs.
                        Our website features an array of thought-provoking and insightful blog articles
                        penned by seasoned mental health professionals and individuals with personal
                        experiences, covering a diverse range of topics related to mental health. 
                        We also offer engaging and informative podcasts that delve deep into mental
                        health and wellbeing, featuring interviews with specialists and individuals
                        who share their personal stories.                      
                        Furthermore, we provide guided meditation techniques and exercises that can 
                        help you unwind, reduce stress, and enhance your overall mental health. Our 
                        ultimate aim is to empower you with the necessary tools to take control of y
                        our mental health and navigate through life's challenges with resilience.                       
                        We understand that seeking help for mental health can be a daunting process,
                        which is why our platform provides a supportive and inclusive community where 
                        you can connect with others and share your experiences. Our mission is to provide
                        you with the resources and support you need to lead a happy, healthy, and fulfilling life. </p>
                    <div className="tab-titles">
                        <p className="tab-links active-link">Profesionnal-Support</p>
                        <p className="tab-links">Convenient & Flexible</p>
                        <p className="tab-links">Personalized Resources</p>
                    </div>
                    <div className="tab-contents active-tab" id="support">
                        <ul>
                            <li><span></span><br/></li>
                            <li><span></span><br/></li>
                            <li><span></span><br/></li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="convenient">
                        <ul>
                            <li><span></span><br/></li>
                            <li><span></span><br/></li>
                            <li><span></span><br/></li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="resources">
                        <ul>
                            <li><span></span><br/></li>
                            <li><span></span><br/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="services">
        <div className="container">
            <h1 className="sub-title">Our Services</h1>
            <div className="services-list">
                <div>
                    <i className="fa-solid fa-blog"></i>
                    <h2>Blogs</h2>
                    <p>
                        Our mental health website offers a safe and informative space for individuals to explore various
                        mental health topics, including anxiety, depression, trauma, self-care, and mindfulness. Our blogs 
                        are written by experts in mental health, wellness coaches, and people with lived experience. They 
                        share insights and personal stories to help readers understand better. Our website focuses on promoting 
                        mental health awareness and education, empowering readers to take charge of their mental health and 
                        well-being. We aim to reduce stigma and create a supportive community for individuals seeking help and guidance.
                    </p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i className="fa-solid fa-podcast"></i>
                    <h2>Podcasts</h2>
                    <p>
                        Our mental health website offers informative and inspiring podcasts covering various topics such as anxiety, 
                        depression, self-care, and personal growth. Hosted by mental health professionals, individuals with lived 
                        experience, and advocates, the podcasts provide unique insights and feature guest speakers and experts. 
                        They offer accessible resources to help manage mental health and reduce stigma, promoting awareness, education, and empowerment.
                    </p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i className="fa-solid fa-peace"></i>
                    <h2>Meditations</h2>
                    <p>
                        Our mental health website offers meditations led by experienced professionals designed to improve mental 
                        and emotional well-being. The accessible practices include breathwork, visualization, and mindfulness techniques 
                        for all experience levels. We offer a range of options from short to longer sessions, promoting self-care, stress 
                        reduction, and mindfulness.
                      </p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>

   
    
    <div id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Us</h1>
                    <p><i className="fa-solid fa-envelope"></i>optiimind@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i>xxxxxxxxxx</p>
                    <div className="social-icons">
                        <a href="https://twitter.com/optiimind"><i className="fa-brands fa-square-twitter"></i></a>
                        <a href="https://www.instagram.com/optiimind/"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>
                <div className="contact-right">
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright <i className="fa-solid fa-copyright"></i> Optiimind. Made with<i className="fa-solid fa-heart"></i> </p>
        </div>
    </div>
    <script src="index.js"></script>
</body>
   
  </div>;
};

export default Home;

