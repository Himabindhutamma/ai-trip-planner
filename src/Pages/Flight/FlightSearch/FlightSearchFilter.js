import React, { useState } from "react";
import "./FlightSearch.css";
import QP from "../../../assets/QP.png";
import Tabs from "../../../Components/Tabs";
import Flightdetails from "./Flightdetails";
import FareSummary from "./FareSummary";
import Cancellation from "./Cancellation";
import FareDateChange from "./FareDateChange";

const FlightSearchFilter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const tabs = [
    {
      label: "FLIGHT DETAILS",
      content: <Flightdetails />,
    },
    { label: "FARE SUMMARY", content: <FareSummary /> },
    {
      label: "CANCELLATION",
      content: <Cancellation />,
    },
    {
      label: "DATE CHANGE",
      content: <FareDateChange />,
    },
  ];

  return (
    <div>
      <h6>Flights sorted by Lowest fares on this route</h6>
      <div className="flight_search_list">
        <div className="flight_search_data">
          <div className="airline-logo">
            <span className="arln-logo logo1">
              <img src={QP} />
            </span>
            <div>
              <p className="boldFont blackText airlineName">Akasa Air</p>
              <p className="fliCode">QP 1350</p>
            </div>
          </div>
          <div className="flexOne timeInfoLeft">
            <p className="appendBottom2 flightTimeInfo">
              <span>22:40</span>
            </p>
            <p className="blackText fliCode">
              <font color="#000000">New Delhi</font>
            </p>
          </div>
          <div className="stop-info flexOne">
            <p>02 h 45 m</p>
            <div>
              <div className="relative fliStopsSep">
                <p
                  className="fliStopsSepLine"
                  style={{
                    borderTop: "3px solid rgb(81, 226, 194)",
                  }}
                ></p>
              </div>
              <p className="flightsLayoverInfo">Non stop</p>
            </div>
          </div>
          <div className="flexOne timeInfoRight">
            <p className="appendBottom2 flightTimeInfo">
              <span>01:25</span>
              <span className="plusDisplayText fontSize9 boldFont redText appendLeft5 textCenter">
                <span>+ 1 DAY</span>
              </span>
            </p>
            <p className="blackText">
              <font color="#000000">Bengaluru</font>
            </p>
          </div>
          <div className="blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice">
            <span className="slashedPrice">
              <del>₹ 6,706</del>
            </span>
            <span className=" fontSize18 blackFont">₹ 6,274</span>
            <p className="fontSize12 darkText lightFont lh14">per adult</p>
          </div>
          <button className="text-uppercase flight-book-btn">
            <span className="">Book Now</span>
          </button>
        </div>
        <p
          class="alertMsg appendBottom10 appendTop10"
          style={{
            backgroundColor: "rgb(255, 237, 209)",
            minHeight: "22px",
            margin: "20px",
          }}
        >
          <span style={{ fontSize: "12px" }}>
            Get FLAT Rs. 173 OFF using code HJLSUPER | FLAT 15% OFF on Kotak
            cards using code HJLKOTAKCC
          </span>
        </p>
        <div class="view_flight_details">
          <div></div>
          <span class="viewFltDtls" onClick={toggleVisibility}>
            {isVisible ? "Hide Flight Details" : "View Flight Details"}
          </span>
        </div>
      </div>
      {isVisible && (
        <>
          <Tabs
            flightContent="tab-content-flight"
            flightHeaderTab="tabs-header-flight"
            flightClass="tab-button-flight"
            tabs={tabs}
            storageKey="topFlightRoutesActiveTab"
          />
        </>
      )}
    </div>
  );
};
export default FlightSearchFilter;
