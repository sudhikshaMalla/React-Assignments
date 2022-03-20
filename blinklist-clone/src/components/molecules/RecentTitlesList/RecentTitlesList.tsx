import Stack from "@mui/material/Stack";
import Health from "../../atoms/Health/Health";
import Politics from "../../atoms/Politics/Politics";
import History from "../../atoms/History/History";
import Motivation from "../../atoms/Motivation/Motivation";
import Productivity from "../../atoms/Productivity/Productivity";
import Career from "../../atoms/Career/Career";

export default function RecentTitlesList() {
  return (
    <Stack direction="column" spacing={1} sx={{ color: "#6D787E" }}>
      <Politics />
      <Health />
      <History />
      <Motivation />
      <Productivity />
      <Career />
    </Stack>
  );
}
