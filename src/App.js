import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (btnName) => {
    this.setState((prev) => ({ [btnName]: prev[btnName] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const positive =
      countTotalFeedback === 0
        ? 0
        : Math.round((good * 100) / countTotalFeedback);
    return (
      <div>
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleClick}
        />

        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>

        <p>Total reviews: {countTotalFeedback}</p>
        <p>Positive reviews: {positive} %</p>
      </div>
    );
  }
}

export default App;
