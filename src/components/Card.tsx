import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  const cardStyle = {
    height: "600px",
    width: "350px",
    display: "flex",
    border: "1px solid #ddd",
    boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.5)",
    borderRadius: " 1rem ",
    backgroundColor: " white ",
    alignItems: "center",
    justifyContent: "center",
  };
  return <div style={cardStyle}>{children}</div>;
}
