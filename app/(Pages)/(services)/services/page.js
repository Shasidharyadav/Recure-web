"use client";

import React from "react";
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/App.scss";
import FeatureSection3 from "@/app/markup/elements/feature-section3";
import TeamSection from "@/app/markup/elements/team";
import LatestNewsSection from "@/app/markup/elements/latest-news-slider";
import bnrImg1 from "@/app/images/banner/img1.jpg";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/plus-blue.png";
//react icons import
import { GoChecklist } from "react-icons/go";
import { MdHealthAndSafety } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiDnaLight } from "react-icons/pi";
import { TfiComments } from "react-icons/tfi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineAudit } from "react-icons/ai";

import services from "./services.json";
import Link from "next/link";

function Services() {
  return (
    <>
      <div className="">
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: "url(" + bnrImg1.src + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Services</h1>
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
                    <li className="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue.src} alt="" />
            <img className="pt-img2 animate2" src={circleDots.src} alt="" />
            <img className="pt-img3 animate-rotate" src={plusBlue.src} alt="" />
          </div>
        </div>

        <section className="section-area section-sp1">
        <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature1">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <MdHealthAndSafety

                        size={80}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Musculoskeletal Physiotherapy</h3>
                    <p>
                    Addressing pain and dysfunction in muscles, joints, and bones.</p>
                    <ul>
                    <li> - Back and Neck Pain</li>
                    <li> - Post-Surgical Rehabilitation</li>
                    <li> - Arthritis Management</li>
                    <li> - Fracture and Dislocation Recovery</li>
                    </ul>
                    
                    <Link
                      href={`/services/musculoskeletal-physiotherapy`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature2">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety

                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Neurological Physiotherapy </h3>
                    <p>
                    Focused on improving the quality of life for individuals with neurological disorders.</p>
                    <ul>
                    <li> - Stroke Rehabilitation</li>
                    <li> - Parkinson’s Disease Management</li>
                    <li> - Multiple Sclerosis Therapy</li>
                    <li> - Spinal Cord Injury Rehabilitation</li>
                    </ul>
                    
                    <Link
                      href={`/services/neurological-physiotherapy`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature2">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Women's Health Physiotherapy</h3>
                    <p>
                    Specialised care for women’s health issues.                    </p>                  
                    <ul>
                    <li> - Pregnancy-Related Pain</li>
                    <li> - Postpartum Rehabilitation</li>
                    <li> - Pelvic Floor Dysfunction</li>
                    <li> - Osteoporosis Management</li>
                    </ul>
                    <Link
                      href={`/services/womens-health-physiotherapy`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature3">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Geriatric Rehabilitation </h3>
                    <p>
                    Dedicated to improving the health and independence of older adults.
                    </p>
                    <ul>
                    <li> - Fall Prevention</li>
                    <li> - Mobility Enhancement</li>
                    <li> - Chronic Disease Management</li>
                    <li> - Cognitive Function Exercises</li>
                    </ul>
                    <Link
                      href={`/services/geriatric-rehabilitation`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature3">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Palliative Care Physiotherapy</h3>
                    <p>
                   Improving workplace and daily life ergonomics. </p>                  <ul>
                    <li> - Pain Management</li>
                    <li> - Mobility Maintenance</li>
                    <li> - Breathing Exercises</li>
                    <li> - Supportive Care</li>
                    </ul>
                    <Link
                      href={`/services/palliative-care-physiotherapy`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature3">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Ergonomic and Biomechanical Correction</h3>
                    <p>
                   Improving workplace and daily life. </p>                  <ul>
                    <li> - Workstation Assessment</li>
                    <li> - Posture Correction</li>
                    <li> - Movement Analysis</li>
                    <li> - Customised Ergonomic Solutions</li>
                    </ul>
                    <Link
                      href={`/services/ergonomic-and-biomechanical-correction`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature3">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Physiotherapy at Home</h3>
                    <p>
                    Bringing expert care to your doorstep.
                    </p>                  
                    <ul>
                    <li> - Home Visits</li>
                    <li> - Convenient Scheduling</li>
                    <li> - Comprehensive Care</li>
                    <li> - Family Involvement</li>
                    </ul>
                    <Link
                      href={`/services/physiotherapy-at-home`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature1">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Telerehabilitation</h3>
                    <p>
                    Convenient physiotherapy services from the comfort of your home.
                    </p>
                    <ul>
                    <li> - Virtual Consultations</li>
                    <li> - Remote Monitoring</li>
                    <li> - Home Exercise Programs</li>
                    <li> - Real-Time Guidance</li>
                    </ul>
                    <Link
                      href={`/services/telerehabilitation`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx2 feature3">
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="ttr-title">Sports Rehabilitation</h3>
                    <p>
                    Helping athletes recover from injuries and improve performance.  </p>                  <ul>
                    <li> - Injury Prevention and Management</li>
                    <li> - Post-Operative Sports Rehabilitation</li>
                    <li> - Performance Enhancement</li>
                    </ul>
                    <Link
                      href={`/services/sports-rehabilitation`}
                      className="btn btn-primary light"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <FeatureSection3 /> */}

        {/* <TeamSection /> */}

        <LatestNewsSection />
      </div>
    </>
  );
}

export default Services;
