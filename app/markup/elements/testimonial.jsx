"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import testPic4 from "../../images/testimonials/pic4.jpg";
import testPic5 from "../../images/testimonials/pic5.jpg";
import testPic6 from "../../images/testimonials/pic6.jpg";
import plusOrange from "../../images/shap/plus-orange.png";
import squareBlue from "../../images/shap/square-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import circleOrange2 from "../../images/shap/circle-orange-2.png";

class testimonialSection extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <section className="section-area section-sp3 testimonial-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Testimonial</h6>
              <h2 className="title m-b0">
                See What Are Our Clients <br />
                Saying About us
              </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 text-center">
                <div className="thumb-wraper">
                  <img className="bg-img" src={testShape.src} alt="" />
                  <ul>
                    <li data-member="1">
                      <div href="#">
                        <img
                          style={{ borderRadius: "50%", width: "4rem" }}
                          src={testPic1.src}
                          alt=""
                        />
                      </div>
                    </li>
                    <li data-member="2">
                      <div href="#">
                        <img
                          style={{ borderRadius: "50%", width: "4rem" }}
                          src={testPic2.src}
                          alt=""
                        />
                      </div>
                    </li>
                    <li data-member="3">
                      <div href="#">
                        <img
                          style={{ borderRadius: "50%", width: "4rem" }}
                          src={testPic3.src}
                          alt=""
                        />
                      </div>
                    </li>
                    <li data-member="4">
                      <div href="#">
                        <img
                          style={{ borderRadius: "50%", width: "4rem" }}
                          src={testPic4.src}
                          alt=""
                        />
                      </div>
                    </li>
                    <li data-member="5">
                      <div href="#">
                        <img
                          style={{ borderRadius: "50%", width: "4rem" }}
                          src={testPic5.src}
                          alt=""
                        />
                      </div>
                    </li>
                    <li data-member="6">
                      <div href="#">
                        <img
                          style={{ borderRadius: "50%", width: "4rem" }}
                          src={testPic6.src}
                          alt=""
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <Slider {...settings} className="testimonial-slide">
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                        I had multiple slip disc with sciatica and I was in terrible shape where even normal walking was a  big task for me. I met Dr. Manisha and At that time I didn't expect that I will make such an amazing recovery. All thanks to Dr. Manisha. She pushed me to complete my course of 8 weeks and  even today I play badminton.  I remember she giving me some basic exercises to help me through the pain. Even today if I get any pain, just because of those excercise I am out of 90% problems.  Her assurance ,commitment and proactive nature instilled a sense of responsibility and consistency in doing my regime.she taught me that 
Rehabilitation indeed requires sustained effort over the long term to achieve lasting results
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Vikrant Goyal</h5>
                        {/* <p>patient</p> */}
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                        I visited dr manisha for neck pain and a hump forming near my neck, she was quick to diagnose the actual problem and helped me with exercises and posture correction to manage my pain and dizziness. i still visit her once a month to check on the posture correction. she is very informative and gives practical advice. i have also taken my mom to see her for her back pain. highly recommended.

Dr.Manisha and Recure clinics has been instrumental in transforming my recovery journey. Their expertise and dedication have significantly reduced my pain levels, allowing me to overcome 90% of my physical challenges. I'm incredibly grateful for their guidance and support throughout this process. 

                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Prerna Devnani</h5>
                        {/* <p>patient</p> */}
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                        As a homemaker, my home stood still because of severe pain down my leg with numbness ,countless medicines , repeated scans and multiple episodes later i came across Dr.manisha moorjani at recure clinics she  has been invaluable in helping me manage and alleviate the physical strains of daily tasks. Their personalized care and targeted exercises have empowered me to stay active and pain-free, allowing me to fully embrace my role at home with confidence and ease.
She has given an amazing treatment.. diagnosed the whole problem with a lot of patience and not rushing into something like other doctors do. She  gave me a right treatment without misleading us. Thanks alot for the wonderfull experience. will definately refer to my friends and family and anyone who comes across with spinal issues .


                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Varsha Gupta</h5>
                        {/* <p>patient</p> */}
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                        Recure reviews 

                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Patient name</h5>
                        {/* <p>patient</p> */}
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                        Recure reviews 

                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Patient name</h5>
                        {/* <p>patient</p> */}
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                        Recure reviews 

                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Patient name</h5>
                        {/* <p>patient</p> */}
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  {/* <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecena ssuspendisse
                          ultrices gravida.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div> */}
                </Slider>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src={plusOrange.src} alt="" />
          <img className="pt-img2 animate2" src={squareBlue.src} alt="" />
          <img className="pt-img3 animate3" src={circleDots.src} alt="" />
          <img className="pt-img4 animate4" src={circleOrange2.src} alt="" />
        </section>
      </>
    );
  }
}

export default testimonialSection;
