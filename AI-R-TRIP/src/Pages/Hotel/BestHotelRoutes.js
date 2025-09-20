import React from "react";
import "../Flight/Flight.css";

const BestHotelRoutes = () => {
  const travelsection = [
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Mumbai to Delhi",
      flightTime: "Shortest flight time: 2h 4m",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Hyderabad to Mumbai",
      flightTime: "Shortest flight time: 2h 4m",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Los Angeles to New York",
      flightTime: "Shortest flight time: 2h 4m",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Paris to Berlin",
      flightTime: "Shortest flight time: 2h 4m",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Berlin to Rome",
      flightTime: "Shortest flight time: 2h 4m",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Mumbai to Barcelona",
      flightTime: "Shortest flight time: 2h 4m",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Mumbai to London",
      flightTime: "Shortest flight time: 2h 4m",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Cape Town to Sydney",
      flightTime: "Shortest flight time: 2h 4m",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      title: "Berlin to Cape Town",
      flightTime: "Shortest flight time: 2h 4m",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {travelsection &&
            travelsection.map((item, index) => (
              <div className="col-sm-4">
                <div className="travel-section">
                  <img src={item.img} />
                  <div className="travel-paragrah">
                    <p>{item.title}</p>
                    <p>{item.flightTime}</p>
                    <button
                      className="viewdetails-button"
                      style={{ padding: "0px 10px 0px 10px" }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default BestHotelRoutes;
