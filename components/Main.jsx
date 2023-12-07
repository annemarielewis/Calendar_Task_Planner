//Main.js purpose = to put all of the routes. Main.js is not requres (the routes could go in index)
// but it's neater this way and more modular

// library imports:
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Route, Routes } from "react-router-dom";
import enUSLocale from "date-fns/locale/en-US";
import addDays from "date-fns/addDays";
//component imports:
import events from "./dummy_test_data.js";
import AddTask from "./AddTask";
import Quote from "./Quote";
// import Partner from "./Partner";
import Choices from "./Choices";
import { setHours, setMinutes } from "date-fns";
import CustomEvent from "./CustomEvent";
import axios from "axios";

const locales = {
  "en-US": enUSLocale,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function Main() {
  const initialState = { title: "", start: "", end: "" };
  const [addEvent, setAddEvent] = useState(initialState);
  const [allEvents, setAllEvents] = useState([]);

  //add task to database
  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
  });

  // useEffect setup: calling what's in the db only on pageload-->prevents endless axios calls crashing the system!
  // (why we need usestate to display a user's added info right after they add it --> so teh info can display before the page reloads!)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/tasks");
        console.log(response);
        // Update data state with the fetched data
        let eventData = response.data;
        console.log("eventdata:", eventData);
        eventData.forEach((event) => {
          event.start = new Date(event.start);
          event.end = new Date(event.end);
        });
        console.log(eventData);
        setAllEvents(eventData);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array means this effect runs once when the component mounts

  async function handleAddEvent(event) {
    event.preventDefault();
    // state logic:
    setAddEvent(initialState);
    // console.log(formData);
    //db logic
    try {
      const response = await axios.post(
        "http://localhost:3001/newtask",
        formData
      );
      setAllEvents([...allEvents, response.data.taskData]);
      console.log("data", response.data.taskData);
      // console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  console.log(allEvents);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  return (
    <>
      <div className="header">
        <h1>ShareCare</h1>
        <div className="signups">
          <a href="">Login </a>
          <a href="">Logout </a>
          <a href="">Sign Up </a>
        </div>
      </div>
      <div className="page">
        <Choices />
        <div className="routesContainer">
          <Routes>
            <Route
              path="/addtask"
              element={
                <AddTask
                  handleAddEvent={handleAddEvent}
                  addEvent={addEvent}
                  setAddEvent={setAddEvent}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  formData={formData}
                  setFormData={setFormData}
                />   
              }
            />
            <Route path="/quotegenerator" element={<Quote />} />
            {/* <Route path="/addpartner" element={<Partner />} /> */}
          </Routes>
        </div>
        <div className="border">
          {/* Calendar component from react-big-calendar. */}
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            components={{
              event: (props) => (
                <CustomEvent {...props} setAllEvents={setAllEvents} />
                // <UpdateTask {...props} setAllEvents={setAllEvents} />
              ),
            }}
            style={{ height: 1200, width: 1000, margin: "1rem" }}
          />
        </div>
      </div>
    </>
  );
}
