import { Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Library from "../pages/Library";
import Search from "../pages/Search";

export default function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/explore" element={<Explore />}></Route>
      <Route path="/library" element={<Library />}></Route>
    </Routes>
  );
}
