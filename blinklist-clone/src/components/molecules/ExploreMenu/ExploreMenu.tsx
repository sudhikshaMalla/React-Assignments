import Stack from "@mui/material/Stack";
import { ReactEventHandler } from "react";
import { COLORS } from "../../../constants";
import Dropdown from "../../atoms/DropdownIcon/DropdownIcon";
import NavText from "../NavText/NavText";

type ExploreMenuProps = {
  clickHandler: ReactEventHandler;
};

export default function ExploreMenu(props: ExploreMenuProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        "&:hover": {
          borderBottom: "2px solid " + COLORS.BRIGHT_GREEN,
        },
      }}
      onClick={props.clickHandler}
    >
      <NavText text="Explore" />
      <Dropdown />
    </Stack>
  );
}
