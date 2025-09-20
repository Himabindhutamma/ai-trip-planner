import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Flight/Flight.css";
import Delhiagra from "../../assets/Delhiagra.png";
import Srinagar from "../../assets/Srinagar.png";
import Bangalore from "../../assets/Bangalore.png";
import mecca from "../../assets/mecca.jpg";
import Shimla from "../../assets/Shimla.png";

const Topdestinations = () => {
  const dataDigitalBestSeller = [
    {
      id: 1,
      title: "Delhi and NCR, India",
      price: "$59.99",
      linkImg: Delhiagra,
    },
    {
      id: 2,
      title: "Srinagar, India",
      price: "$59.99",
      linkImg: Srinagar,
    },
    {
      id: 3,
      title: "Bangalore, India",
      price: "$59.99",
      linkImg: Bangalore,
    },
    {
      id: 4,
      title: "Mauritius, Mauritius",
      price: "$59.99",
      linkImg: mecca,
    },
    {
      id: 5,
      title: "Shimla, India",
      price: "$59.99",
      linkImg: Shimla,
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container" id="topdestination">
        <div>
          {/* <h1 className="head-text">Top Destinations</h1> */}
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
export default Topdestinations;
