import Stack from "@mui/material/Stack";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Health.css";

export default function Health() {
  return (
    <Stack direction="row" spacing={1}>
      <LocalHospitalOutlinedIcon className="HealthIcon" />
      <BodySubtitle text="Health & Nutrition" className="Health" />
    </Stack>
  );
}
