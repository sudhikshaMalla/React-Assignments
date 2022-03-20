import Stack from "@mui/material/Stack";
import BodyText from "../../atoms/BodyText/BodyText";

export default function ExploreHeadings() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        width: "100%",
        color: "#6D787E",
      }}
    >
      <BodyText text="Explore by category" />
      <BodyText text="See recently added titles" />
      <BodyText text="See popular titles" />
    </Stack>
  );
}
