import { Stack } from "@mui/material";
import BookTitle from "../../atoms/BookTitle/BookTitle";
import CardBody1 from "../../atoms/CardBody/CardBody";
import ReadDetails from "../ReadDetails/ReadDetails";

type BookTextProps = {
  title: string;
  author: string;
  time: number;
  reads: string;
};

export default function BookText(props: BookTextProps) {
  return (
    <Stack direction="column" spacing={2} sx={{ padding: "5px 10px" }}>
      <BookTitle name={props.title} />
      <CardBody1 name={props.author} />
      <ReadDetails time={props.time} count={props.reads} />
    </Stack>
  );
}
