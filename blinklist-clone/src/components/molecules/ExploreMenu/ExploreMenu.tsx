import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import Dropdown from "../../atoms/DropdownIcon/DropdownIcon";
import NavText from "../NavText/NavText";

export default function ExploreMenu() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        "&:hover": {
          borderBottom: "2px solid " + COLORS.BRIGHT_GREEN,
        },
      }}
    >
      <NavText text="Explore" />
      <Dropdown />
    </Stack>
  );
}
