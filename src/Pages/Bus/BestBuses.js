import React from "react";

const BestBuses = () => {
  const bestFlights = [
    {
      img: "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg",
      airlines: "Emirates",
      place: "Dubai to New York",
    },
    {
      img: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
      airlines: "Qatar Airways",
      place: "Doha to London",
    },
    {
      img: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
      airlines: "Singapore Airlines",
      place: "Singapore to Sydney",
    },
    {
      img: "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg",
      airlines: "Cathay Pacific",
      place: "Hong Kong to Los Angeles",
    },
    {
      img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
      airlines: "Lufthansa",
      place: "Frankfurt to Tokyo",
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
                    <p>{flights.place}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default BestBuses;
