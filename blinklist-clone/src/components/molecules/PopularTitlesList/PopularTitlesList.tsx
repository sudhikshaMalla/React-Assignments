import Stack from "@mui/material/Stack";
import Communication from "../../atoms/Communication/Communication";
import Education from "../../atoms/Education/Education";
import Marketing from "../../atoms/Marketing/Marketing";
import Money from "../../atoms/Money/Money";
import PersonalDevelopment from "../../atoms/PersonalDevelopment/PersonalDevelopment";
import Relationship from "../../atoms/Relationship/Relationship";

export default function PopularTitlesList() {
  return (
    <Stack direction="column" spacing={1} sx={{ color: "#6D787E" }}>
      <Marketing />
      <PersonalDevelopment />
      <Communication />
      <Money />
      <Relationship />
      <Education />
    </Stack>
  );
}
