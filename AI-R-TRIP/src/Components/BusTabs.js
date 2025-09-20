import React, { useState } from "react";

const BusTabs = ({ busTabsData, policies }) => {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState(0); // Index of the active tab

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Render tab labels dynamically */}
      <ul className={"bus-tabs"}>
        {busTabsData.map((tab, index) => (
          <li
            key={index}
            className={
              policies
                ? `policyheader ${
                    index === activeTab ? "policy-tab-active" : ""
                  }`
                : `bus-tab ${index === activeTab ? "bus-tab-active" : ""}`
            }
            onClick={() => handleTabClick(index)}
          >
            <span style={{ marginRight: "5px" }}>{tab.label}</span>
            <span>{!policies && <i class="fa-solid fa-angle-down"></i>}</span>
          </li>
        ))}
      </ul>

      {/* Render active tab content */}
      <div className={policies ? "policy-tab-content" : "bus-tab-content"}>
        <p>{busTabsData[activeTab].content}</p>
      </div>

      {/* Optional CSS for basic styling */}
    </div>
  );
};

export default BusTabs;
