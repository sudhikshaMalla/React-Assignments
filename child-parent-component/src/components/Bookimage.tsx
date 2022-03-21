import React from "react";
import book from "./../images/book.png";

export default function Bookimage() {
  return (
    <img
      src={book}
      alt="book_image"
      style={{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: "300px",
        width: "300px",
      }}
    />
  );
}
