"use client";
// import React from "react";

import { useState } from "react";

const State = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="box">
      <h1>This is State Component</h1>
      <p>count: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increase Value</button>
    </div>
  );
};

export default State;
