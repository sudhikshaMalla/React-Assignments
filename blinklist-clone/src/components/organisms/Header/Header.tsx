import Stack from "@mui/material/Stack";
import { ReactEventHandler } from "react";
import { COLORS } from "../../../constants";
import AccountMenu from "../../molecules/AccountMenu/AccountMenu";
import NavMenu from "../../molecules/NavMenu/NavMenu";

type HeaderProps = {
  clickHandler: ReactEventHandler;
};

export default function Header(props: HeaderProps) {
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
      <NavMenu clickHandler={props.clickHandler} />
      <AccountMenu />
    </Stack>
  );
}
