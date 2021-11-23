import React from "react";

const ChildCompTwo = (props) => {
  const { myName, location } = props;
  return (
    <div>
      <h2 className="title">Child to Child (Sibilings) Communication</h2>
      <p>My name is: {myName}</p>
      <p>Location: {location} </p>
    </div>
  );
};

export default ChildCompTwo;
