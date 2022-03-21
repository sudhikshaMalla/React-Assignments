import Stack from "@mui/material/Stack";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Communication.css";

export default function Entrepreneurship() {
  return (
    <Stack direction="row" spacing={1}>
      <ConnectWithoutContactOutlinedIcon className="CommunicationIcon" />
      <BodySubtitle text="Communication Skills" className="Communication" />
    </Stack>
  );
}
