import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  const centerModedata = [
    {
      img: "https://r1imghtlak.mmtcdn.com/9958f490124511e9abea0242ac110002.jpg?&output-quality=75&output-format=jpg",
      title: "Plush In-house Pool",
      subtitle:
        "Welcoming your furry friends with open arms, the hotel is a perfect spot for a full family vacation.",
    },
    {
      img: "https://r1imghtlak.mmtcdn.com/98b6b130220911e8870b0a4cef95d023.jpg?&output-quality=75&output-format=jpg",
      title: "Al-fresco Dining Experience",
      subtitle:
        "Welcoming your furry friends with open arms, the hotel is a perfect spot for a full family vacation.",
    },
    {
      img: "https://r1imghtlak.mmtcdn.com/feca864a6dd311ebb4270242ac110005.jpg?&output-quality=75&output-format=jpg",
      title: "Pet Friendly Hotel",
      subtitle:
        "Welcoming your furry friends with open arms, the hotel is a perfect spot for a full family vacation.",
    },
    {
      img: "https://r1imghtlak.mmtcdn.com/9958f490124511e9abea0242ac110002.jpg?&output-quality=75&output-format=jpg",
      title: "Engaging Games at the Play Area",
      subtitle:
        "Welcoming your furry friends with open arms, the hotel is a perfect spot for a full family vacation.",
    },
  ];
  const settings = {
    centerMode: true,
    centerPadding: "200px", // Adjust padding as needed
    slidesToShow: 3, // Show 3 slides to see the effect on the sides
    focusOnSelect: true,
    dots: false,
    infinite: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // 3000ms = 3 seconds between slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px", // Adjust for smaller screens
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px", // Smaller padding for mobile
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="" id="center-mode-img">
      <Slider {...settings}>
        {centerModedata.map((i, j) => (
          <div>
            <img src={i.img} alt="slide1" />
            <p className="image-title">{i.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
