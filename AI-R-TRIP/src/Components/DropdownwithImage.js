import React, { useState } from "react";
import "./Dropdownwithincrement";

const DropdownwithImage = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption ? (
          <div className="selected-option">
            <img
              src={selectedOption.img}
              alt={selectedOption.text}
              className="dropdown-image"
            />
            <span>{selectedOption.text}</span>
          </div>
        ) : (
          "Select an option"
        )}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              <img
                src={option.img}
                alt={option.text}
                className="dropdown-image"
              />
              <span>{option.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownwithImage;
