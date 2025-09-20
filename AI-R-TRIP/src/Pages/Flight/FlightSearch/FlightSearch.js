import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Flight.css";
import FlightSearchFilter from "./FlightSearchFilter";
import FlightTabs from "../../../Components/FlightTabs";
import RadioButton from "../../../Components/RadioButton";
import MultiSelectCheckbox from "../../../Components/MultiSelectCheckbox";
import MultiViewCalendar from "../../../Components/MultiViewCalendar";
import Dropdown from "../../../Components/Dropdownwithincrement";
import TimeRangeSelector from "../../../Components/TimeRangeSelector";
import RangeSlider from "../../../Components/RangeSlider";
import NoonInactive from "../../../assets/noon_inactive.png";
import NightInactive from "../../../assets/night_inactive.png";
import EveningInactive from "../../../assets/evening_inactive.png";
import MorningInactive from "../../../assets/morning_inactive.png";
import FlightMultiway from "../FlightMultiway";
import AI from "../../../assets/AI.png";
import IX from "../../../assets/IX.png";
import QP from "../../../assets/QP.png";
import SG from "../../../assets/SG.png";
import UK from "../../../assets/UK.png";

const FlightSearch = () => {
  const items = [
    { value: "One way / Round Trip", label: "One way / Round Trip" },
    { value: "Multi-city", label: "Multi-city" },
    { value: "DirectFlight", label: "DirectFlight" },
  ];
  const [selectedValue, setSelectedValue] = useState(items[0].value);
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
  const weeklyFareItems = [
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
    {
      date: " Sat, Aug 31",
      fare: "₹ 5,800",
    },
  ];
  const timeRanges = [
    {
      image: MorningInactive,
      timing: "Before 6 AM",
    },
    {
      image: NoonInactive,
      timing: "6 AM - 12 PM",
    },
    {
      image: EveningInactive,
      timing: "12 PM - 6 PM",
    },
    {
      image: NightInactive,
      timing: "After 6 PM",
    },
  ];
  const stopoptions = [
    {
      image: "",
      airline: " Non Stop ",
      price: "₹ 6,868",
    },
    {
      image: "",
      airline: "Morning Departures",
      price: "₹ 6,868",
    },
    {
      image: "",
      airline: "Late Departures",
      price: "₹ 6,868",
    },
    {
      image: "",
      airline: "AfterNoon Departure",
      price: "₹ 6,868",
    },
    {
      image: "",
      airline: "Early Morning Departures",
      price: "₹ 6,868",
    },
  ];
  const stops = [
    {
      image: "",
      airline: "Non Stop",
      price: "₹ 5,762",
    },
    {
      image: "",
      airline: "1 Stop",
      price: "₹ 5,762",
    },
  ];
  const air = [
    {
      image: AI,
      airline: "Air India",
      price: "₹ 6,868",
    },
    {
      image: IX,
      airline: " Air India Express",
      price: "₹ 6,868",
    },
    {
      image: QP,
      airline: "Akasa Air",
      price: "₹ 6,868",
    },
    {
      image: IX,
      airline: " IndiGo",
      price: "₹ 6,868",
    },
    {
      image: SG,
      airline: "SpiceJet",
      price: "₹ 6,868",
    },
    {
      image: UK,
      airline: "Vistara",
      price: "₹ 6,868",
    },
  ];
  const womenTravel = [
    {
      label: "Cheapest",
      content: <FlightSearchFilter />,
    },
    {
      label: "Non Stop First",
      content: <FlightSearchFilter />,
    },
    {
      label: "You May Prefer",
      content: <FlightSearchFilter />,
    },
    {
      label: "Discounted Price",
      content: <FlightSearchFilter />,
    },
    {
      label: "Early Departure",
      content: <FlightSearchFilter />,
    },
    {
      label: "Late Departure",
      content: <FlightSearchFilter />,
    },
    {
      label: "Early Arrival",
      content: <FlightSearchFilter />,
    },
    {
      label: "Late Arrival",
      content: <FlightSearchFilter />,
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
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
  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };
  const flightForm = () => {
    return (
      <form>
        <div className="input-container">
          <div className="row ">
            <div
              className="col-12 col-md-2"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div className="fltsearch-form-fields">
                {/* <label for="inputField" className="input-label">
                  From City
                </label> */}
                <input
                  type="text"
                  id="inputField"
                  class="input-box"
                  placeholder="From City"
                />
              </div>
            </div>
            <div
              className="col-12 col-md-2"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div className="fltsearch-form-fields">
                {/* <label for="inputField" className="input-label">
                  To City
                </label> */}
                <input
                  type="text"
                  id="inputField"
                  class="input-box"
                  placeholder="To City"
                />
              </div>
            </div>
            <div
              className="col-12 col-md-2"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div className="fltsearch-form-fields">
                {/* <label for="inputField" className="input-label">
                  Departure
                </label> */}
                <MultiViewCalendar />
              </div>
            </div>
            <div
              className="col-12 col-md-2"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div className="fltsearch-form-fields">
                {/* <label for="inputField" className="input-label">
                  Return
                </label> */}
                <MultiViewCalendar />
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div
                className="fltsearch-form-fields"
                style={{ borderRight: "none" }}
              >
                <Dropdown
                  options={traveloptions}
                  onSelect={handleSelect}
                  iconPath={"fa-regular fa-user dropdown-icon"}
                />
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="fltt-search-btn">
                <button type="button">Search</button>
              </div>
            </div>
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
            <FlightMultiway flightsearch={"fltsearch"} />
          </>
        );

      default:
        return <>{flightForm()}</>;
    }
  };
  return (
    <>
      <div className="flt-se-container">
        <div className="container">
          <div className="radio-btn-option">
            <RadioButton items={items} onSelect={setSelectedValue} />
          </div>
          {getRelatedRadioContent()}
        </div>
      </div>

      <div className="container" id="flightsearch">
        <div className="row">
          <div class="col-md-3">
            <MultiSelectCheckbox
              options={stopoptions}
              initialVisibleCount={4}
              title="Popular Filters"
            />
            <RangeSlider
              min={5444}
              max={11200}
              step={1}
              initialValue={50}
              title="One Way Price"
            />
            <MultiSelectCheckbox options={stops} title="Stops From New Delhi" />

            <TimeRangeSelector
              timeRanges={timeRanges}
              title="Departure From New Delhi"
            />
            <TimeRangeSelector
              timeRanges={timeRanges}
              title="Arrival at Bengaluru"
            />
            <MultiSelectCheckbox options={air} title={"Airlines"} />
          </div>
          <div class="col-6 col-md-9">
            <div className="">
              <Slider {...settings}>
                {weeklyFareItems &&
                  weeklyFareItems.map((item, index) => (
                    <>
                      <div
                        className="weekly-fare-items activeDate"
                        style={{ height: "auto", width: "102.5px" }}
                      >
                        <a>
                          <p class="blackFont fontSize12 appendBottom3">
                            {item.date}
                          </p>
                          <p>
                            <span>{item.fare}</span>
                          </p>
                        </a>
                      </div>
                    </>
                  ))}
              </Slider>
            </div>
            <FlightTabs
              tabs={womenTravel}
              title=""
              storageKey="womenTravel"
              maxVisibleTabs={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FlightSearch;
