import React from "react";

const notFound = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "500px",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f1f1f1",
        color: "#333",
      }}
    >
      <h3
        style={{
          marginBottom: "10px",
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        Page Not Found...!
      </h3>
      <a
        style={{
          color: "#333",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "5px",
          transition: "all 0.3s ease",
        }}
        href="/"
      >
        Go to Home Page
      </a>
    </div>
  );
};

export default notFound;
