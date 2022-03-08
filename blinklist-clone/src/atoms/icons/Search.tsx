import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { COLORS } from "../../constants";

export default function Search() {
  return (
    <SearchRoundedIcon
      sx={{
        color: COLORS.DARK_GREY,
        height: "24px",
        width: "24px",
      }}
    />
  );
}
