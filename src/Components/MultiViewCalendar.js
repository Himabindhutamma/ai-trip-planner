import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // import the styles

const MultiViewCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false); // Close the calendar after selecting a date
    console.log("Selected Date:", date);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <input
        type="text"
        value={formatDate(selectedDate)}
        onClick={toggleCalendar}
        readOnly
        placeholder="Select a date"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "117px",
          border: "none",
        }}
      />
      {isCalendarOpen && (
        <div style={{ position: "absolute", zIndex: 1 }}>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            selectRange={false} // If you want to allow range selection, set this to true
            showDoubleView={true} // This prop shows two months side by side
          />
        </div>
      )}
    </div>
  );
};

export default MultiViewCalendar;
