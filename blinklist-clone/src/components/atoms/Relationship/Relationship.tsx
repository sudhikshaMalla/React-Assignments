import Stack from "@mui/material/Stack";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BodySubtitle from "../BodySubtitle/BodySubtitle";
import "./Relationship.css";

export default function Relationship() {
  return (
    <Stack direction="row" spacing={1}>
      <FavoriteBorderOutlinedIcon className="RelationshipIcon" />
      <BodySubtitle text="Sex & Relationship" className="Relationship" />
    </Stack>
  );
}
