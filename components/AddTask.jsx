import React from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTask(props) {
  const { addEvent, setAddEvent, handleAddEvent, formData, setFormData } =
    props;

  // Function to handle start date change
  const handleStartDateChange = (date) => {
    // console.log(date);
    setAddEvent({ ...addEvent, start: date });
    setFormData({ ...formData, start: date });
  };

  // Function to handle end date change
  const handleEndDateChange = (date) => {
    setAddEvent({ ...addEvent, end: date });
    setFormData({ ...formData, end: date });
  };

  // console.log(formData);

  return (
    <>
      <form autoComplete="off" onSubmit={handleAddEvent}>
        <div className="AIF-container">
          {/* Task input */}
          <div className="title">
            <input
              className="title"
              id="title"
              type="text"
              placeholder="Title"
              style={{ width: "92%", height: "1.2rem", marginRight: "10px" }}
              value={addEvent.title}
              onChange={(e) => {
                setAddEvent({ ...addEvent, title: e.target.value });
                setFormData({ ...formData, title: e.target.value });
              }}
            />
          </div>
          {/* Start date input */}
          <div className="startdate">
            <DatePicker
              className="startdate"
              id="start"
              placeholderText="Start Date"
              style={{ marginRight: "5rem" }}
              selected={addEvent.start}
              onChange={handleStartDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          {/* End date input */}
          <div className="enddate">
            <DatePicker
              className="enddate"
              placeholderText="End Date"
              id="end"
              selected={addEvent.end}
              onChange={handleEndDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          {/* Submit button */}
          <div className="btn">
            <button type="submit" className="submit-event">
              Submit
            </button>
          </div>
          {/* Cancel link */}
          <Link to="/">
            <button className="exit-btn">X</button>
          </Link>
        </div>
      </form>
    </>
  );
}
