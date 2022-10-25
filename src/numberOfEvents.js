import React, { Component } from "react";
import { ErroAlert } from "./Alert";

class NumberOfEvents extends Component {
 
  handleInputChange = (event) => {
    const value = event.target.value;
    if (value >= 33 || value <= 0) {
      this.setState({
        renderNumber: event.target.value,
        infoText: "",
      });
    } else {
      this.setState({
        renderNumber: event.target.value,
        infoText: "",
      });
    }
    this.props.updateEvents(undefined, value);
  };

  constructor(){
    super();
    this.state = {
      renderNumber: 32,
      infoText: '', 
    }
  }

  render() {

    const { renderNumber } = this.state;

    return (
      <div className="number-of-events">
        <p className="input-label">Number of events to display</p>
          <input
            type="number"
            className="event-number-input"
            min="1"
            value={renderNumber}
            onChange={this.handleInputChange}
          />
          <ErroAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
