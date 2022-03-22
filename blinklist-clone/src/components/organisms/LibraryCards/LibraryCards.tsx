import { Stack } from "@mui/material";
import { COLORS } from "../../../constants";
import BooksGrid from "../BooksGrid/BooksGrid";
import TabMenu from "../../molecules/library/TabMenu";
import { Dispatch, SetStateAction } from "react";

type booktype = {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  time: number;
  reads: string;
  status: string;
  trending: boolean;
  latest: boolean;
  audio: boolean;
  synopsis: string;
  for: string;
  aboutAuthor: string;
};

type LibraryCardsProps = {
  tab: string;
  setBookFunction: Dispatch<SetStateAction<booktype>>;
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
      <BooksGrid property={status} setBookFunction={props.setBookFunction} />
    </Stack>
  );
}
