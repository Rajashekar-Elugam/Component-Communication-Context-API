import React from "react";

import ChildComp1 from "./ChildComp1";
import ChildComp2 from "./ChildComp2";
import ChildCompN from "./ChildCompN";

export const ContextAPI = React.createContext();

const ParentCompConAPI = () => {
  return (
    <ContextAPI.Provider value={"Welcome to My World!"}>
      <ChildComp1 />
      <ChildComp2 />
      <ChildCompN />
    </ContextAPI.Provider>
  );
};

export default ParentCompConAPI;
