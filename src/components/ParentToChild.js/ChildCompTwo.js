import React, { Component } from "react";

import ChildCompThree from "./ChildCompThree";

class ChildCompTwo extends Component {
  state = {
    age: 28,
    profession: "Sr Medical Coder",
  };
  render() {
    const { myName, location } = this.props;
    const { age, profession } = this.state;
    return (
      <div>
        <ChildCompThree myName={myName} location={location} age={age} profession={profession} />
      </div>
    );
  }
}

export default ChildCompTwo;
