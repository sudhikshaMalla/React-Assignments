import { Box } from "@mui/material";
import "./ProgressInComplete.css";

type ProgressInCompleteProps = {
  className: string;
};

export default function ProgressInComplete(props: ProgressInCompleteProps) {
  return (
    <Box className="ProgressBar">
      <Box className="inner" />
    </Box>
  );
}
