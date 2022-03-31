import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./AboutMe.css";

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=> {
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }
const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

const SCREEN_CONSTANTS = {
    description:
      "Originally self-taught and later a boot-camp graduate, I am a developer particularly interested in the front-end with experience building, testing and launching full websites as well as providing site maintenance. I look forward to coding alongside a team of other talented developers with the goal of building amazing things together while working towards accessible tech for all.",
    highlights: {
      bullets: [
        "A knack for front end web development",
        "Full lifecycle web maintenance",
        "Use of advanced SEO practices",
        "Familiarity with several languanges including JS, React.Js, and C#",
        "A fluid and efficient developer",
        "Always the problem solver of the team",
      ],
      heading: "A Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading ={'Time for an Introduction!'} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                        <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href=".ehizcv.pdf" download="Ehiedu ehizcv.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
