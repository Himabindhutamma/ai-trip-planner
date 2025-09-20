import React, { useState, useEffect } from "react";
import "../Flight/Flight.css";
import RadioButton from "../../Components/RadioButton";
import SelectDropdown from "../../Components/SelectDropdown";
import DropdownwithImage from "../../Components/DropdownwithImage";
import SpiritualLocations from "./SpiritualLocations";
import BestBuses from "./BestBuses";
import WomenTravel from "./WomenTravel";
import Topdestinations from "./Topdestinations";
import Advertisement from "./Advertisement";
import TopFlightsRoutes from "./TopFlightsRoutes";
import CustomSlider from "../../Components/Cardslider";
import BestBusRoutes from "./BestBusRoutes";
import TopBuses from "./TopBuses";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabs from "../../Components/Tabs";
import Dropdown from "../../Components/Dropdownwithincrement";
import Checkbox from "../../Components/Checkbox";
import BusOffers from "./BusOffers";
import MultiViewCalendar from "../../Components/MultiViewCalendar";

const Activity = () => {
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
  const tabs = [
    {
      label: "Best Bus Routes",
      content: <BestBusRoutes />,
    },
    { label: "Best Buses", content: <BestBuses /> },
    {
      label: "Top Buses",
      content: <TopBuses />,
    },
  ];
  const busOffers = [
    {
      label: "All Offers",
      content: <BusOffers />,
    },
    { label: "Bus Offers", content: <BusOffers /> },
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

  return (
    <div>
      <div className="flight-banner">
        <div className="container" style={{ width: "50%" }}>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="">
                <label for="inputField" class="input-label">
                  Location
                </label>
                <input
                  type="text"
                  id="inputField"
                  className="input-box"
                  placeholder="Enter Location"
                />
              </div>
            </div>
          </div>
          <div className="flight-search-btn">
            <button type="button">Search</button>
          </div>
        </div>
      </div>
      <Tabs
        tabs={topdestinations}
        title="Top Destinations"
        storageKey="topdestinations"
      />
      <Tabs tabs={busOffers} title="Bus Offers" storageKey="busoffers" />
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
        title="Top Bus Routes"
        storageKey="topBusRoutesActiveTab"
      />
      {/* <DropdownwithImage /> */}
    </div>
  );
};

export default Activity;
