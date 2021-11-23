import React, { useContext } from "react";

import { contextAPI } from "./RootComponent";

const Count = () => {
  const [data] = useContext(contextAPI);
  return (
    <div className="card m-1 border-secondary" style={{ width: "250px" }}>
      <h3 className="text-success">Count: {data.length}</h3>
    </div>
  );
};

export default Count;
