import Stack from "@mui/material/Stack";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Politics.css";

export default function Politics() {
  return (
    <Stack direction="row" spacing={1}>
      <AccountBalanceOutlinedIcon className="PoliticsIcon" />
      <BodySubtitle text="Politics" className="Politics" />
    </Stack>
  );
}
