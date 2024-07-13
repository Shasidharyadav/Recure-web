"use client";

import React, { Component } from "react";
// import {Link} from 'react-router-dom';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// // Fonts
import "@/app/vendor/line-awesome/css/line-awesome.min.css";
import "@/app/vendor/font-awesome/css/all.min.css";
import "@/app/vendor/themify/themify-icons.css";

// StyleSheet
import "@/app/App.scss";

// Elements
import AboutSection from "@/app/markup/elements/about";
import LatestNewsSection from "@/app/markup/elements/latest-news-slider";
import FeatureSection3 from "@/app/markup/elements/feature-section3";
import TeamSection from "@/app/markup/elements/team";
import TestimonialSection from "@/app/markup/elements/testimonial";

// Import Images
import bnrImg1 from "@/app/images/banner/img1.jpg";
import waveBlue from "@/app/images/shap/wave-blue.png";
import circleDots from "@/app/images/shap/circle-dots.png";
import plusBlue from "@/app/images/shap/plus-blue.png";
import Link from "next/link";

class AboutUs extends Component {
  render() {
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
                  <h1>About Us</h1>
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
                        About Us
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={waveBlue.src} alt="" />
              <img className="pt-img2 animate2" src={circleDots.src} alt="" />
              <img
                className="pt-img3 animate-rotate"
                src={plusBlue.src}
                alt=""
              />
            </div>
          </div>

          <AboutSection />

          <div
            style={{ marginLeft: "auto", marginRight: "auto", width: "90%" }}
            className="head-text mb-30"
          >
            <h1 className="title mb-15">Why Recure?</h1>
            <p style={{ paddingBottom: "2rem" }} className="mb-0">
              At Recure Physiotherapy, we offer a unique blend of personalized care and advanced medical technology to ensure you receive the highest standard of treatment. Our holistic approach encompasses physical, mental, and emotional well-being, providing comprehensive care that addresses all aspects of your health. <br/>Here’s why you should choose Recure:
            </p>
            <ul>
              <li><b>Personalised Care:</b> Customized treatment plans tailored to your specific needs and goals.</li>
              <li><strong>State-of-the-Art Facility:</strong> Equipped with the latest physiotherapy equipment and technology.</li>
              <li><strong>Experienced Team:</strong> Knowledgeable and skilled physiotherapists committed to continuous education and innovation.</li>
              <li><strong>Holistic Approach:</strong> Comprehensive care that includes physical therapy, mental health support, and lifestyle modifications.</li>
              <li><strong>Compassionate Environment:</strong> A friendly and supportive atmosphere to keep you motivated and comfortable.</li>
            </ul>
            <p>
              Choosing Recure means opting for a partner dedicated to your overall well-being and empowering you to achieve optimal health. Let us guide you through your journey to wellness with compassion and expertise.
            </p>
            
            <h1 className="title mb-15">MISSION</h1>
            <p style={{ paddingBottom: "2rem" }} className="mb-0">
              Our mission at Recure Physiotherapy is to empower individuals with the tools, knowledge, and inspiration to unlock their full potential and achieve optimal health. We are committed to providing personalized care that transcends physical rehabilitation, nurturing the mind, body, and spirit. <br/>Here’s our mission:
            </p>
            <ul>
              <li><strong>Empowerment:</strong> Providing tools, knowledge, and inspiration to help individuals achieve optimal health.</li>
              <li><strong>Personalized Care:</strong> Delivering care that transcends physical rehabilitation, nurturing the mind, body, and spirit.</li>
              <li><strong>Holistic Approach:</strong> Integrating movement, mindfulness, and ancient wisdom to elevate quality of life.</li>
              <li><strong>Compassionate Guidance:</strong> Offering unwavering determination and compassion on the journey to wellness.</li>
            </ul>

            <h1 className="title mb-15">VISION</h1>
            <p style={{ paddingBottom: "2rem" }} className="mb-0">
              Our vision at Recure Physiotherapy is to revolutionize the field of physiotherapy by creating a sanctuary where traditional techniques and advanced medical technology harmoniously intertwine. We aspire to be a beacon of hope and resilience, fostering a transformative journey for each individual. <br/>Here’s our vision:
            </p>
            <ul>
              <li><strong>Revolutionizing Physiotherapy:</strong> Creating a sanctuary that combines traditional techniques with advanced medical technology.</li>
              <li><strong>Beacon of Hope:</strong> Fostering a transformative journey for each individual, inspiring resilience and strength.</li>
              <li><strong>Redefining Possibilities:</strong> Continuously pushing the boundaries to help patients reclaim their vitality and live fulfilling lives.</li>
              <li><strong>Accessible Care:</strong> Ensuring physiotherapy is accessible to all, breaking down barriers to care.</li>
            </ul>

            <h1 className="title mb-15">QUALITY POLICY</h1>
            <p style={{ paddingBottom: "2rem" }} className="mb-0">
              Recure Physiotherapy is committed to delivering the highest standard of care through a holistic, patient-centric approach. Our quality policy is anchored in the following principles:
            </p>
            <ul>
              <li><strong>Personalized Treatment Plans:</strong> Crafting treatment plans tailored to each patient's unique needs, addressing all aspects of their well-being.</li>
              <li><strong>Continuous Improvement:</strong> Staying at the forefront of the latest advancements in physiotherapy through continuous education and training.</li>
              <li><strong>Compassionate Care:</strong> Providing empathetic support that addresses the physical, emotional, and mental well-being of our patients.</li>
              <li><strong>Comprehensive Services:</strong> Offering a wide range of services to meet diverse health concerns, ensuring holistic care.</li>
              <li><strong>Patient Empowerment:</strong> Educating and empowering patients with knowledge and self-management strategies for long-term health.</li>
              <li><strong>Safety and Effectiveness:</strong> Adhering to the highest standards of safety and effectiveness in all treatments.</li>
            </ul>
            <p>
              By adhering to these principles, Recure Physiotherapy ensures that every patient receives exceptional care that supports their journey to optimal health and well-being. Our commitment to quality and excellence reflects our dedication to helping you achieve your health goals.
            </p>
          </div>

          <TestimonialSection />

          <LatestNewsSection />
        </div>
      </>
    );
  }
}

export default AboutUs;
