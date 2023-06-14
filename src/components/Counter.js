
import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  plusFunction = () => {
    this.setState({
      counter: this.state.counter +1,

    });

  }

  minusFunction = () => {
    this.setState({
      counter: this.state.counter -1,

    });

  }

  render() {
    return (
      <div className="container">
        <div className="counter">Counter</div>
        <div className="count">{this.state.counter}</div>
        <div
          className="plus__button"
          onClick={this.plusFunction}
        >
          +
        </div>

        <div
          className="minus__button"
          onClick={this.minusFunction}
        >
          -
        </div>
      </div>
    );
  }
}

export default Counter;
