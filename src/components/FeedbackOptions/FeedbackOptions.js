import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map((item) => (
      <button key={item} onClick={() => onLeaveFeedback(item)}>
        {item}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
