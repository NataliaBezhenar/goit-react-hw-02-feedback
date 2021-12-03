import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleInput(e) {
    console.log(e.target.value);
    console.log(e);
    console.log(e.target.id);
  }

  // handleClick = (e) => {
  //   const currBtn = e.target.id;
  //   console.log(currBtn);
  //   this.setState({ currBtn: this.state.currBtn + 1 });
  // };
  handleGoodClick = () => {
    this.setState((prev) => ({ good: prev.good + 1 }));
  };
  handleNeutralClick = () => {
    this.setState((prev) => ({ neutral: prev.neutral + 1 }));
  };
  handleBadClick = () => {
    this.setState((prev) => ({ bad: prev.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const positive =
      countTotalFeedback === 0
        ? 0
        : Math.trunc((good * 100) / countTotalFeedback);
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.handleGoodClick}>Good</button>
          <button onClick={this.handleNeutralClick}>Neutral</button>
          <button onClick={this.handleBadClick}>Bad</button>
        </div>
        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>

        <p>Total reviews: {countTotalFeedback}</p>
        <p>Positive reviews: {positive} %</p>
      </div>
    );
  }
}

export default App;
