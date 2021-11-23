import React, { Component } from "react";

class ChildCompOne extends Component {
  state = {
    myName: "Rajashekar",
    location: "Hyderabad",
  };

  trasnferDataToParent = () => {
    this.props.getDataFromChild(this.state.myName, this.state.location);
  };
  render() {
    return (
      <div>
        <button onClick={this.trasnferDataToParent}>Click Here</button>
      </div>
    );
  }
}

export default ChildCompOne;
