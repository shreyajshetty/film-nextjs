import React from "react";

export default function ModalCard({ children }: { children: React.ReactNode }) {
  const modalCardStyle = {
    height: "300px",
    width: "600px",
    display: "flex",
    border: "1px solid #ddd",
    boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.5)",

    backgroundColor: " black ",
    marginTop: 0,
    marginLeft: "10px",
    marginRight: "10px",
  };
  return <div style={modalCardStyle}>{children}</div>;
}
