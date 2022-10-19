import React, {Component} from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvenets: 32,
    textWarning: '',
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const warning = value < 1 ? 'please enter a number greater then 1' : 0;
    this.setState({
      numberOfEvenets: value,
      textWarning: warning,
    });
  };

  render() {
    return (
      <div className="number-of-events">
        <label>
          Number Of Events
          <input 
          type='number'
          className='event-number-input'
          min='1'
          value={this.state.numberOfEvenets}
          onChange={this.handleInputChange}
          />
        </label>
      <p>{this.state.textWarning} </p>
      </div>
    )
  }

}

export default NumberOfEvents;
