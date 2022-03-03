import React from "react";
import Bookdetils from "./Bookdetails";
import Bookimage from "./Bookimage";

export default function Bookcard() {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        border: "1px solid #DFE8F6",
      }}
    >
      <Bookimage />
      <Bookdetils />
      <div
        style={{
          height: "15px",
          backgroundColor: "#DFE8F6",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      />
    </div>
  );
}
