import { Stack } from "@mui/material";
import { COLORS } from "../../../constants";
import BooksGrid from "../BooksGrid/BooksGrid";
import TabMenu from "../../molecules/library/TabMenu";

type LibraryCardsProps = {
  tab: string;
};

export default function LibraryCards(props: LibraryCardsProps) {
  let status = "reading";
  let tabName = "current";
  if (props.tab === "finished") {
    status = "read";
    tabName = "finished";
  }
  return (
    <Stack
      direction="column"
      spacing={3}
      alignItems="flex-start"
      sx={{
        color: COLORS.GREY,
      }}
    >
      <TabMenu tab={tabName} />
      <BooksGrid property={status} />
    </Stack>
  );
}
