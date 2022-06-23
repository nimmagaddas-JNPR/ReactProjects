import React from "react";
import { FaStar } from "react-icons/fa";

function Star({ selected, onClick }) {
  return <FaStar color={selected ? "orange" : "lightgray"} onClick={onClick} />;
}

export default Star;
