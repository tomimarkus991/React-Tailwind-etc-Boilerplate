import React, { Component } from "react";
import ReactDOM from "react-dom";

class Test extends Component {
  render() {
    return (
      <h1>Tere</h1>
    );
  }
}

export default Test;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Test />, wrapper) : false;