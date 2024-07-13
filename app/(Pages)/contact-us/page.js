"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// // Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// StyleSheet
import "@/app/App.scss";

// Import Images
import bnrImg1 from "@/app/images/banner/img1.jpg";
import pic1 from "@/app/images/about/pic-1.jpg";
import icon1 from "@/app/images/icon/icon1.png";
import icon2 from "@/app/images/icon/icon2.png";
import icon3 from "@/app/images/icon/icon3.png";
import animateWave from "@/app/images/shap/wave-blue.png";
import animate2 from "@/app/images/shap/circle-dots.png";
import animateRotate from "@/app/images/shap/plus-blue.png";
import Link from "next/link";

class ContactUs extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner banner-lg contact-banner"
              style={{ backgroundImage: "url(" + bnrImg1.src + ")" }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Contact Us</h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{" "}
                          Home
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img
                className="pt-img1 animate-wave"
                src={animateWave.src}
                alt=""
              />
              <img className="pt-img2 animate2" src={animate2.src} alt="" />
              <img
                className="pt-img3 animate-rotate"
                src={animateRotate.src}
                alt=""
              />
            </div>
          </div>


          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature4">
                    <div className="icon-md feature-icon">
                      <img src={icon1.src} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Contact Number</h5>
                      <p>+91 989 249 8048</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature3">
                    <div className="icon-md feature-icon">
                      <img src={icon3.src} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Email Address</h5>
                      <p> info@recure.in</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="feature-container feature-bx4 feature2">
                    <div className="icon-md feature-icon">
                      <img src={icon2.src} alt="" />
                    </div>
                    <div className="icon-content">
                      <h5 className="ttr-title">Address</h5>
                      <p>1-11-222/7 First floor Sneh Sadan, Begumpet, Hyderabad -500016</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default ContactUs;
