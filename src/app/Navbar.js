import Link from "next/link";
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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign up</Link>
        <Link href="/userList">User List</Link>
      </nav>
    </div>
  );
};

export default Navbar;
