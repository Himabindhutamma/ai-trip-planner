import React, { useState } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ min, max, step, initialValue, title }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const calculateTooltipPosition = () => {
    const percent = ((value - min) / (max - min)) * 100;
    return `calc(${percent}% + (${8 - percent * 0.15}px))`;
  };

  return (
    <div className="range-slider">
      <p className="filter-heading">{title}</p>
      <div className="slider-values">
        <span>{formatCurrency(min)}</span>
        <span>{formatCurrency(max)}</span>
      </div>
      <div className="slider-container">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="slider"
          style={{
            background: `linear-gradient(to right, #007bff ${
              ((value - min) / (max - min)) * 100
            }%, #ddd ${((value - min) / (max - min)) * 100}%)`,
          }}
        />
        {/* <span
          className="slider-tooltip"
          style={{ left: calculateTooltipPosition() }}
        >
          {formatCurrency(value)}
        </span> */}
        <div
          className="rangeslider__handle"
          style={{ left: calculateTooltipPosition() }}
        >
          <div className="rangeslider__handle-label">
            {formatCurrency(value)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
