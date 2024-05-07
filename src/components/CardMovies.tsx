import React from "react";

export default function CardMovie({ children}:{children:React.ReactNode}) {
  const cardHomeStyle = {
    height: "150px",
    width: "800px",
    display: "flex",
    border: "1px solid #ddd",
    boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.5)",

    backgroundColor: " white ",
    marginTop: 0,
  };
  return <div style={cardHomeStyle}>{children}</div>;
}
