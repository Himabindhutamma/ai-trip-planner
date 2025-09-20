import React from "react";
import "./Modal.css"; // Import the CSS for styling

const Modal = ({
  show,
  onClose,
  children,
  centermodalcontent,
  centermodaloverlay,
}) => {
  console.log("children", children);
  if (!show) {
    return null;
  }

  return (
    <div
      className={centermodaloverlay ? centermodaloverlay : "modal-overlay"}
      onClick={onClose}
    >
      <div>
        <button className={"modal-close"} onClick={onClose}>
          &times;
        </button>
        <div
          className={centermodalcontent ? centermodalcontent : "modal-content"}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
