import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import BodyHeading1 from "../../atoms/BodyHeading/BodyHeading";
import LibraryCards from "../../organisms/LibraryCards/LibraryCards";

export default function Library() {
  return (
    <Stack
      direction="column"
      spacing={5}
      alignItems="flex-start"
      sx={{
        paddingTop: "8%",
        width: "60%",
        paddingBottom: "25%",
        paddingLeft: "20%",
        paddingRight: "20%",
        color: COLORS.DARK_BLUE,
      }}
    >
      <BodyHeading1 text="My Library" />
      <LibraryCards tab="current" />
    </Stack>
  );
}
