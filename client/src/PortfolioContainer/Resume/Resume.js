import React, { useState, useEffect } from 'react';
import ScreenHeading
from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
  
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


/* REUSABLE COMPONENTS */
const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" }
    ];

    const programmingSkillsDetails = [
        {skill: "JavaScript", ratingPercentage: 65},
        {skill: "React JS", ratingPercentage: 65},
        {skill: "Node JS", ratingPercentage: 60},
        {skill: "C#", ratingPercentage: 25},
        {skill: "HTML", ratingPercentage: 90},
        {skill: "CSS", ratingPercentage: 81},
        {skill: "Git", ratingPercentage: 85},
        
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website (This Site!)",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "",
            subHeading: "Technologies Used: React JS, Bootstrap",
        },
        {
            title: "High Five Farm Website (Freelance Client)",
            duration: {fromDate: "2019", toDate: "2022"},
            description: "www.highfivefarmky.com",
            subHeading: "Technologies Used: HTML, CSS, and JavaScript",
        },
        {
            title: "Aly's Cosmic Scoops (Bootcamp Project)",
            duration: {fromDate: "2021", toDate: "2021"},
            description: "https://alysonrwilliams.github.io/cosmicscoops/",
            subHeading: "Technologies Used: HTML, CSS, and Javascript",
        },
        {
            title: "Amazon Clone",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "https://alysonrwilliams.github.io/amazon-clone/ *click amazon logo to launch*",
            subHeading: "Technologies Used: React JS",
        },
     
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
            heading={"Code Louisville"}
            subHeading={"Bootcamp Graduate, Front End Development"}
            fromDate={"2020"}
            toDate={"2021"} 
            />

            <ResumeHeading
            heading={"Code Louisville"}
            subHeading={"Bootcamp Graduate, Javascript II"}
            fromDate={"2021"}
            toDate={"2021"} 
            />

            <ResumeHeading 
            heading={"Code Louisville"}
            subHeading={"Bootcamp Graduate, C#"}
            fromDate={"2021"}
            toDate={"2022"} 
            />

            <ResumeHeading
            heading={"Kentucky State University"}
            subHeading={"MPA, Master of Public Administration"}
            fromDate={"2015"}
            toDate={"2017"}
            />
        </div>,

        /* Work Experience */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
            <ResumeHeading
            heading={"UpFrnt Web Development"}
            subHeading={"Freelance Web Developer"}
            fromDate={"2019"}
            toDate={"present"}
            />

        <div className="experience-description">
          <span className="resume-description-text">
          - I create eye-catching and user-friendly websites to generate web traffic and promote my clients' products and services
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          - I handle all verbal and written communications between hosting companies, clients, and vendors.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - I utlilize version control to share files with my business partner, giving me valuable Git and GitHub experience in a team setting.
          </span>
          <br></br>
          <br></br>
          <span className="resume-description-text">
            - I providing ongoing website maintenance as needed.
          </span>
          <br /> <br></br>
          <span className="resume-description-text">
          - I received multiple five-star Google reviews for excellent customer service and great websites.{" "}
                </span>
                        <br />
                    </div>
                </div>
            </div>,
                                /*Programming Skills */
            <div className="resume-screen-container programming-skills-container"
            key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                        <span>{skill.skill}</span>
                            <div className="skill-percentage">
                                <div style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

                <div className="resume-screen-container" key="projects">
                    {projectDetails.map((projectDetails, index) => (
                        <ResumeHeading 
                        key={index}
                        heading={projectDetails.title}
                        subHeading={projectDetails.subHeading}
                        description={projectDetails.description}
                        fromDate={projectDetails.duration.fromDate}
                        toDate={projectDetails.duration.toDate}
                        />
                    ))}
                </div>,

                <div className="resume-screen-container" key="interests">
                   
                    <ResumeHeading 
                    heading="Donate Life Kentucky"
                    description="In 2022, I donated 61% of my liver to someone in desperate need. I am now a Donate Life Ambassador and will forever lend my time and resources to this amazing campaign."
                    />

                    <ResumeHeading 
                    heading="SOS International"
                    description="SOS is a Louisville, KY based nonprofit that collects unused medical supplies from local hospitals and ships them overseas. I volunteer with this organization regularly during events or as a part of sort groups and I am passionate about their mission."
                    />

                    <ResumeHeading 
                    heading="Gaming"
                    description="I'm not ashamed of my Fortnite obsession!"
                    />
                
             </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };


      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../assets/Resume/${bullet.logoSrc}`)}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };

        const getResumeScreens = () => {
            return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container" 
        id={props.id || ""}
        >
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;

