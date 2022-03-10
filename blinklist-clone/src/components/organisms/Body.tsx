import { Route, Routes } from "react-router-dom";
import CurrentlyReading from "../pages/CurrentlyReading";
import Entrepreneurship from "../pages/Entrepreneurship";
import Explore from "../pages/Explore";
import FinishedReading from "../pages/FinishedReading";
import Library from "../pages/Library";

export default function Body() {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/explore" element={<Explore />}></Route>
      <Route path="/Entrepreneurship" element={<Entrepreneurship />}></Route>
      <Route path="/reading" element={<CurrentlyReading />} />
      <Route path="/read" element={<FinishedReading />} />
    </Routes>
  );
}
