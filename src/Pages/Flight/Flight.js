import React, { useState, useEffect } from "react";
import "./Flight.css";
import RadioButton from "../../Components/RadioButton";
import SelectDropdown from "../../Components/SelectDropdown";
import DropdownwithImage from "../../Components/DropdownwithImage";
import SpiritualLocations from "./SpiritualLocations";
import BestFlights from "./BestFlights";
import WomenTravel from "./WomenTravel";
import Topdestinations from "./Topdestinations";
import Advertisement from "./Advertisement";
import TopFlightsRoutes from "./TopFlightsRoutes";
import flightseat from "../../../src/assets/flight-seat.png";
import CustomSlider from "../../Components/Cardslider";
import BestFlightRoutes from "./BestFlightRoutes";
import TopFlights from "./TopFlights";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabs from "../../Components/Tabs";
import Dropdown from "../../Components/Dropdownwithincrement";
import Checkbox from "../../Components/Checkbox";
import FlightOffers from "./FlightOffers";
import MultiViewCalendar from "../../Components/MultiViewCalendar";
import FlightMultiway from "./FlightMultiway";

const Flight = () => {
  const items = [
    { value: "One way / Round Trip", label: "One way / Round Trip" },
    { value: "Multi-city", label: "Multi-city" },
    { value: "DirectFlight", label: "DirectFlight" },
  ];
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

  const [selectedValue, setSelectedValue] = useState(items[0].value);
  const [dropdownValue, setDropdownValue] = useState(options[0].value);
  const [traveller, setTraveller] = useState(travellerOptions[0].value);
  const tabs = [
    {
      label: "Best Flight Routes",
      content: <BestFlightRoutes />,
    },
    { label: "Best Flights", content: <BestFlights /> },
    {
      label: "Top Flights",
      content: <TopFlights />,
    },
  ];
  const flightOffers = [
    {
      label: "All Offers",
      content: <FlightOffers />,
    },
    { label: "Flight Offers", content: <FlightOffers /> },
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
    {
      label: "Sunbathing and Relaxation",
      content: <WomenTravel />,
    },
    {
      label: "Swimming and Snorkeling",
      content: <WomenTravel />,
    },
    {
      label: "Beachfront Dining",
      content: <WomenTravel />,
    },
    {
      label: "Waterfall Trekking",
      content: <WomenTravel />,
    },
    {
      label: "Kayaking and Paddleboarding",
      content: <WomenTravel />,
    },
    {
      label: "Sunset Watching",
      content: <WomenTravel />,
    },
    {
      label: "Beach Volleyball and Sports",
      content: <WomenTravel />,
    },
    {
      label: "Exploring Tide Pools",
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
  const flightForm = () => {
    return (
      <form>
        <div className="input-container">
          <div className="row ">
            <div className="col-sm-6 col-md-2">
              <div className="form-fields">
                <label for="inputField" class="input-label">
                  From City
                </label>
                <input
                  type="text"
                  id="inputField"
                  class="input-box"
                  placeholder="From City"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="form-fields">
                <label for="inputField" class="input-label">
                  To City
                </label>
                <input
                  type="text"
                  id="inputField"
                  class="input-box"
                  placeholder="To City"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="form-fields">
                <label for="inputField" class="input-label">
                  Departure
                </label>
                <MultiViewCalendar />
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="form-fields">
                <label for="inputField" class="input-label">
                  Return
                </label>
                <MultiViewCalendar />
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="form-fields" style={{ borderRight: "none" }}>
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

        {/* <div className="form-row">
        <div className="column">
          <div className="form-group">
            <label htmlFor="from">From:</label>
            <i className="fa fa-plane-departure"></i>
            <input
              type="text"
              id="from"
              name="from"
              placeholder="City or Airport"
              className="border-left"
            />
          </div>
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <i className="fa fa-plane-arrival"></i>
            <input
              type="text"
              id="to"
              name="to"
              placeholder="City or Airport"
              className="boder-right"
            />
          </div>
        </div>
        <div className="column">
          <div className="form-group">
            <label htmlFor="departure-date">Departure Date:</label>
            <input
              type="date"
              id="departure-date"
              name="departure-date"
              className="border-left"
            />
          </div>
          <div className="form-group">
            <label htmlFor="return-date">Return Date:</label>
            <input
              type="date"
              id="return-date"
              name="return-date"
              className="boder-right"
            />
          </div>
        </div>
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div> */}
      </form>
    );
  };
  const getRelatedRadioContent = () => {
    switch (selectedValue) {
      case "One way / Round Trip":
        return <>{flightForm()}</>;
      case "Multi-city":
        return (
          <>
            <FlightMultiway />
          </>
        );

      default:
        return <>{flightForm()}</>;
    }
  };

  return (
    <div>
      <div className="flight-banner">
        <div className="container">
          <div className="radio-btn-option">
            <RadioButton items={items} onSelect={setSelectedValue} />
            {/* <Checkbox label="DirectFlight" onChange={handleCheckboxChange} /> */}
          </div>
          {getRelatedRadioContent()}
        </div>
      </div>
      <Tabs
        tabs={topdestinations}
        title="Top Destinations"
        storageKey="topdestinations"
      />
      <Tabs
        tabs={flightOffers}
        title="Flight Offers"
        storageKey="flightoffers"
      />
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
        title="Top Flight Routes"
        storageKey="topFlightRoutesActiveTab"
      />
      {/* <DropdownwithImage /> */}
    </div>
  );
};

export default Flight;
