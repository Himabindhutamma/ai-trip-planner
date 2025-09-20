import React, { useEffect, useState, useRef } from "react";
import "./Tabs.css";

const FlightTabs = ({ tabs, title, storageKey, maxVisibleTabs }) => {
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem(storageKey);
    return savedTab ? savedTab : tabs[0].label;
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleTabClick = (label) => {
    setActiveTab(label);
    localStorage.setItem(storageKey, label);
    setIsDropdownOpen(false); // Close dropdown when a tab is selected
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  useEffect(() => {
    const savedTab = localStorage.getItem(storageKey);
    if (savedTab) {
      setActiveTab(savedTab);
    } else {
      setActiveTab(tabs[0].label); // Default to the first tab if no saved state
    }
  }, [tabs, storageKey]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const visibleTabs = tabs.slice(0, maxVisibleTabs);
  const moreTabs = tabs.slice(maxVisibleTabs);

  return (
    <div className="">
      <div>
        <h1 className="head-text">{title}</h1>
      </div>
      <div className="flight-tabs-container">
        <div className="flight-tabs-header">
          {visibleTabs.map((item, index) => (
            <button
              key={index}
              className={`flight-tab-button ${
                activeTab === item.label ? "flight-tab-active" : ""
              }`}
              onClick={() => handleTabClick(item.label)}
            >
              {item.label}
            </button>
          ))}
          {maxVisibleTabs && moreTabs.length > 0 && (
            <div className="flight-tabs-dropdown">
              <button
                className="flight-tab-button flight-tabs-dropdown-toggle"
                onClick={handleDropdownToggle}
              >
                View More
              </button>
              {isDropdownOpen && (
                <div className="flight-tabs-dropdown-content">
                  {moreTabs.map((item, index) => (
                    <div
                      key={index}
                      className={`flight-tabs-dropdown-item ${
                        activeTab === item.label ? "flight-tab-active" : ""
                      }`}
                      onClick={() => handleTabClick(item.label)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flight-tab-content">
          {tabs.map((item, index) => (
            <div
              key={index}
              className={`flight-tab-panel ${
                activeTab === item.label ? "flight-tabs-active" : ""
              }`}
            >
              {activeTab === item.label && item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightTabs;
