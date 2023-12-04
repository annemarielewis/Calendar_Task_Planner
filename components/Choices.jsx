import { Link } from "react-router-dom";
import AddTask from "./AddTask";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Choices() {
  const [quoteData, setQuoteData] = useState({});

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?category=future",
        { headers: { "X-Api-Key": `ZmQ6qJQtnxx1Z0ov8id09w==mD9wIVxy1qc2kmQB` } }
      );
      setQuoteData(response.data[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="choices">
      <Link to="/quotegenerator" state={{quoteData}}>
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
