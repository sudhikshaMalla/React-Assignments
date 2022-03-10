import { Box } from "@mui/material";
import { COLORS } from "../../constants";

export default function ProgressInComplete() {
  return (
    <Box
      sx={{
        height: "12px",
        width: "330px",
        bgcolor: COLORS.MINT_CREAM,
      }}
    >
      <Box
        sx={{
          height: "12px",
          width: "40%",
          bgcolor: COLORS.GRAY,
        }}
      ></Box>
    </Box>
  );
}
