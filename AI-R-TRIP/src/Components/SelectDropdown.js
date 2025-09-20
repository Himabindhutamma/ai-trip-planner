// import React, { useState, useEffect } from "react";
// import "../Pages/Flight/Flight.css";

// const SelectDropdown = ({ options, onSelect, defaultValue }) => {
//   const [counts, setCounts] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//   });

//   // Initialize state with default values
//   useEffect(() => {
//     if (defaultValue) {
//       setCounts(defaultValue);
//     }
//   }, [defaultValue]);

//   const handleIncrement = (type) => {
//     setCounts((prevCounts) => ({
//       ...prevCounts,
//       [type]: prevCounts[type] + 1,
//     }));
//     if (onSelect) onSelect(type, counts[type] + 1);
//   };

//   const handleDecrement = (type) => {
//     setCounts((prevCounts) => ({
//       ...prevCounts,
//       [type]: Math.max(prevCounts[type] - 1, 0),
//     }));
//     if (onSelect) onSelect(type, Math.max(counts[type] - 1, 0));
//   };

//   const handleChange = (type, e) => {
//     const selectedValue = parseInt(e.target.value, 10);
//     setCounts({
//       ...counts,
//       [type]: selectedValue,
//     });
//     if (onSelect) onSelect(type, selectedValue);
//   };

//   return (
//     // <div className="select-dropdown">
//     <select>
//       {options.map((option) => (
//         <div key={option.value} className="selector-group">
//           <label>{option.label}:</label>
//           <div className="selector-controls">
//             <button onClick={() => handleDecrement(option.value)}>-</button>
//             <select
//               value={counts[option.value]}
//               onChange={(e) => handleChange(option.value, e)}
//             >
//               {[...Array(10).keys()].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//             <button onClick={() => handleIncrement(option.value)}>+</button>
//           </div>
//         </div>
//       ))}
//     </select>
//     // </div>
//   );
// };

// export default SelectDropdown;
// import React, { useState, useEffect } from "react";
// import "../Pages/Flight/Flight.css";

// const SelectDropdown = ({ onSelect, defaultValue }) => {
//   const [counts, setCounts] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//   });

//   const [selectedCategory, setSelectedCategory] = useState("adults");

//   useEffect(() => {
//     if (defaultValue) {
//       setCounts(defaultValue);
//     }
//   }, [defaultValue]);

//   const handleIncrement = () => {
//     setCounts((prevCounts) => {
//       const newCounts = {
//         ...prevCounts,
//         [selectedCategory]: prevCounts[selectedCategory] + 1,
//       };
//       if (onSelect) onSelect(selectedCategory, newCounts[selectedCategory]);
//       return newCounts;
//     });
//   };

//   const handleDecrement = () => {
//     setCounts((prevCounts) => {
//       const newCounts = {
//         ...prevCounts,
//         [selectedCategory]: Math.max(prevCounts[selectedCategory] - 1, 0),
//       };
//       if (onSelect) onSelect(selectedCategory, newCounts[selectedCategory]);
//       return newCounts;
//     });
//   };

//   const handleChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const formatSummary = () => {
//     const summary = [];
//     if (counts.adults > 0)
//       summary.push(`${counts.adults} adult${counts.adults > 1 ? "s" : ""}`);
//     if (counts.children > 0)
//       summary.push(
//         `${counts.children} child${counts.children > 1 ? "ren" : ""}`
//       );
//     if (counts.infants > 0)
//       summary.push(`${counts.infants} infant${counts.infants > 1 ? "s" : ""}`);
//     return summary.join(", ");
//   };

//   return (
//     <div className="select-dropdown">
//       <div className="dropdown-group">
//         <label>Select category:</label>
//         <select onChange={handleChange} value={selectedCategory}>
//           <option value="adults">Adults</option>
//           <option value="children">Children</option>
//           <option value="infants">Infants</option>
//         </select>
//       </div>

//       <div className="selector-group">
//         <label>
//           {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
//           :
//         </label>
//         <div className="selector-controls">
//           <button onClick={handleDecrement}>-</button>
//           <span>{counts[selectedCategory]}</span>
//           <button onClick={handleIncrement}>+</button>
//         </div>
//       </div>

//       <div className="summary">
//         <label>Selected:</label>
//         <span>{formatSummary()}</span>
//       </div>
//     </div>
//   );
// };

// export default SelectDropdown;
import React from "react";
import "../Pages/Flight/Flight.css";

const SelectDropdown = ({
  options,
  onSelect,
  defaultValue,
  icon,
  iconPath,
  ...props
}) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (onSelect) onSelect(selectedValue);
  };

  return (
    <div className="select-dropdown-container">
      {icon && <img src={icon} alt="icon" className="dropdown-icon" />}
      {iconPath && <i className={iconPath} />}
      <select
        className=""
        onChange={handleChange}
        value={defaultValue}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
