import React, { useState } from "react";
import "./MultiSelectCheckbox.css";

const MultiSelectwithSearch = ({ options, initialVisibleCount, title }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [visibleOptionsCount, setVisibleOptionsCount] =
    useState(initialVisibleCount);
  const [searchQuery, setSearchQuery] = useState(""); // State to track the search query

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const removeOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const handleToggleVisibleOptions = () => {
    if (visibleOptionsCount === initialVisibleCount) {
      setVisibleOptionsCount(options.length);
    } else {
      setVisibleOptionsCount(initialVisibleCount);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter options based on search query
  const filteredOptions = options.filter((option) =>
    option.airline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="multi-select-checkbox">
      {/* Selected Options */}
      <div className="selected-options">
        {selectedOptions.map((option, index) => (
          <div key={index} className="selected-item">
            {option.airline}
            <span
              className="remove-option"
              onClick={() => removeOption(option)}
            >
              &#10005;
            </span>
          </div>
        ))}
      </div>

      {/* Checkbox Group */}
      <div className="checkbox-group">
        <p className="filter-heading">{title}</p>
        {/* Search Input */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {filteredOptions.slice(0, visibleOptionsCount).map((option, index) => (
          <label key={index} className="checkbox-label custom-checkbox">
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className="checkmark"></span>
              {option.image && (
                <p>
                  <img
                    src={option.image}
                    className="airline-img"
                    alt="Airline"
                  />
                </p>
              )}
              <p>{option.airline}</p>
            </div>
            <div>
              <p>{option.price}</p>
            </div>
          </label>
        ))}

        {/* Show More/Show Less Button */}
        {filteredOptions.length > initialVisibleCount && (
          <button
            className="toggle-button"
            onClick={handleToggleVisibleOptions}
          >
            {visibleOptionsCount === initialVisibleCount
              ? "Show More"
              : "Show Less"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiSelectwithSearch;
