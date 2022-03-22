import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookDetailPage from "../../pages/BookDetailPage/BookDetailPage";
import Entrepreneurship from "../../pages/Entrepreneurship/Entrepreneurship";
import FinishedReading from "../../pages/FinishedReading/FinishedReading";
import Library from "../../pages/Library/Library";
import Explore from "../Explore/Explore";

type BodyProps = {
  clickState: boolean;
};

type booktype = {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  time: number;
  reads: string;
  status: string;
  trending: boolean;
  latest: boolean;
  audio: boolean;
  synopsis: string;
  for: string;
  aboutAuthor: string;
};

let emptyBook: booktype = {
  id: 0,
  title: "",
  subtitle: "",
  author: "",
  time: 0,
  reads: "",
  status: "",
  trending: false,
  latest: false,
  audio: false,
  synopsis: "",
  for: "",
  aboutAuthor: "",
};

export default function Body(props: BodyProps) {
  var [book, setBook] = useState<booktype>(emptyBook);
  return (
    <div>
      <div className="Body">
        <Routes>
          <Route path="/" element={<Library setBookFunction={setBook} />} />
          <Route
            path="/Entrepreneurship"
            element={<Entrepreneurship setBookFunction={setBook} />}
          />
          <Route
            path="/read"
            element={<FinishedReading setBookFunction={setBook} />}
          />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/book"
            element={<BookDetailPage selectedBook={book} />}
          />
        </Routes>
      </div>
      {props.clickState ? <Explore /> : null}
    </div>
  );
}
