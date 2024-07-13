"use client";

import React, { Component } from "react";
import Slider from "react-slick";

// Import Images
import lingBg2 from "../../images/background/line-bg2.png";
import animate1 from "../../images/shap/trangle-orange.png";
import animate2 from "../../images/shap/square-dots-orange.png";
import animateRotate from "../../images/shap/line-circle-blue.png";
import animateWave from "../../images/shap/wave-blue.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
// import testPic3 from "../../images/testimonials/pic3.jpg";
// import testPic4 from "../../images/testimonials/pic4.jpg";
// import testPic5 from "../../images/testimonials/pic5.jpg";
import blogGridPic1 from "../../images/blog/grid/p1.jpg";
import blogGridPic2 from "../../images/blog/grid/p2.jpg";
// import blogGridPic3 from "../../images/blog/grid/p3.png";
import Link from "next/link";
// import blogGridPic4 from "../../images/blog/grid/pic4.jpg";
// import blogGridPic5 from "../../images/blog/grid/pic5.jpg";

// Team Content
const content = [
  {
    thumb: blogGridPic1,
    authorPic: testPic1,
    author: "Dr Manisha Moorjani",
    title: "Revolutionising Physiotherapy: Telerehabilitation with Recure Physiotherapy",
    slug: "revolutionising-physiotherapy-telerehabilitation-with-recure-physiotherapy",
    date: "13 July 2024",
  },
  {
    thumb: blogGridPic2,
    authorPic: testPic2,
    author: "Dr Manisha Moorjani",
    title:"Recure Physiotherapy: Your Path to Recovery with Heal, Empower, and Sustain",
    slug: "recure-physiotherapy-your-path-to-recovery-with-heal-empower-and-sustain",
    date: "14 July 2024",
  }
  // Additional items can be added here if needed
];

const NewsItem = ({ item }) => {
  return (
    <div className="slider-item">
      <div className="blog-card">
        <div className="post-media">
          <div style={{ height: "15rem" }} href={`/blogs/${item.slug}`}>
            <img src={item.thumb.src} alt="" />
          </div>
        </div>
        <div className="post-info">
          <ul className="post-meta">
            <li className="author">
              <div href={`/blogs/${item.slug}`}>
                <img src={item.authorPic.src} alt="" />
                {item.author}
              </div>
            </li>
            <li className="date">
              <i className="far fa-calendar-alt"></i>
              {item.date}
            </li>
          </ul>
          <h5 className="post-title">
            <div href={`/blogs/${item.slug}`}>{item.title}</div>
          </h5>
          <Link
            href={`/blogs/${item.slug}`}
            className="btn btn-outline-primary btn-sm"
          >
            Read More <i className="btn-icon-bx fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2, // Adjust this if you want to show more or fewer items at a time
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1191,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

class LatestNewsSection extends Component {
  render() {
    return (
      <>
        <section
          className="section-area section-sp1 blog-area"
          style={{
            backgroundImage: "url(" + lingBg2.src + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Latest News</h6>
              <h2 className="title">Our Latest News</h2>
            </div>

            <Slider
              {...settings}
              className="tt-slider blog-slide slider-sp0 slick-arrow-none"
            >
              {content.map((item, index) => (
                <NewsItem key={index} item={item} />
              ))}
            </Slider>
          </div>

          <img className="pt-img1 animate1" src={animate1.src} alt="" />
          <img className="pt-img2 animate2" src={animate2.src} alt="" />
          <img
            className="pt-img3 animate-rotate"
            src={animateRotate.src}
            alt=""
          />
          <img className="pt-img4 animate-wave" src={animateWave.src} alt="" />
        </section>
      </>
    );
  }
}

export default LatestNewsSection;
