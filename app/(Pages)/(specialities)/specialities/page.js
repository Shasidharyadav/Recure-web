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
import { MdHealthAndSafety } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiDnaLight } from "react-icons/pi";
import { TfiComments } from "react-icons/tfi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineAudit } from "react-icons/ai";
import Link from "next/link";

// import services from "./services.json";

function Specialities() {
  return (
    <>
      <div className="page-content bg-white">
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: "url(" + bnrImg1.src + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Specialities</h1>
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
                      Specialities
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
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={80}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Back and Neck Pain</h3>
<p>
  Specialized treatments for spine-related issues to restore mobility, reduce pain, and improve quality of life.
</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature2"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Post-Surgical Rehabilitation</h3>
<p>
  Recovery programs designed to help individuals regain mobility and functionality following various orthopedic surgeries.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature3"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Arthritis Management</h3>
<p>
  Techniques to manage pain and improve mobility through low-impact exercises, meditation, and lifestyle adjustments.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature2"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Fracture and Dislocation Recovery</h3>
<p>
  Rehabilitation therapies to restore function and help individuals overcome challenges and reclaim independence.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature3"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Stroke Rehabilitation</h3>
<p>
  Customized programs to regain function and independence through personalized treatment plans.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Parkinson’s Disease Management</h3>
<p>
  Exercises to enhance mobility and strength, empowering individuals to improve physical capability and well-being.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Multiple Sclerosis Therapy</h3>
<p>
  Symptom management and functional improvement strategies to address physical, emotional, and practical challenges.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Spinal Cord Injury Rehabilitation</h3>
<p>
  Intensive therapy for recovery and adaptation through a comprehensive approach fostering resilience and positive change.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Injury Prevention and Management</h3>
<p>
  Techniques to prevent sports-related injuries through targeted exercises, proper techniques, and balanced approaches.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Post-Operative Sports Rehabilitation</h3>
<p>
  Structured programs to ensure a safe return to sports, prioritizing well-being and gradual reintegration.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Performance Enhancement</h3>
<p>
  Training programs to optimize athletic performance through comprehensive physical fitness and mental resilience.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Pregnancy-Related Pain</h3>
<p>
  Management of discomfort during pregnancy through personalized guidance, gentle exercises, and stress-reducing techniques.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Postpartum Rehabilitation</h3>
<p>
  Recovery programs for post-birth health, addressing physical, emotional, and psychological needs through tailored exercises and counseling.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Pelvic Floor Dysfunction</h3>
<p>
  Treatment for incontinence and pelvic pain through medical interventions, lifestyle changes, and holistic therapies.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Osteoporosis Management</h3>
<p>
  Exercises to strengthen bones and prevent fractures, safeguarding mobility and independence.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      {/* <AiOutlineAudit
                        
                        style={{ color: "rgb(2, 2, 136)" }}
                      /> */}
                      <img
                        src="https://www.pyramidsglobal.com/wp-content/uploads/2022/10/psychiatry-icon.png.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Fall Prevention</h3>
<p>
  Strategies to reduce the risk of falls through home modifications, personalized assessments, and community support.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Mobility Enhancement</h3>
<p>
  Exercises to maintain and improve movement, counteracting age-related mobility decline.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Chronic Disease Management</h3>
<p>
  Support for conditions like arthritis and osteoporosis through compassionate care and innovative therapies.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                      <img
                        src="https://www.pyramidsglobal.com/wp-content/uploads/2022/10/pediatric-icon.png.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Cognitive Function Exercises</h3>
<p>
  Programs to maintain mental acuity, fostering clarity, focus, and problem-solving abilities.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Virtual Consultations</h3>
<p>
  Online assessments and treatment plans to empower proactive health management.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Remote Monitoring</h3>
<p>
  Regular follow-ups to track progress and provide valuable insights for informed adjustments.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Home Exercise Programs</h3>
<p>
  Personalized exercises you can do at home, tailored to individual needs for meaningful health improvements.
</p>

                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Real-Time Guidance</h3>
<p>
  Interactive sessions with physiotherapists for personalized rehabilitation and recovery.
</p>
                  </div>
                </div>
              </div> 
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Workstation Assessment</h3>
<p>
  Evaluations to optimize your work environment, enhancing workflow and job satisfaction.
</p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Posture Correction</h3>
<p>
  Techniques to improve posture and prevent pain through mindful body alignment and targeted exercises.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Movement Analysis</h3>
<p>
  Assessing and correcting biomechanical issues to restore mobility and strength.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Customized Ergonomic Solutions</h3>
<p>
  Personalized recommendations for better ergonomics, promoting physical comfort and productivity.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Pain Management</h3>
<p>
  Techniques to alleviate pain and discomfort, fostering well-being and empowerment.
</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Mobility Maintenance</h3>
<p>
  Exercises to preserve movement and function, promoting independence and quality of life.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Breathing Exercises</h3>
<p>
  Improving respiratory function and comfort through healthy breathing habits and techniques.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Supportive Care</h3>
<p>
  Emotional and physical support for patients and families, fostering resilience and hope.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Home Visits</h3>
<p>
  Personalized treatments in the comfort of your home, prioritizing well-being without travel inconvenience.
</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Convenient Scheduling</h3>
<p>
  Flexible timings to suit your needs, supporting a harmonious work-life balance.
</p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Comprehensive Care</h3>
<p>
  All the benefits of clinic-based therapy at home, fostering ease, relaxation, and health improvements.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Family Involvement</h3>
<p>
  Educating family members to assist in care, enhancing support and easing the caregiver burden.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Experienced Team</h3>
<p>
  Our physiotherapists are highly qualified and experienced, providing tailored, evidence-based treatments.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Patient-Centred Care</h3>
<p>
  We tailor treatments to meet your individual needs, empowering active health management.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Advanced Techniques</h3>
<p>
  Utilizing the latest evidence-based practices for meaningful, lasting change.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">State-of-the-Art Facility</h3>
<p>
  Equipped with modern physiotherapy equipment, delivering effective and tailored treatments.
</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  style={{ height: "26rem" }}
                  className="feature-container feature-bx2 feature1"
                >
                  <div className="feature-box-xl mb-20">
                    <span className="icon-cell">
                    <MdHealthAndSafety
                        size={70}
                        style={{ color: "rgb(2, 2, 136)" }}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                  <h3 className="ttr-title">Holistic Approach</h3>
<p>
  Focusing on overall well-being, addressing root causes for sustainable progress towards optimal health.
</p>
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

export default Specialities;
