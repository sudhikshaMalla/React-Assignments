import Stack from "@mui/material/Stack";
import ExploreCategories from "../../molecules/ExploreCategories/ExploreCategories";
import "./Explore.css";

export default function Explore() {
  return (
    <Stack
      direction="column"
      sx={{
        marginTop: "5%",
        paddingBottom: "25%",
        backgroundColor: "rgba(157, 163, 166, 0.25)",
        height: "100%",
        width: "100%",
      }}
      className="outer"
    >
      <ExploreCategories />
    </Stack>
  );
}
