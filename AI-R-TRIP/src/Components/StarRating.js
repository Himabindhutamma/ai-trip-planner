// import React, { useState } from "react";
// import "./StarRating.css";

// const StarRating = ({ maxRating = 5, onRatingSelect }) => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   const handleClick = (index) => {
//     setRating(index);
//     if (onRatingSelect) {
//       onRatingSelect(index);
//     }
//   };

//   return (
//     <div className="star-rating">
//       {[...Array(maxRating)].map((_, index) => {
//         const starIndex = index + 1;
//         return (
//           <span
//             key={starIndex}
//             className={`star ${starIndex <= (hover || rating) ? "filled" : ""}`}
//             onClick={() => handleClick(starIndex)}
//             onMouseEnter={() => setHover(starIndex)}
//             onMouseLeave={() => setHover(0)}
//           >
//             &#9733;
//           </span>
//         );
//       })}
//     </div>
//   );
// };

// export default StarRating;
import React from "react";
import "./StarRating.css";

const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div className="star-rating">
      {[...Array(maxRating)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={starIndex}
            className={`star ${starIndex <= rating ? "filled" : ""}`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
