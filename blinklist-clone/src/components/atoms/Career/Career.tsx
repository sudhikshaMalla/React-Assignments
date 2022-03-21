import Stack from "@mui/material/Stack";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Career.css";

export default function Career() {
  return (
    <Stack direction="row" spacing={1}>
      <TrackChangesOutlinedIcon className="CareerIcon" />
      <BodySubtitle text="Career & Success" className="Career" />
    </Stack>
  );
}
