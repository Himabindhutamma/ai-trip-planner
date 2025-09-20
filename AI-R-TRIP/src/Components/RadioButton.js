import React, { useEffect, useState } from "react";
import "../Pages/Flight/Flight.css";

const RadioButton = ({ items, onSelect }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    if (onSelect) onSelect(selectedValue);
  };

  return (
    <div className="radio-button-group">
      {items.map((item) => (
        <div key={item.value} className="radio-button-item">
          <input
            name="customRadio"
            id={item.value}
            type="radio"
            value={item.value}
            checked={value === item.value}
            onChange={handleChange}
          />
          <label
            htmlFor={item.value}
            className={value === item.value ? "active" : ""}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
