import Stack from "@mui/material/Stack";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./PersonalDevelopment.css";

export default function Entrepreneurship() {
  return (
    <Stack direction="row" spacing={1}>
      <EqualizerOutlinedIcon className="PersonalDevelopmentIcon" />
      <BodySubtitle
        text="Personal Development"
        className="PersonalDevelopment"
      />
    </Stack>
  );
}
