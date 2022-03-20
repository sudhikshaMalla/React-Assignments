import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import BodyHeading from "../../atoms/BodyHeading/BodyHeading";
import LibraryCards from "../../organisms/LibraryCards/LibraryCards";

export default function FinishedReading() {
  return (
    <Stack
      direction="column"
      spacing={5}
      alignItems="flex-start"
      sx={{
        paddingTop: "5%",
        paddingBottom: "25%",
        paddingLeft: "20%",
        paddingRight: "20%",
        color: COLORS.DARK_BLUE,
      }}
    >
      <BodyHeading text="My Library" />
      <LibraryCards tab="finished" />
    </Stack>
  );
}
