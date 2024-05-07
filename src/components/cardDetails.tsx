import React from "react";

export default function CardDetails({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardHomeStyle = {
    height: "auto",
    width: "1200px",
    display: "flex",
    border: "1px solid #ddd",
    boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.5)",

    backgroundColor: " white ",
    marginTop: 0,
  };
  return <div style={cardHomeStyle}>{children}</div>;
}
