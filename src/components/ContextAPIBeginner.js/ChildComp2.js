import React from "react";

import { ContextAPI } from "./ParentCompConAPI";

const ChildComp2 = () => {
  return (
    <div className="container">
      <h1 className="title">Child Component 2</h1>
      <ContextAPI.Consumer>{(value) => <h2>{value}</h2>}</ContextAPI.Consumer>
    </div>
  );
};

export default ChildComp2;
