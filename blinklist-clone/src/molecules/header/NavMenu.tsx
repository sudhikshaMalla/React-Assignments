import Stack from "@mui/material/Stack";
import Search from "../../atoms/icons/Search";
import NavText from "./NavText";
import ExploreMenu from "./ExploreMenu";
import logo from "../../../src/resources/logo.png";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <Stack direction="row" alignItems="center" spacing={5}>
      <Link to="/">
        <img src={logo} alt="blinklist_logo" height="26px" width="124.09px" />
      </Link>
      <Link to="/search">
        <Search />
      </Link>
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <ExploreMenu />
      </Link>
      <Link to="/library" style={{ textDecoration: "none" }}>
        <NavText text="My Library" />
      </Link>
    </Stack>
  );
}
