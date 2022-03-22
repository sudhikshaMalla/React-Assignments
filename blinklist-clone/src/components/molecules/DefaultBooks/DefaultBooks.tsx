import { Dispatch, SetStateAction } from "react";
import { COLORS } from "../../../constants";
import BooksGrid from "../../organisms/BooksGrid/BooksGrid";
import Heading3 from "../Heading3/Heading3";

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

type DefaultBooksProps = {
  setBookFunction: Dispatch<SetStateAction<booktype>>;
};

export default function DefaultBooks(props: DefaultBooksProps) {
  return (
    <>
      <Heading3 text="Trending blinks" color={COLORS.DARK_BLUE} />
      <BooksGrid property="trending" setBookFunction={props.setBookFunction} />
      <Heading3 text="Just added" color={COLORS.DARK_BLUE} />
      <BooksGrid property="latest" setBookFunction={props.setBookFunction} />
      <Heading3 text="Featured audio blinks" color={COLORS.DARK_BLUE} />
      <BooksGrid property="audio" setBookFunction={props.setBookFunction} />
    </>
  );
}
