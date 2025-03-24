"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const route = useRouter();
  const [text, setText] = useState();
  const placeOrder = async () => {
    // alert("Order Confirmed");
    setText("Order Confirmed");
    await setTimeout(() => {
      route.push("/");
    }, 1000);
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
      <br />
      <button className="" onClick={placeOrder}>
        Confirm Order
      </button>
    </div>
  );
}

// export default page;
