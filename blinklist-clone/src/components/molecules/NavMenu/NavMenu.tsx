import Stack from "@mui/material/Stack";
import Search from "../../atoms/SearchIcon/SearchIcon";
import NavText from "../NavText/NavText";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import logo from "../../../resources/logo.png";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export default function NavMenu() {
  return (
    <Stack direction="row" alignItems="center" spacing={5}>
      <img src={logo} alt="blinklist_logo" height="26px" width="124.09px" />
      <Search />
      <ExploreMenu />
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavText text="My Library" className="NavText" />
      </Link>
    </Stack>
  );
}
