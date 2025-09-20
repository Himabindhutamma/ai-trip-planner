import React from "react";
import "./FlightSearch.css";

const FareSummary = () => {
  const fareDetails = [
    {
      Farename: "TOTAL",
      price: "₹ 5,695",
      color: "rgb(0, 0, 0)",
    },
    {
      Farename: "Base Fare",
      price: "₹ 4,954",
      color: "rgb(135, 135, 135)",
    },
    {
      Farename: "Surcharges",
      price: "₹ 741",
      color: "rgb(135, 135, 135)",
    },
  ];
  return (
    <>
      <div className="flight-details">
        <p class="flight-details-head">Fare breakup</p>
        <div className="fare-details-info">
          {fareDetails &&
            fareDetails.map((i, j) => (
              <>
                <p class="">
                  <span class="fare-breakup-text">
                    <font style={{ fontSize: "14px", color: `${i.color}` }}>
                      {i.Farename}
                    </font>
                  </span>
                  <span>
                    <font style={{ fontSize: "14px", color: `${i.color}` }}>
                      {i.price}
                    </font>
                  </span>
                </p>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default FareSummary;
