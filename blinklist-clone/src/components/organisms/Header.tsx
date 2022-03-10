import Stack from "@mui/material/Stack";
import AccountMenu from "../molecules/header/AccountMenu";
import NavMenu from "../molecules/header/NavMenu";

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
        bgcolor: "white",
      }}
    >
      <NavMenu />
      <AccountMenu />
    </Stack>
  );
}
