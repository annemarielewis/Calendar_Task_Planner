//Main.js purpose = to put all of the routes. Main.js is not requres (the routes could go in index)
// but it's neater this way and more modular

// library imports:
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Route, Routes } from "react-router-dom";
import enUSLocale from "date-fns/locale/en-US";
import addDays from "date-fns/addDays";
//component imports:
import events from "./dummy_test_data.js";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";
import Quote from "./Quote";
import Partner from "./Partner";
import Choices from "./Choices";

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
  const [addEvent, setAddEvent] = useState({
    description: "",
    startTime: "",
    endTime: "",
  });

  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent(event) {
    event.preventDefault();
    setAllEvents([...allEvents, addEvent]);
  }
  return (
    <>
    <div className="header">
        <h1>ShareCare</h1>
        <div className="signups">
        <a href= "">Login </a>
        <a href= "">Logout </a>
        <a href= "">Sign Up </a>
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
                />
              }
            />
            <Route path="/quotegenerator" element={<Quote />} />
            <Route path="/addpartner" element={<Partner />} />
          </Routes>
        </div>
        <div className="border">
          {/* Calendar component from react-big-calendar. */}
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 800, width: 1000, margin: "1rem" }}
          />
        </div>
      </div>
    </>
  );
}
