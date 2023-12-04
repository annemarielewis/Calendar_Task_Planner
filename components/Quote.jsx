import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

export default function Quote(props) {
  let { state } = useLocation();
  const {quoteData}=state;

  return (
    <>
      <h1>{quoteData.quote}</h1>
      <h2>{quoteData.author}</h2>
      <button>X</button>
    </>
  );
}
