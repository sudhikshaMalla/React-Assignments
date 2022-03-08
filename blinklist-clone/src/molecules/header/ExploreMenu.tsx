import Stack from "@mui/material/Stack";
import Dropdown from "../../atoms/icons/Dropdown";
import NavText from "./NavText";

export default function ExploreMenu() {
  return (
    <Stack direction="row" alignItems="center">
      <NavText text="Explore" />
      <Dropdown />
    </Stack>
  );
}
