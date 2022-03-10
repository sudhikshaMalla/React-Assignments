import { Box } from "@mui/material";
import { COLORS } from "../../constants";
export default function ProgressComplete() {
  return (
    <Box
      sx={{
        height: "12px",
        width: "330px",
        backgroundColor: COLORS.GRAY,
        color: COLORS.GRAY,
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      }}
    ></Box>
  );
}
