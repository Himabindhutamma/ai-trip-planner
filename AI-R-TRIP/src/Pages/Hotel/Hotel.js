import React, { useState, useEffect } from "react";
import "../Flight/Flight.css";
import RadioButton from "../../Components/RadioButton";
import SelectDropdown from "../../Components/SelectDropdown";
import DropdownwithImage from "../../Components/DropdownwithImage";
import SpiritualLocations from "./SpiritualLocations";
import BestHotels from "./BestHotels";
import WomenTravel from "./WomenTravel";
import Topdestinations from "./Topdestinations";
import Advertisement from "./Advertisement";
import TopFlightsRoutes from "./TopFlightsRoutes";
import CustomSlider from "../../Components/Cardslider";
import BestHotelRoutes from "./BestHotelRoutes";
import TopHotels from "./TopHotels";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabs from "../../Components/Tabs";
import Dropdown from "../../Components/Dropdownwithincrement";
import Checkbox from "../../Components/Checkbox";
import HotelOffers from "./HotelOffers";
import MultiViewCalendar from "../../Components/MultiViewCalendar";

const Hotel = () => {
  const traveloptions = [
    { label: "Adult(12+)", value: "adult" },
    { label: "Children(2-11)", value: "child" },
    { label: "Infant(0-2)", value: "infant" },
  ];
  const options = [
    { value: "economy", label: "Economy" },
    { value: "premiumeconomy", label: "Premium Economy" },
    { value: "business", label: "Business" },
    { value: "first", label: "First" },
  ];
  const travellerOptions = [
    { value: "1adult0child0infant", label: "1Adult, 0child, 0infant" },
  ];

  const [dropdownValue, setDropdownValue] = useState(options[0].value);
  const [traveller, setTraveller] = useState(travellerOptions[0].value);
  const [selectedOption, setSelectedOption] = useState(1);

  const tabs = [
    {
      label: "Best Hotel Routes",
      content: <BestHotelRoutes />,
    },
    { label: "Best Hotels", content: <BestHotels /> },
    {
      label: "Top Hotels",
      content: <TopHotels />,
    },
  ];
  const hotelOffers = [
    {
      label: "All Offers",
      content: <HotelOffers />,
    },
    { label: "Hotel Offers", content: <HotelOffers /> },
  ];
  const topdestinations = [
    {
      label: "Asia",
      content: <Topdestinations />,
    },
    {
      label: "Africa",
      content: <Topdestinations />,
    },
    {
      label: "Australia",
      content: <Topdestinations />,
    },
    {
      label: "North America",
      content: <Topdestinations />,
    },
    {
      label: "South America",
      content: <Topdestinations />,
    },
    {
      label: "Europe",
      content: <Topdestinations />,
    },
  ];
  const spiritualLocations = [
    {
      label: "Temples",
      content: <SpiritualLocations />,
    },
    {
      label: "Pilgrimage Sites",
      content: <SpiritualLocations />,
    },
    {
      label: "Holy Rivers",
      content: <SpiritualLocations />,
    },
    {
      label: "Sacred Mountains",
      content: <SpiritualLocations />,
    },
    {
      label: "Caves and Sacred Groves",
      content: <SpiritualLocations />,
    },
    {
      label: "Ashrams",
      content: <SpiritualLocations />,
    },
    {
      label: "Vedic Schools",
      content: <SpiritualLocations />,
    },
  ];

  const womenTravel = [
    {
      label: "Women-Only Retreats",
      content: <WomenTravel />,
    },
    {
      label: "Solo Travel Destinations",
      content: <WomenTravel />,
    },
    {
      label: "Cultural and Craft Workshops",
      content: <WomenTravel />,
    },
    {
      label: "Spa and Wellness Resorts",
      content: <WomenTravel />,
    },
    {
      label: "Adventure Travel for Women",
      content: <WomenTravel />,
    },
  ];

  const handleSelectChange = (type, value) => {
    console.log(`Selected ${type}: ${value}`);
  };
  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };
  const handleCheckboxChange = (checked) => {
    console.log("Checkbox is checked:", checked);
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update state with the selected option
  };

  return (
    <div>
      <div className="flight-banner">
        <div className="container">
          <div className="radio-btn-option">
            {/* <Checkbox label="DirectFlight" onChange={handleCheckboxChange} /> */}
          </div>
          <form>
            <div className="input-container">
              <div className="row ">
                <div className="col-sm-6 col-md-3 border-right">
                  <div className="">
                    <label for="inputField" class="input-label">
                      City,Property Name Or Location
                    </label>
                    <input
                      type="text"
                      id="inputField"
                      class="input-box"
                      placeholder="City,Property Name Or Location"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-2 border-right">
                  <div className="">
                    <label for="inputField" class="input-label">
                      Check-In
                    </label>
                    <MultiViewCalendar />
                  </div>
                </div>
                <div className="col-sm-6 col-md-2 border-right">
                  <div className="">
                    <label for="inputField" class="input-label">
                      Check-Out
                    </label>
                    <MultiViewCalendar />
                  </div>
                </div>
                <div className="col-sm-6 col-md-1 border-right">
                  <div className="">
                    {/* <label htmlFor="dropdown">Choose an option:</label> */}
                    <select
                      id="select-dropdown"
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
                <div className="col-sm-6 col-md-3">
                  <div className="" style={{ borderRight: "none" }}>
                    <Dropdown
                      options={traveloptions}
                      onSelect={handleSelect}
                      iconPath={"fa-regular fa-user dropdown-icon"}
                    />
                  </div>
                </div>
              </div>
              <div className="flight-search-btn">
                <button type="button">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Tabs
        tabs={topdestinations}
        title="Top Destinations"
        storageKey="topdestinations"
      />
      <Tabs tabs={hotelOffers} title="Hotel Offers" storageKey="hoteloffers" />
      <Tabs
        tabs={spiritualLocations}
        title="Spiritual Locations"
        storageKey="spiritualLocations"
      />
      <Tabs
        tabs={womenTravel}
        title="Women Travel"
        storageKey="womenTravel"
        maxVisibleTabs={3}
      />

      <Advertisement />
      {/* <TopFlightsRoutes /> */}
      <Tabs
        tabs={tabs}
        title="Top Hotel Routes"
        storageKey="topFlightRoutesActiveTab"
      />
      {/* <DropdownwithImage /> */}
    </div>
  );
};

export default Hotel;
