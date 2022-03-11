import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import AccountMenu from "../../molecules/AccountMenu/AccountMenu";
import NavMenu from "../../molecules/NavMenu/NavMenu";

export default function Header() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        height: "8%",
        width: "100%",
        position: "fixed",
        top: "0",
        bgcolor: COLORS.WHITE,
      }}
    >
      <NavMenu />
      <AccountMenu />
    </Stack>
  );
}
