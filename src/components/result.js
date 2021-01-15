import React, { Component } from "react";
import "./result.css";

export class Result extends Component {
  render() {
    return (
      <div className="result">
        <h1 id="resultStatement"> Your Result is</h1>
        <br />
        <h3 id="rightAns"> Right Answers: {this.props.rightAnswers}</h3>
        <h3 id="wrongAns"> Wrong Answers: {this.props.wrongAnswers}</h3>
      </div>
    );
  }
}

export default Result;
