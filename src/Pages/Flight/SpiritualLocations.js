import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Flight/Flight.css";
import bodhgaya from "../../../src/assets/bodhgaya.png";
import mecca from "../../../src/assets/mecca.jpg";
import varanasi from "../../../src/assets/varanasi.png";
import Jerusalem from "../../../src/assets/Jerusalem.jpeg";

const SpiritualLocations = () => {
  const dataDigitalBestSeller = [
    {
      id: 1,
      title: "Varanasi, India",
      linkImg: varanasi,
    },
    {
      id: 2,
      title: "Jerusalem, Israel",
      linkImg: Jerusalem,
    },
    {
      id: 3,
      title: "Mecca, Saudi Arabia",
      linkImg: mecca,
    },
    {
      id: 4,
      title: "Bodh Gaya, India",
      linkImg: bodhgaya,
    },
  ];

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div>{/* <h1 className="head-text">Spiritual Locations</h1> */}</div>
      <div className="row">
        <div className="col-sm-4">
          <img src={mecca} />
          <span className="sp-span">Mecca, Saudi Arabia</span>
        </div>
        <div className="col-sm-4">
          <div>
            <img src={varanasi} className="sp-img" />
            <span className="sp-span">Varanasi, India</span>
          </div>
          <div>
            <img src={bodhgaya} className="sp-img" />
            <span className="sp-span">Bodh Gaya, India</span>
          </div>
        </div>
        <div className="col-sm-4">
          <div>
            <img src={Jerusalem} style={{ height: "560px" }} />
            <span className="sp-span">Jerusalem, Israel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpiritualLocations;
