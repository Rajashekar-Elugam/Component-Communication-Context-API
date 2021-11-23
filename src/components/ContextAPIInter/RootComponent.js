import React, { useState } from "react";

import Count from "./Count";
import Display from "./Display";

export const contextAPI = React.createContext();

const RootComponent = () => {
  const [data, setData] = useState([{ brandName: "Nokia" }, { brandName: "Mi" }, { brandName: "Samsung" }]);
  return (
    <contextAPI.Provider value={[data, setData]}>
      <Count />
      <Display />
    </contextAPI.Provider>
  );
};

export default RootComponent;
