import React from "react";
import "./FlightSearch.css";

const Flightdetails = () => {
  return (
    <div className="flight-details">
      <p class="flight-details-head">New Delhi to Bengaluru , 20 Sep</p>
      <p className="flight-details-body">
        <span className="flight-icon"> </span>
        <span className="airline-heading">
          <p>IndiGo</p>
          <p>6E | 5360</p>
        </span>
        <span className="airline-type">Airbus A321</span>
      </p>
      <div className="flight-details-info">
        <div className="flight-airline-info">
          <p className="fght-airline-info">05:45</p>
          <p className="fght-airline-info" style={{ fontSize: "12px" }}>
            Fri, 20 Sep 24
          </p>
          <p className="flight-place">Terminal T2</p>
          <p className="flight-place">New Delhi, India</p>
        </div>
        <div className="airline-duration">
          <p>02 h 45 m</p>
          <div class="relative fliStopsSep">
            <p
              class="fliStopsSepLine"
              style={{ borderTop: "3px solid rgb(81, 226, 194)" }}
            ></p>
          </div>
        </div>
        <div className="">
          <p className="fght-airline-info">08:30</p>
          <p className="fght-airline-info" style={{ fontSize: "12px" }}>
            Fri, 20 Sep 24
          </p>
          <p className="flight-place">Terminal T1</p>
          <p className="flight-place">Bengaluru, India</p>
        </div>
        <div className="">
          <p className="baggageInfo">
            <div className="baggageInfo-width">
              <p className="baggageInfoText">BAGGAGE : </p>
              <p className="baggageInfo-sub-text">ADULT</p>
            </div>
            <div className="baggageInfo-width">
              <p className="baggageInfoText">CHECK IN</p>
              <p className="baggageInfo-sub-text">15 Kgs (1 piece only)</p>
            </div>
            <div className="baggageInfo-width">
              <p className="baggageInfoText">CABIN</p>
              <p className="baggageInfo-sub-text">7 Kgs (1 piece only)</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Flightdetails;
