import React, { Component } from "react";

import ChildCompOne from "./ChildCompOne";

import "./styles.css";

class ParentCompCtoP extends Component {
  state = {};

  getDataFromChildOne = (myName, location) => {
    this.setState({
      myName,
      location,
    });
  };

  render() {
    const { myName, location } = this.state;
    return (
      <div className="container">
        <h2 className="title">Child Component to Parent Component Communication</h2>
        <p>My name is: {myName}</p>
        <p>Location: {location} </p>
        <ChildCompOne getDataFromChildOne={this.getDataFromChildOne} />
      </div>
    );
  }
}

export default ParentCompCtoP;
