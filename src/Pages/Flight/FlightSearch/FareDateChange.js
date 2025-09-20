import React from "react";
import "./FlightSearch.css";

const FareDateChange = () => {
  const fareDateChange = [
    {
      time: "0 hours to 4 hours*",
      fare: "Non Refundable",
      traveller: "ADULT",
    },
    {
      time: "4 hours to 4 days*",
      fare: "₹ 2,999 + ₹ 300 + Fare difference",
      traveller: "ADULT",
    },
    {
      time: "0 hours to 4 hours*",
      fare: "₹ 2,250 + ₹ 300 + Fare difference",
      traveller: "ADULT",
    },
  ];
  return (
    <>
      <div className="flight-details">
        <p className="flight-details-head">DEL-BLR </p>
        <div className="fare-details-info">
          <div
            className="flight-details"
            style={{ border: "1px solid #dfdfdf" }}
          >
            <div className="date-change-info">
              <div className="flight-details-infoLeft">
                <p className="fontSize14 textblack">Time frame</p>
                <p className="fontSize12">(From Scheduled flight departure)</p>
              </div>
              <div className="flight-details-infoLeft">
                <p className="fontSize14 textblack">
                  Airline Fee + MMT Fee + Fare difference
                </p>
                <p className="fontSize12">(Per passenger)</p>
              </div>
            </div>
            {fareDateChange.map((i, j) => (
              <div className="date-change-info">
                <div className="flight-details-infoLeft">
                  <p className="fontSize12">{i.time}</p>
                </div>
                <div className="flight-details-infoRight">
                  <p>
                    {i.traveller} : <b>{i.fare}</b>
                    <br />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default FareDateChange;
