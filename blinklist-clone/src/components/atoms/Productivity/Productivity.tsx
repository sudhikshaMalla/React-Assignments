import Stack from "@mui/material/Stack";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Productivity.css";

export default function Entrepreneurship() {
  return (
    <Stack direction="row" spacing={1}>
      <TimerOutlinedIcon className="ProductivityIcon" />
      <BodySubtitle text="Productivity" className="Productivity" />
    </Stack>
  );
}
