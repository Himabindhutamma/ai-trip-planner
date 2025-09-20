import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Flight/Flight.css";
import ReykjavikIceland from "../../assets/ReykjavikIceland.png";
import KyotoJapan from "../../assets/KyotoJapan.png";
import MelbourneAustralia from "../../assets/MelbourneAustralia.png";
import VancouverCanada from "../../assets/VancouverCanada.png";
import Newyork from "../../assets/Newyork.png";

const WomenTravel = () => {
  const dataDigitalBestSeller = [
    {
      id: 1,
      title: "Reykjavik, Iceland",
      linkImg: ReykjavikIceland,
    },
    {
      id: 2,
      title: "Kyoto, Japan",
      linkImg: KyotoJapan,
    },
    {
      id: 3,
      title: "Melbourne, Australia",
      linkImg: MelbourneAustralia,
    },
    {
      id: 4,
      title: "Amsterdam, Netherlands",
      linkImg: Newyork,
    },
    {
      id: 5,
      title: "Vancouver, Canada",
      linkImg: VancouverCanada,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div>
          {/* <h1 className="head-text">Women Travel Locations</h1> */}
          {/* <h3 className="subhead-text">Choose Your Next Destination</h3> */}
        </div>
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card">
              <div className="card-top">
                <img src={item.linkImg} alt={item.title} />
                <h1 className="head-text">{item.title}</h1>
              </div>
              <div className="card-bottom">
                {/* <h3 className="subhead-text">{item.price}</h3> */}
                <button className="viewdetails-button">View Details</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default WomenTravel;
