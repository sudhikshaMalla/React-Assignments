import Avatar from "@mui/material/Avatar";
import { COLORS } from "../../../constants";

export default function LetterAvatar() {
  return (
    <Avatar
      sx={{
        bgcolor: COLORS.SKYBLUE,
        height: "40px",
        width: "40px",
        margin: "0px",
        color: COLORS.WHITE,
      }}
      className="LetterAvatar"
    >
      A
    </Avatar>
  );
}
