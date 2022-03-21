import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import Stack from "@mui/material/Stack";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Motivation.css";

export default function Entrepreneurship() {
  return (
    <Stack direction="row" spacing={1}>
      <LightbulbOutlinedIcon className="MotivationIcon" />
      <BodySubtitle text="Motivation & Inspiration" className="Motivatuon" />
    </Stack>
  );
}
