import { Route, Routes } from "react-router-dom";
import BookDetailPage from "../../pages/BookDetailPage/BookDetailPage";
import Entrepreneurship from "../../pages/Entrepreneurship/Entrepreneurship";
import FinishedReading from "../../pages/FinishedReading/FinishedReading";
import Library from "../../pages/Library/Library";
import Explore from "../Explore/Explore";

type BodyProps = {
  clickState: boolean;
};

export default function Body(props: BodyProps) {
  return (
    <div>
      <div className="Body">
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/Entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/read" element={<FinishedReading />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/book" element={<BookDetailPage />} />
        </Routes>
      </div>
      {props.clickState ? <Explore /> : null}
    </div>
  );
}
