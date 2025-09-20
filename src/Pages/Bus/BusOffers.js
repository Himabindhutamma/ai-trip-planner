import React from "react";
import "../Flight/Flight.css";

const BusOffers = () => {
  const flightoffers = [
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "LIVE NOW: Sale by Malaysia Airlines",
      flightTrip: "with up to 25% OFF* on fares.",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "LIVE NOW: Min. 10% OFF* on",
      flightTrip: "International Flights, Hotels & Holiday Packages!",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "IndiGo Stretch-Business Class Seats by",
      flightTrip: "IndiGo's FIRST flight b/w Delhi & Mumbaistarting @ 18,018*.",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "LIVE NOW: Unmissable Deals for your Int'l Trips",
      flightTrip: "on the Widest Range of Credit Cards.",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {flightoffers.map((offers, index) => (
            <div className="col-sm-6">
              <div className="flight-offer">
                <img src={offers.img} />
                <div>
                  <p>{offers.title}</p>
                  <p>{offers.flightTrip}</p>
                  {/* <span>Pay now:</span> */}
                  <p>{offers.flightcharges}</p>
                  {/* <div>
                    <button className="viewdetails-button">View Details</button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default BusOffers;
