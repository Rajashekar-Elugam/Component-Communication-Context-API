import React from "react";

import "./styles.css";

const ChildCompThree = (props) => {
  const { myName, location, age, profession } = props;
  return (
    <div className="container">
      <h2 className="title">Props from ParentComp and ChildCompTwo</h2>
      <p>My name is: {myName}</p>
      <p>Location: {location}</p>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
};

export default ChildCompThree;
