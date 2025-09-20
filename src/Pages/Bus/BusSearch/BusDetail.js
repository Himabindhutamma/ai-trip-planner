import React from "react";
import BusTabs from "../../../Components/BusTabs";
import BusDetailsData, {
  BusPhotos,
  BusAmenities,
  BusDroppingPickup,
  BusReviews,
} from "./BusDetailsData";

const Cancellation = () => {
  const cancellationData = [
    { time: "more than 24 hrs before travel", penality: "10%" },
    { time: "12 to 24 hr(s) before travel", penality: "15%" },
    { time: "6 to 12 hr(s) before travel", penality: "30%" },
    { time: "0 to 6 hr(s) before travel", penality: "100%" },
  ];
  const policyData = [
    { para: "* The penalty is calculated based on total seat worth 2874" },
    {
      para: "* Penalty is calculated basis the bus service scheduled start time at: 01-10-2024 21:55 (subject to change).",
    },
    {
      para: "* Penalty is calculated basis the bus service scheduled start time at: 01-10-2024 21:55 (subject to change).",
    },
    { para: "* Partial cancellation is allowed for this ticket." },
    {
      para: "* Please note : the ticket cannot be cancelled after the bus departs from the first boarding point.",
    },
    {
      para: "* Above defined cancellation charges are illustrated basis maximum fare applicable. Exact cancellation charges will depend on the final price charged along with discount and other adjustments.",
    },
    {
      para: "* Cancellation amount shown above may also vary basis the non-refundable components of the ticket defined by the bus operator",
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="policy-left">
            <p className="spacebtwn">
              <p style={{ marginBottom: "0" }}> Cancellation Time</p>
              <span>Penalty %</span>
            </p>
            <p className="before-dep">(before departure)</p>
            {cancellationData &&
              cancellationData.map((i, j) => (
                <p className="spacebtwn can-font-size">
                  <span> {i.time}</span>
                  <span>{i.penality}</span>
                </p>
              ))}
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="policy-right">
            <p className="policy-info">Information : </p>
            {policyData &&
              policyData.map((i, j) => (
                <>
                  <p className="policy-para">{i.para}</p>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
const Childpassenger = () => {
  return (
    <div>
      <ul className="policy-list">
        <li>Children above the age of 3 will need a ticket</li>
      </ul>
    </div>
  );
};
const Luggage = () => {
  return (
    <div>
      <ul className="policy-list">
        <li>
          2 pieces of luggage will be accepted free of charge per passenger.
        </li>
        <li>
          Excess items will be chargeable Excess baggage over 25 kgs per
          passenger will be chargeable
        </li>
      </ul>
    </div>
  );
};
const Liquor = () => {
  return (
    <div>
      <ul className="policy-list">
        <li>
          Carrying or consuming liquor inside the bus is prohibited. Bus
          operator reserves the right to deboard drunk passengers.
        </li>
      </ul>
    </div>
  );
};
const Pickuptime = () => {
  return (
    <div>
      <ul className="policy-list">
        <li>
          Bus operator is not obligated to wait beyond the scheduled departure
          time of the bus. No refund request will be entertained for late
          arriving passengers.
        </li>
      </ul>
    </div>
  );
};
const Pets = () => {
  return (
    <div>
      <ul className="policy-list">
        <li>Pets are not allowed</li>
      </ul>
    </div>
  );
};
const Policies = () => {
  const policyTabs = [
    { label: "Cancellation", content: <Cancellation /> },
    { label: "Child Passenger", content: <Childpassenger /> },
    { label: "Luggage", content: <Luggage /> },
    { label: "Liquor", content: <Liquor /> },
    { label: "Pickup time", content: <Pickuptime /> },
    { label: "Pets", content: <Pets /> },
  ];
  return (
    <>
      <BusTabs busTabsData={policyTabs} policies={"policies"} />
    </>
  );
};
const BusDetails = () => {
  const busTabsData = [
    { label: "Policies", content: <Policies /> },
    { label: "Photos", content: <BusPhotos /> },
    { label: "Amenities", content: <BusAmenities /> },
    { label: "Pickups & Drops", content: <BusDroppingPickup /> },
    { label: "Reviews", content: <BusReviews /> },
  ];

  return (
    <>
      <div className="bus-card-container">
        <div className="via-route">Via ITIGATE-TIRUPATHI-ONGOLE-GUNTUR</div>
        <div className="row">
          <div className="col-12 col-md-4">
            <p className="service_name">APSRTC - 3873</p>
            <p class="travel_name">
              AMARAVATHI (VOLVO / SCANIA A.C Multi Axle)
            </p>
          </div>
          <div className="col-12 col-md-6" style={{ textAlign: "center" }}>
            <div className="travel-timing">
              <div>
                <span className="travel-arr-time">00:30</span>
                <span className="travel-date">25 Sep</span>
              </div>
              <div className="line-border"></div>
              <div className="travel-date">
                <span>06hrs 30mins</span>
              </div>
              <div className="line-border"></div>
              <div>
                <span className="travel-arr-time">07:00</span>
                <span className="travel-date">25 Sep</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2" style={{ textAlign: "end" }}>
            <p className="bus-travel-fare"> ₹ 1088</p>
          </div>
        </div>
        <div className="bus-seats-ratings">
          <ul className="bus-facility">
            <li className="">
              <span className="bus-rating">
                <i class="fa-solid fa-star"></i> <span className="">4.7</span>
              </span>
            </li>
            <li className="" style={{ marginRight: "26px" }}>
              <div className="bus-fare-rate">15 Ratings</div>
            </li>
            <li className="bus-fare-rate">
              <i class="fa-solid fa-location-crosshairs"></i> Live Tracking
            </li>
          </ul>
          <div className="seats">
            <ul className="left-seats">40 Seats Left</ul>
            <div className="line-border-right"></div>
            <ul className="left-seats">21 Window Seats</ul>
          </div>
        </div>
      </div>
      <div className="bus-card-footer">
        <button className="select-seats">Select Seats</button>
        <BusTabs busTabsData={busTabsData} />
      </div>
    </>
  );
};
export default BusDetails;
