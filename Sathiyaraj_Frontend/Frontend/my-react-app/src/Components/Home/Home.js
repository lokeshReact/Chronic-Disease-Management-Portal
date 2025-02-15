import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <div className="home-container">
            <div className="header-section"> 
                <div className="header-tile">
                    <h1>Bayer HealthCare</h1>                
                </div>
                <div className="container-link">
                    <Link to="/">Home</Link>
                    <Link to="/healthcareProviderView">Healthcare Provider View</Link>
                    <Link to="/profileView">Profile Viw</Link>
                    <Link to="/resource">Resource</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="health-des">
                    <h1>Your Health, Our Priority</h1>
                    <h6>Explore the latest health information and resources from Bayer Healthcare</h6>
                </div>
            </div>
            <h4>Featured Health Topics</h4>
            <div className="footer-section">                
                <div>
                    <p><strong>Covid-19 Updates</strong></p>
                    <p>Stay informed about the latest COVID-19 guiedline and cacciation information</p>
                    <button className="learn-more">Learn more</button>
                </div>
                <div>
                    <p><strong>Heart Health</strong></p>
                    <p>Discover tips and information for maintaing a healthy heart and </p>
                    <button className="learn-more">Learn more</button>
                </div>
                <div>
                    <p><strong>Mentel Wellness</strong></p>
                    <p>Explore resource and support options for maintaning good mental health</p>
                    <button className="learn-more">Learn more</button>
                </div>                
            </div>
        </div>
        </>
    );
}

export default Home;