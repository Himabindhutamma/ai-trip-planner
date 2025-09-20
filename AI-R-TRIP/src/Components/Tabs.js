import React, { useEffect, useState, useRef } from "react";
import "./Tabs.css";

const Tabs = ({
  tabs,
  title,
  storageKey,
  maxVisibleTabs,
  flightClass,
  flightHeaderTab,
  flightContent,
}) => {
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
    <div className="container" style={{ marginTop: "50px" }}>
      <div>
        <h1 className="head-text">{title}</h1>
      </div>
      <div className="tabs-container">
        <div className={`${flightHeaderTab ? flightHeaderTab : "tabs-header"}`}>
          {visibleTabs.map((item, index) => (
            <button
              key={index}
              className={`${flightClass ? flightClass : "tab-button"}  ${
                activeTab === item.label ? "active" : ""
              }`}
              onClick={() => handleTabClick(item.label)}
            >
              {item.label}
            </button>
          ))}
          {maxVisibleTabs && moreTabs.length > 0 && (
            <div className="tabs-dropdown">
              <button
                className="tab-button tabs-dropdown-toggle"
                onClick={handleDropdownToggle}
              >
                View More
              </button>
              {isDropdownOpen && (
                <div className="tabs-dropdown-content">
                  {moreTabs.map((item, index) => (
                    <div
                      key={index}
                      className={`tabs-dropdown-item ${
                        activeTab === item.label ? "tabs-active" : ""
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
        <div className={`${flightContent ? flightContent : "tab-content"}`}>
          {tabs.map((item, index) => (
            <div
              key={index}
              className={`tab-panel ${
                activeTab === item.label ? "active" : ""
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

export default Tabs;
