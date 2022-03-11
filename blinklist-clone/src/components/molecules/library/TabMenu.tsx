import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Tab from "./Tab";

type TabMenuProps = {
  tab: string;
};

export default function TabMenu(props: TabMenuProps) {
  let reading = false;
  let read = true;
  if (props.tab === "current") {
    reading = true;
    read = false;
  }
  return (
    <Stack direction="row" justifyContent="flex-start">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Tab text="Currently reading" isSet={reading} />
      </Link>
      <Link to="/read" style={{ textDecoration: "none" }}>
        <Tab text="Finished" isSet={read} />
      </Link>
    </Stack>
  );
}
