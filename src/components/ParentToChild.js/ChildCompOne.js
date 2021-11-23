import React from "react";

import "./styles.css";

const ChildCompOne = (props) => {
  const { myName, location } = props;
  return (
    <div className="container">
      <h2 className="title">Props from parent component</h2>
      <p>My name is: {myName}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default ChildCompOne;
