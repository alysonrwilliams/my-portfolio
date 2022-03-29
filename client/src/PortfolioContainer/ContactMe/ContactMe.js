import React, {useState} from 'react';
import Typical from "react-typical";

import imgBack from '../../../src/images/mail.png';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

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
    const [bool, setBool] = useState("false");

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
                    "Get in Touch 📲",
                    "Let's Talk 📞",
                    "Message Me 💻",
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
                  <h4>Send Your Email Here!</h4>
                  <img src={imgBack} alt="mail" />
              </div>
              <form>
                  <p>{banner}</p>

                  <label htmlFor="name">Name</label>
                  <input type="text" 
                  onChange={handleName}
                  value={name}
                  />

                  <label htmlFor="email">Email</label>
                  <input type="email" 
                  onChange={handleEmail}
                  value={email}
                  />

                  <label htmlFor="message">Message</label>
                  <textarea type="text" 
                  onChange={handleMessage}
                  value={message}
                  />

                  <div className="send-btn">
                      <button type="submit">
                        send<i className="fa fa-paper-plane" />
                      </button>
                  </div>
              </form>
          </div>
      </div>
  </div>
  )
  }
