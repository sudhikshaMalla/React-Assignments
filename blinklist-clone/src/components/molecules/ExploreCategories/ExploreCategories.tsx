import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import ExploreHeadings from "../ExploreHeadings/ExploreHeadings";
import ExploreList from "../ExploreList/ExploreList";

export default function ExploreCategories() {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      sx={{
        backgroundColor: COLORS.MINT_CREAM,
        width: "100%",
        padding: "1%",
      }}
    >
      <ExploreHeadings />
      <ExploreList />
    </Stack>
  );
}
