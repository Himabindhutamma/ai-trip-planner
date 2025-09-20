import React, { useState, useEffect } from "react";
import abouthotelData from "./HotelJson/abouthotel.json";

const AboutHotel = () => {
  const [abouthotel, setAboutHotel] = useState([]);
  useEffect(() => {
    setAboutHotel(abouthotelData.abouthotel);
  }, []);
  return (
    <div className="">
      {abouthotel.map((i, j) => (
        <div>
          <div className="about-hotel">
            <h3 className="">{i.hotelname}</h3>
            <h4 className="hoteldesc">
              <b>{i.hoteldescription}</b>
            </h4>
          </div>
          <div style={{ padding: " 20px 40px" }}>
            <h4 className="pro-high">Property Highlights</h4>
            <ul className="about-hotel-ul">
              {i.propertyhighlights &&
                i.propertyhighlights.map((item, index) => (
                  <li>
                    <span>{item.title}</span>
                  </li>
                ))}
            </ul>
            <div className="abt-htl-img">
              <img src={i.image1} />
            </div>
          </div>
          <div style={{ padding: " 20px 40px" }}>
            <h4 className="pro-high">Activities & Nearby Attractions</h4>
            <ul className="about-hotel-ul">
              {i.activities &&
                i.activities.map((item, index) => (
                  <li>
                    <span>{item.title}</span>
                  </li>
                ))}
            </ul>
            <div className="abt-htl-img">
              <img src={i.image2} />
            </div>
          </div>
          <div style={{ padding: " 20px 40px" }}>
            <h4 className="pro-high">How to Reach the Property</h4>
            <p>
              <span>{i.howtoreach}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AboutHotel;
