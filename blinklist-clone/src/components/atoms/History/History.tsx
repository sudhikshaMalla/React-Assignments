import Stack from "@mui/material/Stack";
import TempleBuddhistOutlinedIcon from "@mui/icons-material/TempleBuddhistOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./History.css";

export default function History() {
  return (
    <Stack direction="row" spacing={1}>
      <TempleBuddhistOutlinedIcon className="HistoryIcon" />
      <BodySubtitle text="History" className="History" />
    </Stack>
  );
}
