import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./scrolltabs.css"; // Add your custom CSS

function ScrollSpyTabs({ sectionsData }) {
  const [activeTab, setActiveTab] = useState(sectionsData[0].id);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabsContainerRef = useRef(null);

  // Function to handle scroll and update the active tab based on section in view
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 120; // Adjusting based on sticky tab height

    sectionsData.forEach((section, index) => {
      const sectionElement = document.getElementById(section.id);
      const nextSectionElement = sectionsData[index + 1]
        ? document.getElementById(sectionsData[index + 1].id)
        : null;

      const sectionOffsetTop = sectionElement.offsetTop;
      const nextSectionOffsetTop = nextSectionElement
        ? nextSectionElement.offsetTop
        : document.body.scrollHeight;

      if (
        scrollPosition >= sectionOffsetTop &&
        scrollPosition < nextSectionOffsetTop
      ) {
        setActiveTab(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
    };
  }, [sectionsData]);

  useEffect(() => {
    const tabsContainer = tabsContainerRef.current;

    // Check if the container overflows horizontally
    if (tabsContainer.scrollWidth > tabsContainer.clientWidth) {
      setShowRightArrow(true);
    } else {
      setShowRightArrow(false);
    }
  }, [sectionsData]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    document.getElementById(tabId).scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollRight = () => {
    const tabsContainer = tabsContainerRef.current;
    tabsContainer.scrollBy({ left: 200, behavior: "smooth" });
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container" style={{ marginTop: "113px" }}>
      <div className="scrolltabs-container">
        {/* Tab navigation */}
        <div className="scrolltabs" ref={tabsContainerRef}>
          <div>
            <span>
              <i className="fa-solid fa-arrow-left" onClick={goBack}></i>
            </span>

            <span style={{ marginLeft: "10px" }}>
              Lakeside Chalet Marriott Executive Apartments
            </span>
          </div>
          {sectionsData.map((section) => (
            <button
              key={section.id}
              className={`scrolltab ${
                activeTab === section.id ? "active" : ""
              }`}
              onClick={() => handleTabClick(section.id)}
            >
              {section.title}
            </button>
          ))}
          {/* Right arrow button */}
          {showRightArrow && (
            <button className="scroll-right-btn" onClick={handleScrollRight}>
              &gt; {/* Right arrow symbol */}
            </button>
          )}
        </div>
      </div>

      {/* Section content */}
      <div className="sections">
        {sectionsData.map((section) => (
          <div id={section.id} key={section.id} className="section">
            <div className="section-padding">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollSpyTabs;
