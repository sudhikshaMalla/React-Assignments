import Stack from "@mui/material/Stack";
import { Dispatch, SetStateAction } from "react";
import { COLORS } from "../../../constants";
import BodyHeading from "../../atoms/BodyHeading/BodyHeading";
import LibraryCards from "../../organisms/LibraryCards/LibraryCards";

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

type LibraryProps = {
  setBookFunction: Dispatch<SetStateAction<booktype>>;
};

export default function Library(props: LibraryProps) {
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
      <LibraryCards tab="current" setBookFunction={props.setBookFunction} />
    </Stack>
  );
}
