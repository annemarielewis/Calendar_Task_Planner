import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DatePicker from "react-datepicker";

export default function UpdateEvent() {
  let { id } = useParams();
  // ^grabbing the event id out of the url

  const [event, setEvent] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/${id}`);
        console.log(response);
        // Update data state with the fetched data
        let eventData = response.data;
        console.log("eventdata:", eventData);
        eventData.start = new Date(eventData.start);
        eventData.end = new Date(eventData.end);
        // console.log(eventData);
        setEvent(eventData);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    // Call the fetchData function when the component mounts
    fetchData();
  }, [id]); // The empty dependency array means this effect runs once when the component mounts

  const [updateFormData, setUpdateFormData] = useState({
    // title: event.title,
    // start: event.start,
    // end: event.end,
  });

  const handleUpdate = async () => {
    try {
      const updatedData = {
        title: event.title,
        start: event.start,
        end: event.end,
      };
      const response = await axios.put(
        `http://localhost:3001/updatetask/${id}`,
        updatedData
      );
      const updatedTask = response.data;

      setAllEvents((currentEvents) =>
        currentEvents.map((event) => (event._id === id ? updatedTask : event))
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle start date change
  const handleStartDateChange = (date) => {
    // console.log(date);
    setEvent({ ...event, start: date });
    setUpdateFormData({ ...updateFormData, start: date });
  };

  // Function to handle end date change
  const handleEndDateChange = (date) => {
    setEvent({ ...event, end: date });
    setUpdateFormData({ ...updateFormData, end: date });
  };

  console.log(event);
  //  guard clause: front end app moves so fast, if something in the component takes 10 ms to load, react will say "event is undefinined" -->crash
  if (!event) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleUpdate}>
        <h3>Update "{event.title}": </h3>
        <div className="AIF-container">
          {/* Task input */}

          <div className="title">
            <input
              className="title"
              id="title"
              type="text"
              placeholder={event.title}
              style={{ width: "92%", height: "1.2rem", marginRight: "10px" }}
              value={event.title}
              onChange={(e) => {
                // setAddEvent({ ...addEvent, title: e.target.value });
                setUpdateFormData({ ...updateFormData, title: e.target.value });
              }}
            />
          </div>
          {/* Start date input */}
          <div className="startdate">
            <DatePicker
              className="startdate"
              id="start"
              placeholderText={event.start}
              style={{ marginRight: "5rem" }}
              // selected={event.start}
              onChange={handleStartDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          {/* End date input */}
          <div className="enddate">
            <DatePicker
              className="enddate"
              placeholderText={event.end}
              id="end"
              // selected={event.end}
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
