import React, { useState } from "react";

// Dummy data for example
const data = [
  { name: "Item 1", price: 300, rating: 4.5, relevance: 90 },
  { name: "Item 2", price: 150, rating: 3.5, relevance: 80 },
  { name: "Item 3", price: 200, rating: 5.0, relevance: 85 },
  { name: "Item 4", price: 400, rating: 4.0, relevance: 95 },
];

// Configuration for dynamic sorting buttons
const sortingOptions = [
  { key: "relevance", label: "Relevance" },
  { key: "price", label: "Cheapest" },
  { key: "rating", label: "Rating" },
];

const SortingComponent = () => {
  const [items, setItems] = useState(data); // State to hold the sorted items
  const [sortConfig, setSortConfig] = useState({
    key: "relevance", // Default sorting key
    direction: "asc", // Default sorting direction
  });

  // Sorting function
  const sortItems = (key) => {
    let sortedItems = [...items];
    const direction = sortConfig.direction === "asc" ? "desc" : "asc"; // Toggle sorting direction

    // Sort the array based on the key
    sortedItems.sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    // Update the sorted items and sorting configuration
    setItems(sortedItems);
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <p>
        {sortingOptions.map((option) => (
          <button key={option.key} onClick={() => sortItems(option.key)}>
            {option.label}{" "}
            {sortConfig.key === option.key
              ? sortConfig.direction === "asc"
                ? "↑"
                : "↓"
              : ""}
          </button>
        ))}
      </p>

      {/* Display Sorted Items */}
      {/* <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} - {item.rating} stars - {item.relevance}
            % relevance
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SortingComponent;
