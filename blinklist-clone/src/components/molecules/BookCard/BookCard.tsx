import useDivStyles from "../../../styles/useDivStyles";
import BookDetails from "../BookDetails/BookDetails";
import Bookimage from "../../atoms/BookImage/BookImage";

type BookCardProps = {
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

export default function BookCard(props: BookCardProps) {
  const classes = useDivStyles();
  return (
    <div className={classes.div}>
      <Bookimage id={props.val.id} />
      <BookDetails val={props.val} />
    </div>
  );
}
