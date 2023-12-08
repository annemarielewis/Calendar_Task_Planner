import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

export default function Quote(props) {
  // let { state } = useLocation();
  // const { quoteData } = state;
  const { quoteData } = props;

  if (!quoteData.quote) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <div className="quote-container1">
        <h4>{quoteData.quote}</h4>
        <div className="quote-container2">
          <h7>- {quoteData.author} - </h7>
          <Link to="/">
            <button className="exit-btn">X</button>
          </Link>
        </div>
      </div>
    </>
  );
}
