import Stack from "@mui/material/Stack";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Money.css";

export default function Money() {
  return (
    <Stack direction="row" spacing={1}>
      <AccountBalanceWalletOutlinedIcon className="MoneyIcon" />
      <BodySubtitle text="Money & Investments" className="Money" />
    </Stack>
  );
}
