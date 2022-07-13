import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="counter">Counter</div>
        <div className="count">{this.state.counter}</div>

        <div
          className="plus__button"
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          +
        </div>
      </div>
    );
  }
}

export default Counter;
