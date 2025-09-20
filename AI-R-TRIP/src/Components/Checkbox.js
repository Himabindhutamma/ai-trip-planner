import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <label className="checkbox-container">
      <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default Checkbox;
