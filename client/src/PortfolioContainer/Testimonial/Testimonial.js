import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimonial.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items: 1,
            },
            768:{
                items: 1,
            },
            1000:{
                items: 3,
            },
        }
    }

  return (
    <div>
      <ScreenHeading title={'Testimonial'} subHeading={'Positive Praise!'} />
      <section className="testimonial-section" id={props.id || ''}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left" />
                      Working and learning with Alyson has been an incredible
                      experience. Deadlines are always met, her work is always
                      clean, and her communication makes my job a lot easier. I
                      couldn't ask for a better team player or freelance partner.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/lady.png" alt="client"></img>
                      <h5>Demetrius W</h5>
                      <p>UpFrnt Web Developer </p>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left" />
                      Alyson and I were both enrolled in the level-one course of Code Louisville together. I had never even seen a line of HTML prior to that first class, but because she'd already taught herself HTML, CSS, and quite a bit of JS too, Alyson took me under her wing and quickly became a valuable peer mentor. She's the type of person who understands the importance of EVERYONE getting ahead.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/mike.png" alt="client"></img>
                      <h5>Nicole S</h5>
                      <p>Code Louisville Student </p>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left" />
                        UpFrnt built our website and strengthened our business. Within the first week of the website launch we received offers for business partnerships and new customer inquiries. Our website is a platform for customers to connect with our farm, learn about our values and offerings, and shop!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/man.png" alt="client"></img>
                      <h5>Chelly and Alex B</h5>
                      <p>Owners, High Five Farm </p>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left" />
                        I needed a landing page for a project I’m working on and UpFrnt quoted me less than several other local developers. Their work was really nice and the page was done so fast. Highly recommend!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/lady.png" alt="client"></img>
                      <h5>Bridget K</h5>
                      <p>Instructional Designer </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
          <img src="../../assets/Testimonial/shape-bg.png" alt="shape" />
      </div>
    </div>
  );
}
