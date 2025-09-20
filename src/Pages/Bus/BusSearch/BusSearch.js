import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BusSearch.css";
import SortingComponent from "./SortingComponent";
import BusDetails from "./BusDetail";
import MultiSelectCheckbox from "../../../Components/MultiSelectCheckbox";
import MultiSelectwithSearch from "../../../Components/MultiSelectwithSearch";
import TimeRangeSelector from "../../../Components/TimeRangeSelector";
import NoonInactive from "../../../assets/noon_inactive.png";
import NightInactive from "../../../assets/night_inactive.png";
import EveningInactive from "../../../assets/evening_inactive.png";
import MorningInactive from "../../../assets/morning_inactive.png";

const BusSearch = () => {
  const [viewBuses, setViewBuses] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const acoptions = [
    { icon: "fa-solid fa-snowflake", ac: "AC" },
    { icon: "", ac: "Non AC" },
  ];
  const seatOptions = [
    { icon: "", seater: "Sleeper" },
    { icon: "", seater: "Seater" },
  ];
  const data = [
    {
      name: "Item 1",
      price: 300,
      rating: 4.5,
      relevance: 90,
      fastest: "09hrs 20mins",
    },
    {
      name: "Item 2",
      price: 150,
      rating: 3.5,
      relevance: 80,
      fastest: "08hrs 00mins",
    },
    {
      name: "Item 3",
      price: 200,
      rating: 5.0,
      relevance: 85,
      fastest: "09hrs 20mins",
    },
    {
      name: "Item 4",
      price: 400,
      rating: 4.0,
      relevance: 95,
      fastest: "05hrs 30mins",
    },
  ];
  // Configuration for dynamic sorting buttons
  const sortingOptions = [
    { key: "relevance", label: "Relevance" },
    { key: "price", label: "Cheapest" },
    { key: "fastest", label: "Fastest" },
    { key: "cheapest", label: "Cheapest" },
    { key: "rating", label: "Rating" },
    { key: "arrival", label: "Arrival" },
    { key: "departure", label: "Departure" },
  ];

  const traveloperators = [
    {
      image: "",
      airline: "APSRTC",
      price: "(32)",
    },
    {
      image: "",
      airline: "Sri Krishna Travels",
      price: "(7)",
    },
    {
      image: "",
      airline: "Svkdt travels",
      price: "(7)",
    },
    {
      image: "",
      airline: "Rajesh Transports",
      price: "(7)",
    },
    {
      image: "",
      airline: "Morning Star Travels",
      price: "(5)",
    },
    {
      image: "",
      airline: "Shyamoli Paribahan Pvt Ltd",
      price: "(3)",
    },
  ];
  const timeRanges = [
    {
      image: MorningInactive,
      timing: "6 AM to 11 AM",
    },
    {
      image: NoonInactive,
      timing: "11 AM to 6 PM",
    },
    {
      image: EveningInactive,
      timing: "6 PM to 11 PM",
    },
    {
      image: NightInactive,
      timing: "11 PM to 6 AM",
    },
  ];
  const [items, setItems] = useState(data); // State to hold the sorted items
  const [sortConfig, setSortConfig] = useState({
    key: "relevance", // Default sorting key
    direction: "asc", // Default sorting direction
  });

  // Sorting function
  const sortItems = (key) => {
    let sortedItems = [...items];
    const direction = sortConfig.direction === "asc" ? "desc" : "asc"; // Toggle sorting direction

    // Sort the array based on the key
    sortedItems.sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    // Update the sorted items and sorting configuration
    setItems(sortedItems);
    setSortConfig({ key, direction });
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
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
  const weeklyFareItems = [
    {
      date: " 20 Sep, Fri",
    },
    {
      date: "21 Sep, Sun",
    },
    {
      date: " 22 Sep, Mon",
    },
    {
      date: " 23 Sep, Tue",
    },
    {
      date: " 24 Sep, Wed",
    },
    {
      date: " 25 Sep, Thur",
    },
    {
      date: "26 Sep, Fri",
    },
    {
      date: "27 Sep, Sat",
    },
    {
      date: "28 Sep, Sun",
    },
    {
      date: "29 Sep, Mon",
    },
    {
      date: "30 Sep, Tue",
    },
  ];

  const busOffers = {
    img: "https://s1.rdbuz.com/Images/reddeal/srptiles/webp/IND/ad/20437_Main.webp",
    busoffers: [
      {
        heading: "Top Rated",
        para: "Explore our highest rated busses on this route",
        ratedImage:
          "https://jsak.mmtcdn.com/bus_cdn_rnw/static/images/Bus/filterCarousel/top_rated_us.webp",
        style:
          "linear-gradient(to right, rgb(210, 251, 236) 0%, rgb(182, 249, 248) 100%)",
        btnstyle:
          "linear-gradient(to right, rgb(32, 161, 115) 0%, rgb(27, 132, 131) 100%)",
      },
      {
        heading: "MyDeals",
        para: "Upto ₹100 OFF on select buses",
        ratedImage:
          "https://jsak.mmtcdn.com/bus_cdn_rnw/static/images/Bus/filterCarousel/mmt_deals_us.webp",
        style:
          "linear-gradient(to right, rgb(226, 238, 255) 0%, rgb(195, 245, 255) 100%)",
        btnstyle:
          "linear-gradient(to right, rgb(0, 210, 255) 0%, rgb(58, 123, 213) 100%)",
      },
      {
        heading: "Primo",
        para: "Travel with best amenities & handpicked operators",
        ratedImage:
          "https://jsak.mmtcdn.com/bus_cdn_rnw/static/images/Bus/filterCarousel/primo_us.webp",
        style:
          "linear-gradient(to right, rgb(213, 208, 255) 0%, rgb(255, 224, 252) 100%)",
        btnstyle:
          "linear-gradient(to right, rgb(48, 35, 174) 0%, rgb(200, 109, 215) 100%)",
      },
    ],
  };
  const stopoptions = [
    {
      image: "",
      airline: "RTC Bus Stand",
      price: "(32)",
    },
    {
      image: "",
      airline: "Tirupati",
      price: "(7)",
    },
    {
      image: "",
      airline: "Tirupathi Bypass",
      price: "(2)",
    },
    {
      image: "",
      airline: "Tiruchanur",
      price: "(1)",
    },
    {
      image: "",
      airline: "Tiruchanur Road",
      price: "(1)",
    },
  ];
  const viewBusses = () => {
    console.log("viewbusses");
    setViewBuses(!viewBuses);
  };
  return (
    <>
      <div className="buses-search">
        <div className="container" id="bus-search">
          <div className="row">
            <div className="col-12 col-md-3" style={{ background: "white" }}>
              <div className="seat-type">AC</div>
              <div className="ac-nonac-toggle">
                {acoptions.map((option, index) => (
                  <button
                    key={index}
                    className={selectedOption === option.ac ? "active" : ""}
                    onClick={() => handleOptionClick(option.ac)}
                  >
                    {/* <i className={option.icon}></i> */}
                    {option.ac}
                  </button>
                ))}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div className="seat-type">Seat type</div>
                <div className="ac-nonac-toggle">
                  {seatOptions.map((option, index) => (
                    <button
                      key={index}
                      className={
                        selectedOption === option.seater ? "active" : ""
                      }
                      onClick={() => handleOptionClick(option.seater)}
                    >
                      {option.seater}
                    </button>
                  ))}
                </div>
              </div>
              <MultiSelectwithSearch
                initialVisibleCount={4}
                options={stopoptions}
                title="Pick up point - Tirupati"
              />
              <TimeRangeSelector
                timeRanges={timeRanges}
                title="Pick up time - Tirupati"
                bustime="bustime"
              />
              <MultiSelectwithSearch
                initialVisibleCount={4}
                options={traveloperators}
                title="Travel Operators"
              />
              <TimeRangeSelector
                timeRanges={timeRanges}
                title="Drop time - Guntur"
                bustime="bustime"
              />
            </div>
            <div className="col-12 col-md-9">
              <div className="bus-search-fare">
                <div className="bus-fare-search">
                  <Slider {...settings} style={{ marginLeft: "25px" }}>
                    {weeklyFareItems &&
                      weeklyFareItems.map((item, index) => (
                        <>
                          <div
                            className="weekly-bus-fare-items activeDate"
                            style={{ height: "auto", width: "80px" }}
                          >
                            <a>
                              <p class="blackFont fontSize12 appendBottom3">
                                {item.date}
                              </p>
                            </a>
                          </div>
                        </>
                      ))}
                  </Slider>
                </div>
                <div className="bus-offers-search">
                  <div className="bus-fare-offers">
                    <p>
                      <img src={busOffers.img} />
                    </p>
                  </div>
                  {busOffers.busoffers &&
                    busOffers.busoffers.map((item, index) => (
                      <div
                        className="offers-bus-text"
                        style={{
                          background: `${item.style}`,
                        }}
                      >
                        <div className="offers-bus-dtl">
                          <h2>{item.heading}</h2>
                          <p className="offers-bus-txt">{item.para}</p>
                          <button
                            className="offers-bus-btn"
                            style={{ background: `${item.btnstyle}` }}
                          >
                            See Buses{" "}
                            <i
                              className="fa-solid fa-arrow-right-long"
                              style={{ marginLeft: "14px" }}
                            ></i>
                          </button>
                        </div>
                        <span className="offers-bus-img">
                          <img src={item.ratedImage} />
                        </span>
                      </div>
                    ))}
                </div>
                <div className="bus-offers-sort">
                  <p>76 buses found</p>
                  <ul className="bus-offers-ul">
                    {sortingOptions.map((option) => (
                      <li
                        className=""
                        key={option.key}
                        onClick={() => sortItems(option.key)}
                      >
                        {option.label}
                        {sortConfig.key === option.key
                          ? sortConfig.direction === "asc"
                            ? "↑"
                            : "↓"
                          : ""}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bus-list-container">
                  <div className="bus-rtc">
                    <div className="bus-rtc-logo-type">
                      <img
                        className="vendor-logo"
                        src="https://imgak.mmtcdn.com/bus_cdn/pwa/assets/img/Apsrtc_logo.png"
                      />
                      <div className="bus-vendor-type">
                        <span>APSRTC</span>
                        <span>
                          Andhra Pradesh State Road Transport Corporation
                        </span>
                        <span>1 Buses</span>
                      </div>
                    </div>

                    <div className="bus-prices">
                      <p>₹ 1088</p>
                      <p>
                        <div className="toggle-right" onClick={viewBusses}>
                          {viewBuses ? " HIDE BUSES" : "VIEW BUSES"}
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                {viewBuses && <BusDetails />}

                <div>
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>
                        {item.name} - ${item.price} - {item.rating} stars - -{" "}
                        {item.fastest}
                        {item.relevance}% relevance
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusSearch;
