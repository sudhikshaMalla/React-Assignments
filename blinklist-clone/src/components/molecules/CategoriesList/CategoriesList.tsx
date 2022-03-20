import Stack from "@mui/material/Stack";
import CorperateCulture from "../../atoms/CorperateCulture/CorperateCulture";
import Economics from "../../atoms/Economics/Economics";
import Entrepreneurship from "../../atoms/Enterpreneurship/Enterpreneurship";
import Nature from "../../atoms/Nature/Nature";
import Psychology from "../../atoms/Psychology/Psychology";
import Science from "../../atoms/Science/Science";
import { Link } from "react-router-dom";

export default function CategoriesList() {
  return (
    <Stack direction="column" spacing={1} sx={{ color: "#6D787E" }}>
      <Link to="/Entrepreneurship" style={{ textDecoration: "none" }}>
        <Entrepreneurship />
      </Link>
      <Science />
      <Economics />
      <CorperateCulture />
      <Psychology />
      <Nature />
    </Stack>
  );
}
