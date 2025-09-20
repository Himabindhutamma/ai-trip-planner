import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import googleplaystore from "../assets/google-playstore.png";
import applestore from "../assets/apple-store.webp";
import {
  faFacebook,
  faSquareXTwitter,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    alert(`Button clicked with input: ${inputValue}`);
  };

  const footerLinks = [
    {
      title: "COMPANY",
      links: [
        { text: "Corporate policies", url: "" },
        { text: "Investor relations", url: "" },
        { text: "Sustainability", url: "" },
        { text: "Sponsorships", url: "" },
        { text: "Tender Notices", url: "" },
      ],
    },
    {
      title: "CAREERS",
      links: [
        { text: "Why join Medibliss?", url: "" },
        { text: "Cabin Crew", url: "" },
        { text: "Pilots", url: "" },
        { text: "Ground Professionals", url: "" },
        { text: "Scholarships & Internships", url: "" },
      ],
    },
    {
      title: "SECURITY & TRANSPARENCY",
      links: [
        { text: "Corporate Delay contingency plans", url: "" },
        { text: "Customer Service Plan", url: "" },
        { text: "Passenger Rights and Regulations", url: "" },
        { text: "Keeping your data safe", url: "" },
        { text: "Privacy policy", url: "" },
        { text: "Cookie policy", url: "" },
        { text: "Terms & conditions", url: "" },
        { text: "Report vulnerability", url: "" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { text: "FAQS", url: "" },
        { text: "Help", url: "" },
        { text: "Medibliss the chatbot", url: "" },
        { text: "Contact us", url: "" },
        { text: "Feedback", url: "" },
        { text: "Manage voucher", url: "" },
        { text: "User Engagement Programme", url: "" },
      ],
    },
    {
      title: "QUICK LINKS",
      links: [
        { text: "Flights", url: "/flights" },
        { text: "Hotels", url: "/hotels" },
        { text: "Buses", url: "/buses" },
        { text: "Transfers", url: "/transfers" },
        { text: "Car", url: "/car" },
        { text: "Activities", url: "/activities" },
        { text: "Holidays", url: "/holidays" },
        { text: "Print Voucher", url: "/print-voucher" },
      ],
    },
  ];
  return (
    <div>
      <div className="download-app">
        <div className="row">
          <div className="col-sm-6" style={{ padding: "30px 30px 40px 90px" }}>
            Download App Now !
            <p>
              Use code <strong>WELCOMEHJ</strong> and get{" "}
              <strong>FLAT 12 %</strong> OFF* on your first domestic flight
              booking
            </p>
            <input
              className="get-app-link"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter Mobile Number"
            />
            <button className="get-app-btn" onClick={handleButtonClick}>
              GET APP LINK
            </button>
          </div>
          <div className="col-sm-6" style={{ padding: "30px 30px 40px 90px" }}>
            <div style={{ display: "contents" }}>
              <img src={googleplaystore} style={{ width: "40%" }} />
            </div>
            <img src={applestore} style={{ width: "40%" }} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="tp__footer section__padding">
          <div className="tp__footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="tp__footer-links-div">
                <h4>{section.title}</h4>
                {section.links.map((link, linkIndex) => (
                  <Link key={linkIndex} to={link.url}>
                    <p>{link.text}</p>
                  </Link>
                ))}
              </div>
            ))}
            <div className="tp__footer-links-div">
              <h4>Support</h4>
              <Link to="">
                <p>Phone: +91-9703790616</p>
              </Link>
              <Link to="">
                <p>Email:info@happyjourney.life</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="socialmedia">
            <p>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </p>
            <p>
              <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </p>
            <p>
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
            </p>
          </div>
        </div>
        <hr></hr>
        {/* <div className="tp__footer-below">
        <div className="tp__footer-copy-right">
          <p>
            @{new Date().getFullYear()} srikaalikatechnologies. All right
            reserved.
          </p>
        </div>
        <div
          className="tp__footer-below-links
        "
        >
          <Link to={""}>
            <div>
              <p>Terms & Conditions</p>
            </div>
          </Link>
          <Link to={""}>
            <div>
              <p>Privacy</p>
            </div>
          </Link>
        </div>
      </div> */}
        <div className="">
          <p style={{ textAlign: "center" }}>
            {" "}
            Booking.com is part of Booking Holdings Inc., the world leader in
            online travel and related services.
          </p>
          <div className="tp__footer-copy-right">
            <p>
              @{new Date().getFullYear()} mediblisstransactions. All right
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
