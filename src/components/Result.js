import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class Result extends Component {
  render() {
    return (
      <div>
        <Card style={{ textAlign: "center" }}>
          <h3>Weather</h3>
          <Card.Body>
            <p>Date : {this.props.date} </p>
            <p>description :{this.props.description} </p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Result;
