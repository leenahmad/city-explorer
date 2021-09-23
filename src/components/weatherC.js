import React, { Component } from "react";
import Result from "./Result";

class weatherC extends Component {
  render() {
    return (
      <div>
        <Result
          date={this.props.weather.date}
          description={this.props.weather.description}
        />
      </div>
    );
  }
}

export default weatherC;
