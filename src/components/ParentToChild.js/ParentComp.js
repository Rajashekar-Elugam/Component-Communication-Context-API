import React, { Component } from "react";

import ChildCompOne from "./ChildCompOne";
import ChildCompTwo from "./ChildCompTwo";

class ParentComp extends Component {
  state = {
    myName1: "Rajashekar",
    location1: "Gachibowli",
    myName2: "Ajay",
    location2: "Dhargha",
  };
  render() {
    const { myName1, location1, myName2, location2 } = this.state;
    return (
      <div>
        <ChildCompOne myName={myName1} location={location1} />
        <ChildCompTwo myName={myName2} location={location2} />
      </div>
    );
  }
}

export default ParentComp;
