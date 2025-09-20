import React, { useState } from "react";
import "./TimeRangeSelector.css";

const TimeRangeSelector = ({ timeRanges, title, bustime }) => {
  const [selectedRanges, setSelectedRanges] = useState([]);

  const handleRangeClick = (range) => {
    if (selectedRanges.includes(range)) {
      setSelectedRanges(selectedRanges.filter((item) => item !== range));
    } else {
      setSelectedRanges([...selectedRanges, range]);
    }
  };

  return (
    <div className="time-range-selector">
      <p className="filter-heading">{title}</p>
      <div className={bustime ? "bus-button-group" : "button-group"}>
        {timeRanges.map((range, index) => (
          <button
            key={index}
            className={
              bustime
                ? `bustime ${selectedRanges.includes(range) ? "selected" : ""}`
                : `time-range-button ${
                    selectedRanges.includes(range) ? "selected" : ""
                  }`
            }
            onClick={() => handleRangeClick(range)}
          >
            <span>
              <img className={bustime && "bustime-icon"} src={range.image} />
            </span>
            <span>{range.timing}</span>
          </button>
        ))}
      </div>
      <div className="selected-ranges">
        {selectedRanges.map((range, index) => (
          <span key={index} className="selected-range">
            {range.timing}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimeRangeSelector;
