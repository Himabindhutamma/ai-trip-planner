import React from "react";
import Bombay from "../../assets/Bombay.png";
import Delhiagra from "../../assets/Delhiagra.png";
import Berlin from "../../assets/Berlin.png";
import Newyork from "../../assets/Newyork.png";

const TopBuses = () => {
  const bestFlights = [
    {
      img: "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg",
      airlines: "Paris",
    },
    {
      img: Newyork,
      airlines: "New York",
    },
    {
      img: Berlin,
      airlines: "Berlin",
    },
    {
      img: Delhiagra,
      airlines: "Delhi",
    },
    {
      img: Bombay,
      airlines: "Bombay/Mumbai",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {bestFlights &&
            bestFlights.map((flights, index) => (
              <>
                <div className="col-sm-3">
                  <div className="best-flight__card">
                    <img className="best-flight__img" src={flights.img} />
                    <h3>{flights.airlines}</h3>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button className="viewdetails-button">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default TopBuses;
