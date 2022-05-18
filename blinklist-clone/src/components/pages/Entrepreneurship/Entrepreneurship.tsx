import Stack from "@mui/material/Stack";
import { Dispatch, SetStateAction } from "react";
import Banner from "../../molecules/Banner/Banner";
import DefaultBooks from "../../molecules/DefaultBooks/DefaultBooks";
import SearchBar from "../../molecules/SearchBar/SearchBar";

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

type EntrepreneurshipProps = {
  setBookFunction: Dispatch<SetStateAction<booktype>>;
};

export default function Entrepreneurship(props: EntrepreneurshipProps) {
  return (
    <Stack
      direction="column"
      spacing={5}
      sx={{
        paddingTop: "8%",
        width: "60%",
        paddingBottom: "25%",
        paddingLeft: "20%",
        paddingRight: "20%",
      }}
    >
      <Banner />
      <SearchBar />
      <DefaultBooks setBookFunction={props.setBookFunction} />
    </Stack>
  );
}
