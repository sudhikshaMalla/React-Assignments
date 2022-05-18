import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import Body2Text from "../../atoms/Body2Text/Body2Text";
import BodyHeading from "../../atoms/BodyHeading/BodyHeading";
import BodyText from "../../atoms/BodyText/BodyText";
import BookImage from "../../atoms/BookImage/BookImage";
import ReadDetails from "../../molecules/ReadDetails/ReadDetails";
import Finished from "../../molecules/Finished/Finished";
import ReadAgain from "../../molecules/ReadAgain/ReadAgain";
import { useState } from "react";
import { Link } from "react-router-dom";

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

type BookDetailPageProps = {
  selectedBook: booktype;
};

export default function BookDetailPage(props: BookDetailPageProps) {
  let [content, setContent] = useState(0);
  const getText = () => {
    switch (content) {
      case 0:
        return props.selectedBook.synopsis;
      case 1:
        return props.selectedBook.for;
      case 2:
        return props.selectedBook.aboutAuthor;
    }
    return "";
  };

  const handle0Click = () => {
    setContent(0);
    const sbox = document.getElementById("synopsis");
    if (sbox != null) {
      sbox.style.borderBottom = "2px solid " + COLORS.BRIGHT_GREEN;
    }
    const fbox = document.getElementById("for");
    if (fbox != null) {
      fbox.style.borderBottom = "2px solid " + COLORS.GRAY;
    }
    const abox = document.getElementById("about");
    if (abox != null) {
      abox.style.borderBottom = "2px solid " + COLORS.GRAY;
    }
  };

  const handle1Click = () => {
    setContent(1);
    const sbox = document.getElementById("synopsis");
    if (sbox != null) {
      sbox.style.borderBottom = "2px solid " + COLORS.GRAY;
    }
    const fbox = document.getElementById("for");
    if (fbox != null) {
      fbox.style.borderBottom = "2px solid " + COLORS.BRIGHT_GREEN;
    }
    const abox = document.getElementById("about");
    if (abox != null) {
      abox.style.borderBottom = "2px solid " + COLORS.GRAY;
    }
  };

  const handle2Click = () => {
    setContent(2);
    const sbox = document.getElementById("synopsis");
    if (sbox != null) {
      sbox.style.borderBottom = "2px solid " + COLORS.GRAY;
    }
    const fbox = document.getElementById("for");
    if (fbox != null) {
      fbox.style.borderBottom = "2px solid " + COLORS.GRAY;
    }
    const abox = document.getElementById("about");
    if (abox != null) {
      abox.style.borderBottom = "2px solid " + COLORS.BRIGHT_GREEN;
    }
  };

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
      <Body2Text text="Get the key ideas from" color={COLORS.DARK_BLUE} />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Stack direction="column" justifyContent="space-between">
          <Stack direction="column" spacing={3}>
            <BodyHeading text={props.selectedBook.title.toString()} />
            <BodyText text={props.selectedBook.subtitle.toString()} />
            <Body2Text
              text={props.selectedBook.author.toString()}
              color={COLORS.GREY}
            />
            <ReadDetails time={props.selectedBook.time} count="" />
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center">
            <ReadAgain val={props.selectedBook} usage="detailsPage" />
            <Finished val={props.selectedBook} usage="detailsPage" />
            <Body2Text text="Send to Kindle  ->" color={COLORS.GREY} />
          </Stack>
        </Stack>
        <BookImage id={props.selectedBook.id} />
      </Stack>
      <Stack direction="column" sx={{ width: "60%" }} spacing={1}>
        <Stack direction="row" spacing={0}>
          <Link
            to="/book"
            style={{
              textDecoration: "none",
              borderBottom: "2px solid " + COLORS.BRIGHT_GREEN,
              width: "33%",
              padding: "5px",
            }}
            onClick={handle0Click}
            className="tabElement"
            id="synopsis"
          >
            <Body2Text text="Synopsis" color={COLORS.GREY} />
          </Link>
          <Link
            to="/book"
            style={{
              textDecoration: "none",
              borderBottom: "2px solid " + COLORS.GRAY,
              width: "33%",
              padding: "5px",
            }}
            onClick={handle1Click}
            className="tabElement"
            id="for"
          >
            <Body2Text text="Who is it for?" color={COLORS.GREY} />
          </Link>
          <Link
            to="/book"
            style={{
              textDecoration: "none",
              borderBottom: "2px solid " + COLORS.GRAY,
              width: "33%",
              padding: "5px",
            }}
            onClick={handle2Click}
            className="tabElement"
            id="about"
          >
            <Body2Text text="About the author" color={COLORS.GREY} />
          </Link>
        </Stack>
        <Body2Text text={getText()} color={COLORS.DARK_BLUE} />
      </Stack>
    </Stack>
  );
}
