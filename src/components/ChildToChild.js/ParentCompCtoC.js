import React, { Component } from "react";

import ChildCompOne from "./ChildCompOne";
import ChildCompTwo from "./ChildCompTwo";

import "./styles.css";

class ParentCompCtoC extends Component {
  state = {};

  getDataFromChild = (myName, location) => {
    this.setState({
      myName,
      location,
    });
  };

  render() {
    const { myName, location } = this.state;
    return (
      <div className="container">
        <ChildCompTwo myName={myName} location={location} />
        <ChildCompOne getDataFromChild={this.getDataFromChild} />
      </div>
    );
  }
}

export default ParentCompCtoC;
