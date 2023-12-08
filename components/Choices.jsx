import { Link } from "react-router-dom";
import AddTask from "./AddTask";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";

export default function Choices(props) {

  const { fetchQuote } = props;
  
  return (
    <div className="choices">
      <Link to="/quotegenerator">
        <button className="getquote" onClick={fetchQuote}>
          Inspirational Quote
        </button>
      </Link>
      <Link to="/addtask">
        <button className="addtask">Add Task</button>
      </Link>
      <Link to="/addpartner">
        <button className="addpartner">Find Task Partner</button>
      </Link>
    </div>
  );
}
