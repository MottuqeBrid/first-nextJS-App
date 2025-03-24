"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [text, setText] = useState();
  const route = useRouter();
  const placeOrder = async () => {
    // alert("Order Confirmed");
    setText("Order Confirmed!");
    setTimeout(() => {
      route.push("/");
    }, 1500); // simulate delay for 1.5 second before redirecting to home page
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        backgroundColor: "lightblue",
        flexDirection: "column",
      }}
    >
      <h1> Product Page</h1>
      <li>Buy Iphone</li>
      <br />
      <p>{text}</p>
      <button className="" onClick={placeOrder}>
        Confirm Order
      </button>
    </div>
  );
};

export default page;
