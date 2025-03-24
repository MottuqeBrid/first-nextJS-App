import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "1rem",
          margin: "1rem 0",
        }}
      >
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign up</a>
        <a href="/userList">User List</a>
      </nav>
    </div>
  );
};

export default Navbar;
