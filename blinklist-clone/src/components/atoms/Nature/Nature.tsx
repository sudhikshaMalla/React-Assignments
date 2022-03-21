import Stack from "@mui/material/Stack";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Nature.css";

export default function Nature() {
  return (
    <Stack direction="row" spacing={1}>
      <SpaOutlinedIcon className="NatureIcon" />
      <BodySubtitle text="Nature & Environment" className="Nature" />
    </Stack>
  );
}
