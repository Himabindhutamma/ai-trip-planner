import React, { useState } from "react";
import "./NestedDropdown.css"; // Import CSS for styling

const NestedDropdown = () => {
  // States to store dropdown values
  const [rooms, setRooms] = useState(1);
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle the dropdown

  // Handle the Apply button click
  const handleApply = () => {
    alert(`Rooms: ${rooms}, Children: ${children}, Adults: ${adults}`);
  };

  return (
    <div className="nested-dropdown">
      {/* Main Dropdown Button */}
      <div
        className="nested-dropdown-toggle"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {rooms}Rooms, {adults}Adults, {children}Children
      </div>

      {dropdownOpen && (
        <div className="nested-dropdown-menu">
          {/* Rooms Dropdown */}
          <div className="nested-dropdown-item">
            <label htmlFor="rooms">Rooms </label>
            <select
              id="rooms"
              value={rooms}
              onChange={(e) => setRooms(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((roomOption) => (
                <option key={roomOption} value={roomOption}>
                  {roomOption}
                </option>
              ))}
            </select>
          </div>

          {/* Children Dropdown */}
          <div className="nested-dropdown-item">
            <label htmlFor="children">Children </label>
            <select
              id="children"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
            >
              {[...Array(41).keys()].map((childrenOption) => (
                <option key={childrenOption} value={childrenOption}>
                  {childrenOption}
                </option>
              ))}
            </select>
          </div>

          {/* Adults Dropdown */}
          <div className="nested-dropdown-item">
            <label htmlFor="adults">Adults </label>
            <select
              id="adults"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
            >
              {[...Array(41).keys()].slice(1).map((adultsOption) => (
                <option key={adultsOption} value={adultsOption}>
                  {adultsOption}
                </option>
              ))}
            </select>
          </div>

          {/* Apply Button */}
          <div className="nsted-apply-btn">
            <button className="nested-apply-btn" onClick={handleApply}>
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;
