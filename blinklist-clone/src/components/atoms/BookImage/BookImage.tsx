import React from "react";
import book1 from "../../../resources/bookImages/book1.png";
import book2 from "../../../resources/bookImages/book2.png";
import book3 from "../../../resources/bookImages/book3.png";
import book4 from "../../../resources/bookImages/book4.png";
import book5 from "../../../resources/bookImages/book5.png";
import book6 from "../../../resources/bookImages/book6.png";
import book7 from "../../../resources/bookImages/book7.png";
import book8 from "../../../resources/bookImages/book8.png";
import book9 from "../../../resources/bookImages/book9.png";
import book10 from "../../../resources/bookImages/book10.png";
import book11 from "../../../resources/bookImages/book11.png";
import "./BookImage.css";

type BookImageProps = {
  id: number;
};

export default function BookImage(props: BookImageProps) {
  return (
    <img
      src={getBookbyId(props.id)}
      alt={"book_image" + props.id}
      className="img"
    />
  );
}

function getBookbyId(id: number) {
  switch (id) {
    case 1:
      return book1;
    case 2:
      return book2;
    case 3:
      return book3;
    case 4:
      return book4;
    case 5:
      return book5;
    case 6:
      return book6;
    case 7:
      return book7;
    case 8:
      return book8;
    case 9:
      return book9;
    case 10:
      return book10;
    case 11:
      return book11;
  }
}
