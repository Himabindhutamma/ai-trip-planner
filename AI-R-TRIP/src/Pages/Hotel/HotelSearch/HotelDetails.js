import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HotelDetails.css";
import Modal from "../../../Components/Modal";
import ReadMore from "../../../Components/ReadMore";
import CenterMode from "../../../Components/CenterMode";
import ImageCarousel from "../../../Components/ImageCarousel";
import ScrollSpyTabs from "../../../Components/ScrollspyTabs";

import AboutHotel from "./AboutHotel";
import Amenities from "./Amenities";
import DiscoverBestLuxary from "./DiscoverBestLuxary";

import imagesData from "./images.json";
import abouthotelData from "./HotelJson/abouthotel.json";

const HotelDetails = () => {
  const [images, setImages] = useState([]);
  const [gusetImages, setGuestImages] = useState([]);
  const [roomtype, setRoomType] = useState([]);
  const [abouthotel, setAboutHotel] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  console.log("roomtype", roomtype);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };
  const options = ["Option 1", "Option 2", "Option 3"];

  const roomOptions = [
    {
      title: "One Bedroom Hill View, 1 Bedroom Apartment, 1 Queen",
      subheading: "Starting @ ₹9,000",
    },
    {
      title: "One-bedroom patio apartment with garden view",
      subheading: "Starting @ ₹9,000",
    },
    {
      title: "One Bedroom Hill View, 1 Bedroom Apartment, 2 Queen",
      subheading: "Starting @ ₹9,000",
    },
    {
      title: "Two Bedroom Hill View, 2 Bedroom Apartment",
      subheading: "Starting @ ₹9,000",
    },
  ];

  const slides = [
    {
      src: "https://r1imghtlak.mmtcdn.com/d97b89a6582411e8aed002755708f0b3.jfif?downsize=377:200&crop=377:200",
      alt: "Image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "Image 2 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
  ];
  const sectionsData = [
    {
      id: "section1",
      title: "Swimming Pool",
      content: "Content about the swimming pool...",
    },
    {
      id: "section2",
      title: "Room",
      content: "Content about the room...",
    },
    {
      id: "section3",
      title: "Reception",
      content: "Content about the reception...",
    },
  ];
  const rules = [
    "Couple, Bachelor RulesCouple Friendly Unmarried couples/guests with Local IDs are allowed.",
    "Pets are allowed",
    "Optional : Fee for buffet breakfast: approximately INR 1300 for adults and INR 650 for children|Fee for in-room wireless internet: INR 500 per night (2-device limit, rates may vary)|Pet deposit: INR 1500 per stay|Pet fee: INR 1500 per pet, per stay|Early check-in is available for a fee (subject to availability)|Late check-out is available for a fee (subject to availability)",
    "Extra-person charges may apply and vary depending on property policy|Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges|Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed|The name on the credit card used at check-in to pay for incidentals must be the primary name on the guestroom reservation|This property accepts credit cards, debit cards, mobile payments, and cash|Mobile payment options include: Google Pay and Paytm|Cashless transactions are available|This property affirms that it follows the cleaning and disinfection practices of Commitment to Clean (Marriott)|Please note that cultural norms and guest policies may differ by country and by property; the policies listed are provided by the property",
  ];

  const sampleText =
    "A blend of luxury & utility, Lakeside Chalet Marriott Executive Apartments provides a lavish stay at a convenient location, with ultra-modern amenities and exquisite apartments.";

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    // Simulate fetching images from JSON
    setImages(imagesData.swimmingData);
    setGuestImages(imagesData.guestImages);
    setAboutHotel(abouthotelData.abouthotel);
    setRoomType(imagesData.roomtypes.roomtype);
  }, []);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  // Show the first image only
  const firstImage = images[0];
  const firstGuestImage = gusetImages[0];
  const remainingGuestImg = gusetImages.length - 1;
  const remainingImagesCount = images.length - 1; // Count of remaining images

  return (
    <>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container">
          <div className="hotel-details">
            <h1 class="hotel-name">
              Lakeside Chalet Marriott Executive Apartments
            </h1>
            <div class="row">
              <div class="col-sm-12 col-md-8">
                <div class="row">
                  <div class="col-12 col-sm-7 col-md-7">
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <Link to="/gallery">
                        <img
                          className="hotel-img"
                          src={firstImage.url}
                          alt={`Image ${firstImage.id}`}
                          style={{ cursor: "pointer" }}
                        />
                        {/* Overlay text showing the remaining number of images */}
                        {remainingImagesCount > 0 && (
                          <span className="image-count">
                            +{remainingImagesCount} property photos
                          </span>
                        )}
                      </Link>
                    </div>
                  </div>
                  <div class="col-12 col-sm-5 col-md-5">
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        height: "160px",
                      }}
                    >
                      <Link to="/gallery">
                        <img
                          className="hotel-img"
                          src={firstGuestImage.url}
                          alt={`Image ${firstGuestImage.id}`}
                          style={{ cursor: "pointer" }}
                        />
                        {/* Overlay text showing the remaining number of images */}
                        {remainingGuestImg > 0 && (
                          <span className="image-count">
                            +{remainingGuestImg} property photos
                          </span>
                        )}
                      </Link>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        height: "160px",
                        marginTop: "10px",
                      }}
                    >
                      <Link to="/gallery">
                        <img
                          className="hotel-img"
                          src={firstGuestImage.url}
                          alt={`Image ${firstGuestImage.id}`}
                          style={{ cursor: "pointer" }}
                        />
                        {/* Overlay text showing the remaining number of images */}
                        {remainingGuestImg > 0 && (
                          <span className="image-count">
                            +{remainingGuestImg} property photos
                          </span>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="hotel-info gaptop16">
                  <p class="hotel-info__title">Entire Apartment</p>
                  <p class="hotel-info__subtitle">
                    Luxury 2BHK apartment with a spa, pool &amp; a restaurant
                  </p>
                  <ul class="gust-info  gaptop16">
                    <li class="gust-info__item">
                      <span class="gust-info__itemIcon">
                        <i class="fa-regular fa-user"></i>
                        <i class="fa-regular fa-user"></i>
                      </span>
                      <div class="gust-info__itemDesc">
                        <p class="gust-info__itemTitle">Sleeps 4 guests</p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <ReadMore
                      text={sampleText}
                      maxLength={150}
                      children={<AboutHotel />}
                    />
                  </div>
                </div>
                <ul className="propertytags gaptop16">
                  <li className="propertytags-item" onClick={toggleModal}>
                    <span className="propertytags-item-img"></span>
                    <span class="propertytags-itemText">
                      Property Highlights
                    </span>
                  </li>
                  <li className="propertytags-item" onClick={toggleModal}>
                    <span className="propertytags-item-img"></span>
                    <span class="propertytags-itemText">
                      Activities & Nearby Attractions
                    </span>
                  </li>
                  <Modal show={showModal} onClose={toggleModal}>
                    <AboutHotel />
                  </Modal>
                </ul>
                <Amenities />
                <DiscoverBestLuxary />
              </div>
              <div class="col-sm-12 col-md-4">
                <div className="bking-container">
                  <div className="bkg-card">
                    <p className="bkngOption__title">
                      One Bedroom Hill View, 1 Bedroom Apartment, 1 Queen
                    </p>
                    <p class="font16 blackText appendTop5">Fits 3 Adults</p>
                    <ul>
                      <li>No meals included</li>
                      <li>Free Stay & Breakfast for Kids below 12 yrs age</li>
                      <li>
                        Complimentary glass of Beer per person per day in the
                        Restaurant.
                      </li>
                      <li>Non-Refundable</li>
                    </ul>
                    <div className="">
                      <p className="">
                        <span>Per Night: </span>
                      </p>
                      <div className="makeRelative hintBoxWrapper">
                        <span className="font28 blackText latoBlack">
                          ₹ 23,000
                        </span>
                        <span className="font16 appendLeft5">
                          + ₹ 4,140 taxes &amp; fees
                        </span>
                      </div>
                    </div>
                    <div>
                      <button className="bkg-btn">BOOK THIS NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hotel-details fooddetails gaptop16">
            <h1 class="hotel-name">Food & Dining</h1>
            <div className="row">
              <div className="col-12 col-md-4">
                <div>
                  <p className="food">
                    Meal options are provided at the property
                  </p>
                  <ul className="food__list">
                    <li>Restaurant available</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div>
                  <p className="food">Additional information</p>
                  <ul className="food__list">
                    <li>Outside food is not allowed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hotel-details roomtype gaptop16">
            <div className="room-dropdown">
              <h4 onClick={toggleDropdown} className="dropdown-toggle">
                {" "}
                4 Room Types <i className="fa-solid fa-angle-down"></i>
              </h4>

              {isOpen && (
                <ul className="room-dropdown-menu">
                  {roomOptions.map((option, index) => (
                    <li
                      key={index}
                      className="room-dropdown-item"
                      onClick={() => handleOptionClick(option.title)}
                    >
                      <p className="room-head">{option.title}</p>
                      <p className="room-sub-head">{option.subheading}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {roomtype.map((roomtype, index) => (
              <div className="room-select-card">
                <div className="row">
                  <div className="col-12 col-md-3">
                    <div className="room-select-card-image">
                      <ImageCarousel data={slides} />
                      <p className="room-select-head">{roomtype.roomtitle}</p>
                      <div className="room-select-div">{roomtype.roomsize}</div>
                      <ul className="room-select-ul">
                        {roomtype.roomaminities.map((i, j) => (
                          <li key={j}>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-9">
                    {roomtype.roomstay.map((item, index) => (
                      <div className="roomtype-card">
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <div className="room-ul">
                              <h5>{item.title}</h5>
                              <ul>
                                {item.includes.map((i, j) => (
                                  <li>
                                    <p class="rm__list">{i}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="room-price-tax">
                              <div className="">
                                <p className="room-price">{item.price}</p>
                              </div>
                              <div className="">
                                <p className="room-taxes">
                                  {" "}
                                  <span>{item.taxes}</span> taxes &amp; fees
                                  <span className="lowText"> / Per Night</span>
                                </p>
                              </div>
                              <button className="slkt-btn">
                                <span>SELECT ROOM</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hotel-details gaptop16">
            <div className="amenities">
              <h4 className="amenities-title">Property Rules</h4>
            </div>
            <div className="check-in-out">
              <span>Check-in: 3 PM</span>
              <span>Check-out: 12 PM</span>
            </div>
            <ul className="rules">
              {rules.map((i, j) => (
                <li className="rules_item">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default HotelDetails;
