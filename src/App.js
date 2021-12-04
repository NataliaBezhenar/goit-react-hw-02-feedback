import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";

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
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={positive}
            />
          }
        />
      </div>
    );
  }
}

export default App;
