import React, { useState } from "react";
import "./MultiSelectCheckbox.css";

const MultiSelectCheckbox = ({ options, initialVisibleCount, title }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [visibleOptionsCount, setVisibleOptionsCount] =
    useState(initialVisibleCount);

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

  return (
    <div className="multi-select-checkbox">
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
      <div className="checkbox-group">
        <p className="filter-heading">{title}</p>

        {options.slice(0, visibleOptionsCount).map((option, index) => (
          <>
            <label key={index} className="checkbox-label custom-checkbox">
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <span class="checkmark"></span>
                {option.image && (
                  <p>
                    <img src={option.image} className="airline-img" />
                  </p>
                )}

                <p>{option.airline}</p>
              </div>

              <div>
                <p>{option.price}</p>
              </div>
            </label>
          </>
        ))}
        {options.length > initialVisibleCount && (
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

export default MultiSelectCheckbox;
