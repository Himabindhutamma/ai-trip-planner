import React, { useState } from "react";
import "./HotelSearch.css";
import StarRating from "../../../Components/StarRating";
import MultiSelectCheckbox from "../../../Components/MultiSelectCheckbox";
import NestedDropdown from "../../../Components/NestedDropdown";
import MultiViewCalendar from "../../../Components/MultiViewCalendar";

const HotelSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(1);

  const options = [
    {
      image: "",
      airline: "Last Minute Deals ",
      price: "",
    },
    {
      image: "",
      airline: "5 Star",
      price: "(31)",
    },
    {
      image: "",
      airline: "Rated Excellent by Travellers",
      price: "(31)",
    },
    {
      image: "",
      airline: "Resort",
      price: "(31)",
    },
    {
      image: "",
      airline: "Rated Very Good by Travellers",
      price: "(31)",
    },
  ];
  const pricespernight = [
    {
      image: "",
      airline: "₹ 0 - ₹ 2500 ",
      price: "(448)",
    },
    {
      image: "",
      airline: "₹ 2500 - ₹ 5500",
      price: "(448)",
    },
    {
      image: "",
      airline: "₹ 5500 - ₹ 9000",
      price: "(448)",
    },
    {
      image: "",
      airline: "₹ 9000 - ₹ 12500",
      price: "(448)",
    },
    {
      image: "",
      airline: "₹ 15000 - ₹ 30000",
      price: "(448)",
    },
  ];
  const starcategory = [
    {
      image: "",
      airline: "3 star",
      price: "(448)",
    },
    {
      image: "",
      airline: "4 Star",
      price: "(448)",
    },
    {
      image: "",
      airline: "5 Star",
      price: "(448)",
    },
  ];

  const amenities = [
    {
      image: "",
      airline: "Wi-Fi",
      price: "(448)",
    },
    {
      image: "",
      airline: "Breakfast",
      price: "(448)",
    },
    {
      image: "",
      airline: "Parking",
      price: "(448)",
    },
    {
      image: "",
      airline: "Swimming Pool",
      price: "(448)",
    },
  ];
  const homerules = [
    {
      image: "",
      airline: "Smoking Allowed",
      price: "(448)",
    },
    {
      image: "",
      airline: "Alcohol Allowed",
      price: "(448)",
    },
    {
      image: "",
      airline: "Pets Allowed",
      price: "(448)",
    },
    {
      image: "",
      airline: "Unmarried Couples Allowed",
      price: "(448)",
    },
  ];
  const data = [
    {
      id: 1,
      name: "Hyatt Centric Hebbal Bengaluru",
      image:
        "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img1: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img2: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img3: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img4: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      place: "Hebbal",
      rating: 4,
      includes: "",
      persuasion: "",
      ratingText: "Excellent",
      ratings: 55,
      price: "₹23,799",
      tax: "+₹4,200 taxes & fees",
      pernight: "Per Night",
      offers: "Exclusive Offer on SBI Credit Cards. Get INR 6000 Off ",
      rooms: "Rooms In An Apartment ",
      beds: "| 2 Bedrooms | Sleeps 6 Guests ",
    },
    {
      id: 2,
      name: "Lemon Tree Suites, Whitefield, Bengaluru",
      image:
        "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img1: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img2: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img3: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img4: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      place: "Whitefield",
      rating: 3,
      includes: "Breakfast Included",
      persuasion: "Clean rooms, good security & multi-cuisine dishes ",
      ratingText: "Excellent",
      ratings: 55,
      price: "₹23,799",
      tax: "+₹4,200 taxes & fees",
      pernight: "Per Night",
      offers: "",
      rooms: "Rooms In An Apartment ",
      beds: "| 2 Bedrooms | Sleeps 6 Guests ",
    },
    {
      id: 3,
      name: "JW Marriott Bengaluru Prestige Golfshire Resort and Spa",
      image:
        "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img1: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img2: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img3: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      img4: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200902051019483080-6877e17259dc11ee81890a58a9feac02.jpg?&output-quality=75&downsize=243:162&crop=243:162;36,0&output-format=jpg",
      place: "In Devanhalli",
      rating: 5,
      includes: "Breakfast Included",
      persuasion:
        "Peaceful environment, fully equipped kitchen, easy accessibility to nearby locations ",
      ratingText: "Excellent",
      ratings: 55,
      price: "₹23,799",
      tax: "+₹4,200 taxes & fees",
      pernight: "Per Night",
      offers: "Exclusive Offer on SBI Credit Cards. Get INR 6000 Off ",
      rooms: "Rooms In An Apartment ",
      beds: "| 2 Bedrooms | Sleeps 6 Guests ",
    },
  ];
  const handleRatingSelect = (rating) => {
    console.log(`Selected Rating: ${rating}`);
  };
  const handleSearch = (event) => {
    console.log("Search query:", event.target.value);
    setSearchTerm(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update state with the selected option
  };
  return (
    <div>
      <form className="hotel-form">
        <div className="container hotel_search">
          <div className="row" style={{ marginBottom: "10px" }}>
            <div className="col-12 col-md-3 input-layout">
              <div className="">
                {/* <label for="inputField" class="input-label">
                  City,Property Name Or Location
                </label> */}
                <input
                  type="text"
                  id="inputField"
                  className="input-box"
                  placeholder="City,Property Name Or Location"
                />
              </div>
            </div>
            <div className="col-12 col-md-2 input-layout">
              <div className="">
                {/* <label for="inputField" class="input-label">
                  Check-In
                </label> */}
                <MultiViewCalendar />
              </div>
            </div>
            <div className="col-12 col-md-2 input-layout">
              <div className="">
                {/* <label for="inputField" class="input-label">
                  Check-Out
                </label> */}
                <MultiViewCalendar />
              </div>
            </div>
            <div className="col-12 col-md-1 input-layout">
              <div className="">
                {/* <label htmlFor="dropdown">Choose an option:</label> */}
                <select
                  id="hotel-select-dropdown"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option value="" disabled></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-2 input-layout">
              <NestedDropdown />
            </div>
            <div className="col-12 col-md-2">
              <button className="hotel_searchButton  " id="hotel_search_button">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="sortby-filter">
        <div className="container sortbyFtr">
          <span className="sortby">Sort By: </span>
          <span className="sortbysize">Popular</span>
          <span className="sortbysize">
            User Rating <span className="rating-size">(Highest First)</span>
          </span>
          <span className="sortbysize">
            Price <span className="rating-size">(Highest First)</span>
          </span>
          <span className="sortbysize">
            Price <span className="rating-size">(Lowest First)</span>{" "}
          </span>
          <input
            type="search"
            placeholder="Search for locality / hotel name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <MultiSelectCheckbox options={options} title="Suggested For You" />
            <MultiSelectCheckbox
              options={pricespernight}
              title="Price per night"
            />
            <MultiSelectCheckbox options={starcategory} title="Star Category" />
            <MultiSelectCheckbox options={amenities} title="Amenities" />
            <MultiSelectCheckbox options={homerules} title="House Rules" />
          </div>
          <div className="col-12 col-md-9">
            {data &&
              data.map((hoteldata, index) => (
                <>
                  <div
                    className="row"
                    style={{
                      border: "1px solid #e1e1e1",
                      marginBottom: "15px",
                      borderRadius: "5px",
                    }}
                    key={index}
                  >
                    <div className="col-md-3" style={{ marginTop: "10px" }}>
                      <div>
                        <div className="imagegallery-cont">
                          <img src={hoteldata.image} alt="image1" />
                        </div>
                        <div className="image-list">
                          <span>
                            <img src={hoteldata.img1} alt="image1" />
                          </span>
                          <span>
                            <img src={hoteldata.img2} alt="image1" />
                          </span>
                          <span>
                            <img src={hoteldata.img3} alt="image1" />
                          </span>
                          <span className="view_all_img">
                            <img src={hoteldata.img4} alt="image1" />
                            <span className="viewAllText">View All</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 hotel-firstsection"
                      style={{ marginTop: "10px" }}
                    >
                      <div style={{ marginLeft: "14px" }}>
                        <div style={{ display: "flex" }}>
                          <span className="hotel-name">{hoteldata.name}</span>
                          <span>
                            <StarRating
                              rating={hoteldata.rating}
                              maxRating={5}
                            />
                          </span>
                        </div>
                        <p className="hotel-place">{hoteldata.place}</p>
                        <p>
                          <span className="roomname">{hoteldata.rooms}</span>
                          <span className="beds">{hoteldata.beds}</span>
                        </p>
                        <div>
                          {hoteldata.includes && (
                            <span>
                              <i className="fa-solid fa-check hotel-fa-check"></i>
                            </span>
                          )}

                          <span className="includes-text">
                            {hoteldata.includes}
                          </span>
                          <p>
                            {hoteldata.persuasion && (
                              <span>
                                <i class="fa-regular fa-lightbulb hotel-fa-light"></i>
                              </span>
                            )}

                            <span className="persuasion">
                              {hoteldata.persuasion}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div>
                        <div className="rating-div">
                          <span className="ratingText darkBlueText">
                            {hoteldata.ratingText}
                          </span>
                          <span className="ratingNumber">
                            {hoteldata.rating}
                          </span>
                          <div className="ratings">
                            ({hoteldata.ratings}Ratings)
                          </div>
                        </div>

                        <div className="prices-box">
                          <div className="price">{hoteldata.price}</div>
                          <span className="taxes">{hoteldata.tax}</span>
                          <div className="pernight">{hoteldata.pernight}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>

      {/* <StarRating maxRating={5} onRatingSelect={handleRatingSelect} /> */}
    </div>
  );
};
export default HotelSearch;
