import React from "react";
import { ContextAPI } from "./ParentCompConAPI";

const ChildCompN = () => {
  return (
    <div className="container">
      <h1 className="title">Child Component N</h1>
      <ContextAPI.Consumer>{(value) => <h2>{value}</h2>}</ContextAPI.Consumer>
    </div>
  );
};

export default ChildCompN;
