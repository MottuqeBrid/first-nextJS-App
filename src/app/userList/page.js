import React from "react";
import Navbar from "@/app/Navbar";

const page = () => {
  return (
    <div>
      <Navbar/>
      <h2>This is user List</h2>
      <ul>
        <li>user 1</li>
        <li>user 2</li>
        <li>user 3</li>
        <li>user 4</li>
        <li>user 5</li>
        <li>user 6</li>
      </ul>
    </div>
  );
};

export default page;
