import { Route, Routes } from "react-router-dom";
import Entrepreneurship from "../../pages/Entrepreneurship/Entrepreneurship";
import FinishedReading from "../../pages/FinishedReading/FinishedReading";
import Library from "../../pages/Library/Library";

export default function Body() {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/Entrepreneurship" element={<Entrepreneurship />} />
      <Route path="/read" element={<FinishedReading />} />
    </Routes>
  );
}
