"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const route = useRouter();
  const placeOrder = () => {
    alert("Order Confirmed");
    route.push("/");
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
      <button className="" onClick={placeOrder}>
        Confirm Order
      </button>
    </div>
  );
};

export default page;
