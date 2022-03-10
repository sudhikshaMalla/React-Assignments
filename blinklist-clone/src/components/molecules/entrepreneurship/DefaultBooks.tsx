import { COLORS } from "../../../constants";
import BooksGrid from "../BooksGrid";
import Heading3 from "./Heading3";

export default function DefaultBooks() {
  return (
    <>
      <Heading3 text="Trending blinks" color={COLORS.DARK_BLUE} />
      <BooksGrid property="trending" />
      <Heading3 text="Just added" color={COLORS.DARK_BLUE} />
      <BooksGrid property="latest" />
      <Heading3 text="Featured audio blinks" color={COLORS.DARK_BLUE} />
      <BooksGrid property="audio" />
    </>
  );
}
