import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BusDetailsData = () => {
  return <></>;
};
const BusAmenities = () => {
  const BusAmenitiesData = [
    {
      icon: "",
      amenities: "Personal TV",
    },
    {
      icon: "",
      amenities: "Water Dispenser",
    },
    {
      icon: "",
      amenities: "Water Bottle",
    },
    {
      icon: "",
      amenities: "Blankets",
    },
    {
      icon: "",
      amenities: "Charging Point",
    },
    {
      icon: "",
      amenities: "Water Dispenser",
    },
    {
      icon: "",
      amenities: "Water Bottle",
    },
    {
      icon: "",
      amenities: "Blankets",
    },
    {
      icon: "",
      amenities: "Charging Point",
    },
  ];
  return (
    <>
      <p>Bus Amenities</p>
      <ul className="amenities-list">
        {BusAmenitiesData.map((i, j) => (
          <li>
            <span></span>
            <span>{i.amenities}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
const BusPhotos = () => {
  const busphotosData = [
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/SCALED/20470/1746/GW/DL/iX3CJy.jpeg",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/SCALED/20470/1746/ST/DL/ir45Ag.jpeg",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/SCALED/20470/1746/GW/DL/iX3CJy.jpeg",
    },
    {
      img: "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/SCALED/20470/1746/GW/DL/iX3CJy.jpeg",
    },
  ];

  return (
    <>
      <div className="row">
        {busphotosData.map((i, j) => (
          <div className="col-12 col-md-4">
            <div className="bus-photo-container">
              <img className="bus-photos" src={i.img} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const BusDroppingPickup = () => {
  const pickupPoints = [
    { time: "21:50", pickpoint: "Taj Hotel, taj hotel" },
    { time: "21:50", pickpoint: "Taj Hotel, taj hotel" },
    { time: "21:50", pickpoint: "Taj Hotel, taj hotel" },
    { time: "21:50", pickpoint: "Taj Hotel, taj hotel" },
  ];
  const dropPoints = [
    { time: "04:30", droppoint: "Kakani, guntur" },
    { time: "04:30", droppoint: "Kakani, guntur" },
    { time: "04:30", droppoint: "Kakani, guntur" },
    { time: "04:30", droppoint: "Kakani, guntur" },
  ];

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="pic-title">Pickup Points</p>
          <ul className="pickup-ul">
            {pickupPoints.map((i, j) => (
              <li>
                <span>
                  <span className="pickup-time">{i.time}</span>
                  <span className="pickup-point">{i.pickpoint}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <p className="pic-title">Drop Points</p>
          <ul className="pickup-ul">
            {dropPoints.map((i, j) => (
              <li>
                <span>
                  <span className="pickup-time">{i.time}</span>
                  <span className="pickup-point">{i.droppoint}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
const reviewItems = [
  {
    rating: 5,
    name: "CHIRANJEEVI DUMPALA",
    date: "19-07-2024",
    subject: "Pleasent journey.",
  },
  {
    rating: 5,
    name: "CHIRANJEEVI DUMPALA",
    date: "19-07-2024",
    subject: "Pleasent journey.",
  },
  {
    rating: 5,
    name: "CHIRANJEEVI DUMPALA",
    date: "19-07-2024",
    subject: "Pleasent journey.",
  },
  {
    rating: 5,
    name: "CHIRANJEEVI DUMPALA",
    date: "19-07-2024",
    subject: "Pleasent journey.",
  },
  {
    rating: 5,
    name: "CHIRANJEEVI DUMPALA",
    date: "19-07-2024",
    subject: "Pleasent journey.",
  },
];

const BusReviews = () => {
  return (
    <>
      <div className="rating-container">
        <div className="spacebtwn">
          <span className="rating-bus">4.7</span>
          <span className="rating-count">15 RATINGS</span>
        </div>
        <div className="spacebtwn">
          <span className="out-of">out of 5</span>
          <span className="rating-count" style={{ marginTop: "-5px" }}>
            6 REVIEWS
          </span>
        </div>
      </div>
      <Slider {...settings} style={{ marginLeft: "25px", marginTop: "20px" }}>
        {reviewItems &&
          reviewItems.map((i, index) => (
            <>
              <div className="rating-box-container">
                <span className="rating-box-slider">{i.rating}</span>
                <div className="">
                  <div className="rating-review-box">
                    <span className="reviewername">{i.name}</span>
                    <span className="review-tag-line"></span>
                    <span className="reviewername">{i.date}</span>
                  </div>
                  <div className="subj-review">{i.subject}</div>
                </div>
              </div>
            </>
          ))}
      </Slider>
    </>
  );
};
export default BusDetailsData;
export { BusPhotos, BusAmenities, BusDroppingPickup, BusReviews };
