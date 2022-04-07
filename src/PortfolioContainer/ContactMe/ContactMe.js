import React, { useState } from 'react';
import Typical from "react-typical";
import axios from 'axios';
import { toast } from "react-toastify";

import imgBack from '../../images/mail.png';
import load1 from '../../images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./ContactMe.css";


export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };

      const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };
    console.log(name);
    const submitForm = async(e) => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="main-container" id={props.id|| ''}>
      <ScreenHeading
      subHeading={"I'd Love To Hear From You"}
      title={"Contact Me"}
      />
      <div className="central-form">
          <div className="col">
            <h2 className="title">
                <Typical
                loop={Infinity}
                    steps={[
                    "Get in Touch 💻",
                    1000,
                    "Reach Out 🤝",
                    1000,
                ]}
                />
            </h2>
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
          <div className="back-form">
              <div className="img-back">
                  <h4>Please send an email or reach out on social media for all inquiries and opportunities! I look forward to chatting!
                      <br></br>
                      <br></br>
                      ALYSONRWILLIAMS@GMAIL.COM
                  </h4>
                  <img src={imgBack} alt="mail" />
              </div>


















          </div>
      </div>
  </div>
  )
  }