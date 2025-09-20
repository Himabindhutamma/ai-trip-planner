import React, { useState } from "react";
import ScrollSpyTabs from "../../../Components/ScrollspyTabs";
import SwimmingPool from "./SwimmingPool";

const roomImages = [
  "https://i.travelapi.com/lodging/1000000/790000/788800/788780/66400c67_z.jpg",
  "https://i.travelapi.com/lodging/1000000/790000/788800/788780/1feadb7e_z.jpg",
  "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201202131507131861-257682-56a1ed14769811ebbe0f0242ac110003.jpg",
  "https://r1imghtlak.mmtcdn.com/ea0ef90a634111e987280242ac110003.jpg",
  "https://r1imghtlak.mmtcdn.com/9645f528220911e8870b0a4cef95d023.jpg",
  "https://r1imghtlak.mmtcdn.com/951e3264220911e8b035025f77df004f.jpg",
  "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH70064219045972/QS1042/QS1042-Q1/1659269210972.jpeg",
];

const receptionImages = [
  "https://r1imghtlak.mmtcdn.com/ea0ef90a634111e987280242ac110003.jpg",
];

const swimmingPoolImages = [
  "https://r1imghtlak.mmtcdn.com/29f92cfaeec611eab5560242ac110002.jpg",
  "https://r1imghtlak.mmtcdn.com/98b6b130220911e8870b0a4cef95d023.jpg",
  "https://r1imghtlak.mmtcdn.com/962322fa220911e880f4025f77df004f.jpg",
];

// Component for rendering image gallery with show-more functionality
const ImageGallery = ({ imageUrls, sectionName }) => {
  const [showAllImages, setShowAllImages] = useState(false);

  const handleClick = () => {
    setShowAllImages(true);
  };

  const displayedImages = showAllImages ? imageUrls : imageUrls.slice(0, 6);

  return (
    <div>
      <h3>{sectionName}</h3>
      <div className="row">
        {displayedImages.map((url, index) => (
          <div key={index} className="col-12 col-md-4">
            <p className="hotel-swim-img">
              <img src={url} alt={`Image ${index + 1}`} />
            </p>
            {/* Show +X more photos on the 6th image */}
            {index === 5 && !showAllImages && (
              <div className="more-hotel-photos" onClick={handleClick}>
                +{imageUrls.length - 6} photos
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const HotelGallery = () => {
  const sectionsData = [
    {
      id: "section1",
      title: "Swimming Pool",
      content: <ImageGallery imageUrls={swimmingPoolImages} />,
    },
    {
      id: "section2",
      title: "Room",
      content: <ImageGallery imageUrls={roomImages} />,
    },
    {
      id: "section3",
      title: "Reception",
      content: <ImageGallery imageUrls={receptionImages} />,
    },
  ];

  return (
    <div className="" style={{ backgroundColor: "#f2f2f2" }}>
      <ScrollSpyTabs sectionsData={sectionsData} />
    </div>
  );
};

export default HotelGallery;
