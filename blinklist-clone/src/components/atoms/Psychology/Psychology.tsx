import Stack from "@mui/material/Stack";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Psychology.css";

export default function Entrepreneurship() {
  return (
    <Stack direction="row" spacing={1}>
      <PsychologyOutlinedIcon className="PsychologyIcon" />
      <BodySubtitle text="Psychology" className="Psychology" />
    </Stack>
  );
}
