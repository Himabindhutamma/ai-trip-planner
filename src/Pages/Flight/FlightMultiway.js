import React, { useState } from "react";
import MultiViewCalendar from "../../Components/MultiViewCalendar";
import Dropdown from "../../Components/Dropdownwithincrement";

const FlightMultiway = ({ flightsearch }) => {
  const [cityPairs, setCityPairs] = useState([{ from: "", to: "" }]);

  const traveloptions = [
    { label: "Adult(12+)", value: "adult" },
    { label: "Children(2-11)", value: "child" },
    { label: "Infant(0-2)", value: "infant" },
  ];

  const addCityPair = () => {
    setCityPairs([...cityPairs, { from: "", to: "" }]);
  };

  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  const removeCityPair = (index) => {
    const updatedCityPairs = cityPairs.filter((_, i) => i !== index);
    setCityPairs(updatedCityPairs);
  };

  const handleInputChange = (index, field, value) => {
    const updatedCityPairs = cityPairs.map((pair, i) =>
      i === index ? { ...pair, [field]: value } : pair
    );
    setCityPairs(updatedCityPairs);
  };

  return (
    <form>
      <div>
        <div className="multiway-container">
          {/* First City Pair (Includes Traveler Dropdown) */}
          <div
            key={0}
            className="form-fields-group"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              className="col-12 col-md-3"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div className={flightsearch ? "mform-field" : "form-fields"}>
                {flightsearch ? null : (
                  <label htmlFor={`fromCity0`} className="input-label">
                    From City
                  </label>
                )}

                <input
                  type="text"
                  id={`fromCity0`}
                  className="input-box"
                  placeholder="From City"
                  value={cityPairs[0].from}
                  onChange={(e) => handleInputChange(0, "from", e.target.value)}
                />
              </div>
            </div>
            <div
              className="col-12 col-md-3"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div className={flightsearch ? "mform-field" : "form-fields"}>
                {flightsearch ? null : (
                  <label htmlFor={`toCity0`} className="input-label">
                    To City
                  </label>
                )}

                <input
                  type="text"
                  id={`toCity0`}
                  className="input-box"
                  placeholder="To City"
                  value={cityPairs[0].to}
                  onChange={(e) => handleInputChange(0, "to", e.target.value)}
                />
              </div>
            </div>
            <div
              className="col-12 col-md-2"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div className={flightsearch ? "mform-field" : "form-fields"}>
                {flightsearch ? null : (
                  <label className="input-label">Departure</label>
                )}

                <MultiViewCalendar />
              </div>
            </div>
            <div
              className="col-12 col-md-2"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div
                className={flightsearch ? "mform-field" : "form-fields"}
                style={{ borderRight: "none" }}
              >
                <Dropdown
                  options={traveloptions}
                  onSelect={handleSelect}
                  iconPath={"fa-regular fa-user dropdown-icon"}
                />
              </div>
            </div>

            <div className="col-12 col-md-2">
              <div className="fltt-search-btn">
                <button type="button">Search</button>
              </div>
            </div>
          </div>

          {/* Subsequent City Pairs (Without Traveler Dropdown) */}
          {cityPairs.map((pair, index) => (
            <div
              key={index}
              className="form-fields-group"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div
                className="col-12 col-md-3"
                style={{ borderRight: "1px solid lightgray" }}
              >
                <div className={flightsearch ? "mform-field" : "form-fields"}>
                  {flightsearch ? null : (
                    <label htmlFor={`fromCity${index}`} className="input-label">
                      From City
                    </label>
                  )}

                  <input
                    type="text"
                    id={`fromCity${index}`}
                    className="input-box"
                    placeholder="From City"
                    value={pair.from}
                    onChange={(e) =>
                      handleInputChange(index, "from", e.target.value)
                    }
                  />
                </div>
              </div>
              <div
                className="col-12 col-md-3"
                style={{ borderRight: "1px solid lightgray" }}
              >
                <div className={flightsearch ? "mform-field" : "form-fields"}>
                  {flightsearch ? null : (
                    <label htmlFor={`toCity${index}`} className="input-label">
                      To City
                    </label>
                  )}

                  <input
                    type="text"
                    id={`toCity${index}`}
                    className="input-box"
                    placeholder="To City"
                    value={pair.to}
                    onChange={(e) =>
                      handleInputChange(index, "to", e.target.value)
                    }
                  />
                </div>
              </div>
              <div
                className="col-12 col-md-2"
                style={{ borderRight: "1px solid lightgray" }}
              >
                <div className={flightsearch ? "mform-field" : "form-fields"}>
                  {flightsearch ? null : (
                    <label className="input-label">Departure</label>
                  )}

                  <MultiViewCalendar />
                </div>
              </div>

              {/* Add or Remove Button */}
              <div className="col-12 col-md-2">
                <div style={{ display: "flex" }}>
                  {index === cityPairs.length - 1 ? (
                    <button
                      type="button"
                      onClick={addCityPair}
                      className="add-city-button"
                    >
                      Add Another City
                    </button>
                  ) : (
                    <i
                      className="fa-solid fa-xmark"
                      onClick={() => removeCityPair(index)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default FlightMultiway;
