import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { COLORS } from "../../../constants";

export default function Dropdown() {
  return (
    <KeyboardArrowDownIcon
      sx={{ height: "20px", width: "20px", color: COLORS.DARK_GREY }}
    />
  );
}
