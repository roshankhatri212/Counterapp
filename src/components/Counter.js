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
      <div>
        Counter:{this.state.counter}
        <div
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
