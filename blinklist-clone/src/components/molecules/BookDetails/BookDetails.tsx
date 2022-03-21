import Stack from "@mui/material/Stack";
import BookText from "../BookText/BookText";
import { COLORS } from "../../../constants";
import Rectangle from "../Rectangle/Rectangle";

type BookDetailsProps = {
  val: booktype;
};

type booktype = {
  id: number;
  title: string;
  author: string;
  time: number;
  reads: string;
  status: string;
  trending: boolean;
  latest: boolean;
  audio: boolean;
};

export default function BookDetails(props: BookDetailsProps) {
  return (
    <Stack direction="column" spacing={1} color={COLORS.GREY}>
      <BookText
        title={props.val.title}
        author={props.val.author}
        time={props.val.time}
        reads={props.val.reads}
      />
      <Rectangle className="Rectangle" val={props.val} />
    </Stack>
  );
}
