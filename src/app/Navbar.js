"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/product" ? (
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
            margin: "1rem 0",
          }}
        >
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`link ${pathname === "/login" ? "active" : ""}`}
            href="/login"
          >
            Login
          </Link>
          <Link
            className={`link ${pathname === "/signup" ? "active" : ""}`}
            href="/signup"
          >
            Sign up
          </Link>
          <Link
            className={`link ${pathname === "/product" ? "active" : ""}`}
            href="/product"
          >
            Product
          </Link>
          <Link
            className={`link ${pathname === "/userList" ? "active" : ""}`}
            href="/userList"
          >
            User List
          </Link>
        </nav>
      ) : null}
    </div>
  );
};

export default Navbar;
