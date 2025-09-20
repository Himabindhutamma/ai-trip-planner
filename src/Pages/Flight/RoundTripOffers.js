import React from "react";
import "./Flight.css";

const RoundTripOffers = () => {
  const flightoffers = [
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Glasgow → Lagos",
      flightTrip: "Round Trip",
      flightcharges: "8200 /-",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Glasgow → Lagos",
      flightTrip: "Round Trip",
      flightcharges: "8200 /-",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Glasgow → Lagos",
      flightTrip: "Round Trip",
      flightcharges: "8200 /-",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Glasgow → Lagos",
      flightTrip: "Round Trip",
      flightcharges: "8200 /-",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Glasgow → Lagos",
      flightTrip: "Round Trip",
      flightcharges: "8200 /-",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Glasgow → Lagos",
      flightTrip: "Round Trip",
      flightcharges: "8200 /-",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {flightoffers.map((offers, index) => (
            <div className="col-sm-4">
              <div className="flight-offer">
                <img src={offers.img} />
                <div>
                  <span>{offers.flightTrip}</span>
                  <p>{offers.title}</p>
                  <span>Pay now:</span>
                  <p>{offers.flightcharges}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RoundTripOffers;
