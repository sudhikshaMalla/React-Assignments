import Stack from "@mui/material/Stack";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Marketing.css";

export default function Marketing() {
  return (
    <Stack direction="row" spacing={1}>
      <TimelineOutlinedIcon className="MarketingIcon" />
      <BodySubtitle text="Marketing & Sales" className="Marketing" />
    </Stack>
  );
}
