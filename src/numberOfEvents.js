import React, { Component } from "react";
import { ErroAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChange = (event) => {
    let inputValue = event.target.value;
    if (inputValue >= 33 || inputValue <= 0) {
      this.setState({
        numberOfEvents: inputValue,
        infoText: "please enter a number from 1 - 32",
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: "",
      });
    }
    this.props.updateEvents(undefined, inputValue);
  };

  render() {
    return (
      <div className="number-of-events">
        <label htmlFor="number-of-events">Show max: </label>
        <input
          type="number"
          className="event-number-input"
          min="1"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        />
        <ErroAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
