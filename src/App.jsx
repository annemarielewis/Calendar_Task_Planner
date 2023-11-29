// point of App.jsx is to import the parent components
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
