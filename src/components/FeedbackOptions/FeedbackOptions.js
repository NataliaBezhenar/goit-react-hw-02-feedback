import React from "react";
import { PropTypes } from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map((item) => (
      <button key={item} onClick={() => onLeaveFeedback(item)}>
        {item}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
