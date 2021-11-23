import React, { useContext, useState } from "react";

import { contextAPI } from "./RootComponent";

const Display = () => {
  const [data, setData] = useContext(contextAPI);
  const [user_input, setInput] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setData([...data, { brandName: user_input }]);
    setInput("");
  };
  return (
    <div className="m-1 border-secondary" style={{ width: "250px" }}>
      <h3 className="text-primary">Brand Names</h3>
      <ul className="list-group list-group-flush">
        {data.map((item) => (
          <li className="list-group-item">{item.brandName}</li>
        ))}
      </ul>
      <div className="card p-1 border-2 border-primary">
        <form className="form" onSubmit={submitForm}>
          <input type="text" value={user_input} onChange={(event) => setInput(event.target.value)} placeholder="Enter your brand" />
          <input className="mt-1" type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
};

export default Display;
