import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                        <a href="https://github.com/alysonrwilliams">
                            <i className="fa fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/alyson-williams-mpa">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/howdy_aly/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/aly.williams.351">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        </div>
                    </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hi, I'm <span className="highlighted-text">Alyson</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Frontend Developer 💡", 
                                1000,
                                "Javascript 💡", 
                                1000,
                                "React 💡", 
                                1000,
                                "Problem Solver 💡", 
                                1000
                            ]}
                            />
                        </h1>
                    
                    <span className="profile-role-tagline">
                    A fundamental developer with a forward thinking approach!
                    </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href=".ehizcv.pdf" download="Ehiedu ehizcv.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                    </div>
                </div>
            </div>
        </div>
    )
}
