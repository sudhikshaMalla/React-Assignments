import Stack from "@mui/material/Stack";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Education.css";

export default function Education() {
  return (
    <Stack direction="row" spacing={1}>
      <SchoolOutlinedIcon className="EducationIcon" />
      <BodySubtitle text="Education" className="Education" />
    </Stack>
  );
}
