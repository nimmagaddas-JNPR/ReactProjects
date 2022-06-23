import React, { useState } from "react";
import Star from "./Star";

function StarRatings() {
  const [rating, setRating] = useState(0);

  function clickHanlder(val) {
    setRating(val);
  }

  function renderStarts() {
    return [1, 2, 3, 4, 5].map((val, idx) => (
      <Star
        key={idx}
        selected={val <= rating}
        onClick={() => clickHanlder(val)}
      />
    ));
  }
  return (
    <div>
      {renderStarts()}
      <h4>{`Results: ${rating}/5`}</h4>
    </div>
  );
}

export default StarRatings;
