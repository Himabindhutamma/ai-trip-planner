import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenterMode from "../../../Components/CenterMode";
import Modal from "../../../Components/Modal";
import Discover from "../../../assets/Discover.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}
const DiscoverBestLuxary = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const discover = [
    {
      img: Discover,
      title: "Plush In-house Pool",
    },
    {
      img: Discover,
      title: "Al-fresco Dining Experience",
    },
    {
      img: Discover,
      title: "Engaging Games at the Play Area",
    },
    {
      img: Discover,
      title: "Pet Friendly Hotel",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          //   slidesToScroll: 3,
          //   infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          //   slidesToScroll: 2,
          //   initialSlide: 2,
          //   infinite: true,
          //   dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="amenities gaptop16">
        <h4 className="amenities-title">Discover the Best of Luxury</h4>
      </div>
      <div className="best-luxuary-slider">
        <Slider {...settings}>
          {discover.map((i, j) => (
            <div className="" onClick={toggleModal}>
              <div className="discover-card">
                <div className="discover-card-wrapper">
                  <img className="discover-card-img" src={i.img} />
                  <p class="discover-card--title">{i.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Modal
          show={showModal}
          onClose={toggleModal}
          centermodalcontent={"center-modal-content"}
          centermodaloverlay={"center-modal-overlay"}
        >
          <CenterMode />
        </Modal>
      </div>
    </>
  );
};
export default DiscoverBestLuxary;
