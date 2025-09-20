import React, { useState } from "react";
import Modal from "../../../Components/Modal"; // Import the Modal component

const Amenities = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showAllbasic, setShowAllbasic] = useState(false);
  const initialLimit = 10;

  const handleToggleShowMore = () => {
    setShowModal(!showModal); // Toggle the modal instead of showing more directly
  };
  const handleShowAll = () => {
    setShowAll(!showAll); // Toggle between showing all or not
  };
  const handleshowAllbasic = () => {
    setShowAllbasic(!showAllbasic);
  };
  const amenitiesList = [
    "Reception",
    "Swimming Pool",
    "Gym",
    "Spa",
    "Free WiFi",
    "Parking",
    "Restaurant",
    "Bar",
    "Conference Room",
    "Laundry Service",
    "Room Service",
    "Airport Shuttle",
    "Fitness Center",
    "Pet Friendly",
    "Business Center",
    "Tennis Court",
    "Kids' Playground",
  ];

  const PopularAmenities = [
    "Reception",
    "Housekeeping",
    "Pool/ Beach towels",
    "Elevator/Lift",
    "Free Parking",
    "Kids' Club",
    "Luggage Assistance",
    "Power Backup",
    "Free Wi-Fi",
    "Pet bowls",
    "Swimming Pool",
    "Kitchenette",
    "Living Room",
    "Wheelchair",
    "Restaurant",
    "Indoor Games",
    "Lawn",
    "Spa",
    "Luggage Storage",
    "Cafe",
    "Outdoor Sports",
  ];
  const BasicFacilities = [
    "Reception",
    "Housekeeping",
    "Pool/ Beach towels",
    "Elevator/Lift",
    "Free Parking",
    "Kids' Club",
    "Luggage Assistance",
    "Power Backup",
    "Free Wi-Fi",
    "Pet bowls",
    "Swimming Pool",
    "Kitchenette",
    "Living Room",
    "Wheelchair",
    "Restaurant",
    "Indoor Games",
    "Lawn",
    "Spa",
    "Luggage Storage",
    "Cafe",
    "Outdoor Sports",
  ];

  const displayedAmenities = amenitiesList.slice(0, initialLimit);
  const firstRowAmenities = displayedAmenities.slice(0, 5);
  const secondRowAmenities = displayedAmenities.slice(5, 10);
  const remainingAmenities = amenitiesList.slice(initialLimit);

  const firstRowPopularAmenities = PopularAmenities.slice(0, 3);
  const secondRowPopularAmenities = PopularAmenities.slice(3, 5);
  const remainingPopularAmenities = PopularAmenities.slice(6);

  const firstRowBasicFacilitiesAmenities = BasicFacilities.slice(0, 3);
  const secondRowBasicFacilitiesAmenities = BasicFacilities.slice(3, 5);
  const remainingbasicAmenities = BasicFacilities.slice(6);

  return (
    <>
      <div className="amenities gaptop16">
        <h4 className="amenities-title">Amenities</h4>
      </div>

      {/* First row of 5 amenities */}
      <ul className="hotel-amenities">
        {firstRowAmenities.map((amenity, index) => (
          <li key={index} className="amenities-item">
            <span className="amenities-item-icon">
              <i className="fa-solid fa-check amenities-icon"></i>
            </span>
            <span className="amenities-item-text">{amenity}</span>
          </li>
        ))}
      </ul>

      {/* Second row of 5 amenities */}
      <ul className="hotel-amenities">
        {secondRowAmenities.map((amenity, index) => (
          <li key={index + 5} className="amenities-item">
            <span className="amenities-item-icon">
              <i className="fa-solid fa-check amenities-icon"></i>
            </span>
            <span className="amenities-item-text">{amenity}</span>
          </li>
        ))}
      </ul>

      {amenitiesList.length > initialLimit && (
        <a onClick={handleToggleShowMore} className="show-more-button">
          {" "}
          +{amenitiesList.length - initialLimit} Amenities
        </a>
      )}

      {/* Modal to display Popular Amenities */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="amenities-modal">
          <h3 className="amenities-h3">
            Amenities at Lakeside Chalet Marriott Executive Apartments
          </h3>
          <p className="text-amenities">Popular Amenities</p>

          {/* First row of 3 Popular Amenities */}
          <ul className="hotel-amenities-modal">
            {firstRowPopularAmenities.map((amenity, index) => (
              <li key={index} className="amenities-item">
                <span className="amenities-item-icon">
                  <i className="fa-solid fa-check amenities-icon"></i>
                </span>
                <span className="amenities-item-text">{amenity}</span>
              </li>
            ))}
          </ul>

          {/* Second row of 3 Popular Amenities */}
          <ul className="hotel-amenities-modal">
            {secondRowPopularAmenities.map((amenity, index) => (
              <li key={index + 3} className="amenities-item">
                <span className="amenities-item-icon">
                  <i className="fa-solid fa-check amenities-icon"></i>
                </span>
                <span className="amenities-item-text">{amenity}</span>
              </li>
            ))}
            {remainingPopularAmenities.length > 0 && !showAll && (
              <a onClick={handleShowAll} className="show-more-link">
                +{remainingPopularAmenities.length} more
              </a>
            )}
          </ul>
          {showAll && (
            <ul className="hotel-amenities-modal">
              {remainingPopularAmenities.map((amenity, index) => (
                <li key={index + 6} className="amenities-item">
                  <span className="amenities-item-icon">
                    <i className="fa-solid fa-check amenities-icon"></i>
                  </span>
                  <span className="amenities-item-text">{amenity}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="text-amenities">Basic Facilities</p>

          {/* First row of 3 Popular Amenities */}
          <ul className="hotel-amenities-modal">
            {firstRowBasicFacilitiesAmenities.map((amenity, index) => (
              <li key={index} className="amenities-item">
                <span className="amenities-item-icon">
                  <i className="fa-solid fa-check amenities-icon"></i>
                </span>
                <span className="amenities-item-text">{amenity}</span>
              </li>
            ))}
          </ul>

          {/* Second row of 3 Popular Amenities */}
          <ul className="hotel-amenities-modal">
            {secondRowBasicFacilitiesAmenities.map((amenity, index) => (
              <li key={index + 3} className="amenities-item">
                <span className="amenities-item-icon">
                  <i className="fa-solid fa-check amenities-icon"></i>
                </span>
                <span className="amenities-item-text">{amenity}</span>
              </li>
            ))}
            {remainingPopularAmenities.length > 0 && !showAllbasic && (
              <a onClick={handleshowAllbasic} className="show-more-link">
                +{remainingbasicAmenities.length} more
              </a>
            )}
          </ul>
          {showAllbasic && (
            <ul className="hotel-amenities-modal">
              {remainingbasicAmenities.map((amenity, index) => (
                <li key={index + 6} className="amenities-item">
                  <span className="amenities-item-icon">
                    <i className="fa-solid fa-check amenities-icon"></i>
                  </span>
                  <span className="amenities-item-text">{amenity}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Amenities;
