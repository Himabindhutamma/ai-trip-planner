import React, { useState } from "react";
import "./Dropdown.css"; // Optional: For custom styles
import SelectDropdown from "./SelectDropdown";

const Dropdown = ({ options, onSelect, iconPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Explicitly set "Adults" count to 1 by default
  const [optionValues, setOptionValues] = useState(
    options.map((option) => ({
      ...option,
      count: option.label === "Adult(12+)" ? 1 : 0, // Set "Adults" to 1 by default
    }))
  );
  console.log("optionValues", optionValues);
  const [dropdownValue, setDropdownValue] = useState(options[0].value);

  const dropdownOptions = [
    { value: "economy", label: "Economy" },
    { value: "premiumeconomy", label: "Premium Economy" },
    { value: "business", label: "Business" },
    { value: "first", label: "First" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Function to get the total count of travelers
  const getTotalCount = () => {
    return optionValues.reduce((total, opt) => total + opt.count, 0);
  };

  // Increment the count for a specific option
  const incrementCount = (index) => {
    const total = getTotalCount();
    if (total < 9) {
      const updatedOptions = optionValues.map((opt, i) =>
        i === index ? { ...opt, count: opt.count + 1 } : opt
      );
      setOptionValues(updatedOptions);
    }
  };

  // Decrement the count for a specific option
  const decrementCount = (index) => {
    const isAdult = optionValues[index].label === "Adults";
    const currentCount = optionValues[index].count;

    if (isAdult && currentCount > 1) {
      const updatedOptions = optionValues.map((opt, i) =>
        i === index ? { ...opt, count: opt.count - 1 } : opt
      );
      setOptionValues(updatedOptions);
    } else if (!isAdult && currentCount > 0) {
      const updatedOptions = optionValues.map((opt, i) =>
        i === index ? { ...opt, count: opt.count - 1 } : opt
      );
      setOptionValues(updatedOptions);
    }
  };

  // Function to generate the display text based on traveler count
  const getSelectedSummary = () => {
    const totalCount = getTotalCount();
    return totalCount === 1 ? "1 Traveler" : `${totalCount} Travelers`;
  };

  return (
    <div className="multi-dropdown">
      {iconPath && <i className={iconPath} />}
      <button
        type="button"
        className="dropdown-toggle-multi"
        onClick={toggleDropdown}
      >
        {getSelectedSummary()}
      </button>

      {isOpen && (
        <ul className="multi-dropdown-menu" style={{ display: "block" }}>
          <SelectDropdown
            options={dropdownOptions}
            onSelect={setDropdownValue}
          />
          {optionValues.map((option, index) => (
            <li key={option.value} className="multi-dropdown-item">
              <span>{option.label}</span>
              <div className="counter">
                <button
                  type="button"
                  className="decrement"
                  onClick={() => decrementCount(index)}
                >
                  -
                </button>
                <span className="count">{option.count}</span>
                <button
                  type="button"
                  className="increment"
                  onClick={() => incrementCount(index)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
