import React, { useState } from "react";
import Modal from "./Modal";
import "./ReadMore.css"; // Import CSS for styling

const ReadMore = ({ text, maxLength = 120, children }) => {
  console.log("text", text);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false); // Collapse if already expanded
    } else {
      setShowModal(true); // Show modal if Read More is clicked
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // Truncate text if it's longer than maxLength
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "." : text;

  return (
    <div className="readmore-container">
      <p>
        {truncatedText}
        {text.length > maxLength && (
          <button onClick={handleToggle} className="readmore-button">
            Read More
          </button>
        )}
      </p>
      <Modal show={showModal} onClose={handleCloseModal} children={children} />
    </div>
  );
};

export default ReadMore;
