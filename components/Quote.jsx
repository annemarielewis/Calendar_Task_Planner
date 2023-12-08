import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { Spinner } from "reactstrap";

export default function Quote(props) {
  const { quoteData } = props;

  if (!quoteData.quote) {
    return <Spinner color="primary">Loading...</Spinner>;
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
