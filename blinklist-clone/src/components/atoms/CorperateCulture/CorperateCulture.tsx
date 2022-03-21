import Stack from "@mui/material/Stack";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./CorperateCulture.css";

export default function CorperateCulture() {
  return (
    <Stack direction="row" spacing={1}>
      <WorkOutlineOutlinedIcon className="CorperateIcon" />
      <BodySubtitle text="Corperate Culture" className="CorporateCulture" />
    </Stack>
  );
}
