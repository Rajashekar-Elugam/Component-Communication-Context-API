import React, { Component } from "react";

class ChildCompOne extends Component {
  state = {
    myName: "Rajashekar",
    location: "Hyderabad",
  };

  transferToParent = (myName, location) => {
    this.props.getDataFromChildOne(this.state.myName, this.state.location);
  };

  render() {
    return (
      <div>
        <button onClick={this.transferToParent}>Get Data From Child</button>
      </div>
    );
  }
}

export default ChildCompOne;
