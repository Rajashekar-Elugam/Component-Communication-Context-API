import React from "react";

import { ContextAPI } from "./ParentCompConAPI";

import "./styles.css";

const ChildComp1 = () => {
  return (
    <div className="container">
      <h1 className="title">Child Component 1</h1>
      <ContextAPI.Consumer>{(value) => <h2 className="text-primary">{value}</h2>}</ContextAPI.Consumer>
    </div>
  );
};

export default ChildComp1;
