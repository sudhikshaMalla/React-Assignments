import Stack from "@mui/material/Stack";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Enterpreneurship.css";

export default function Entrepreneurship() {
  return (
    <Stack direction="row" spacing={1}>
      <AddAlertOutlinedIcon className="AlertIcon" />
      <BodySubtitle text="Entrepreneurship" className="Enterpreneurship" />
    </Stack>
  );
}
