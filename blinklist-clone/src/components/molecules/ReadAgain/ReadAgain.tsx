import { Stack } from "@mui/material";
import { COLORS } from "../../../constants";
import CardBody from "../../atoms/CardBody/CardBody";
import API from "../../../api";

type ReadAgainProps = {
  val: booktype;
  usage: "details" | "detailsPage";
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

export default function ReadAgain(props: ReadAgainProps) {
  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const book = props.val;
    book["status"] = "reading";
    API.put("http://localhost:3333/books/" + book.id.toString() + "/", book);
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={2}
      sx={{
        width: props.usage === "details" ? "330px" : "200px",
        backgroundColor: "white",
        color: props.usage === "details" ? COLORS.BRIGHT_BLUE : COLORS.GREEN,
        border:
          props.usage === "details"
            ? "1px solid " + COLORS.SHADOW_GREY
            : "1px solid " + COLORS.DARK_BLUE,
        paddingTop: "10px",
        paddingBottom: "10px",
        "&:hover": {
          backgroundColor:
            props.usage === "details" ? COLORS.BRIGHT_BLUE : COLORS.GREEN,
          color: props.usage === "details" ? "white" : COLORS.DARK_BLUE,
        },
      }}
      onClick={handleClick}
    >
      <CardBody name={props.usage === "details" ? "Read Again" : "Read now"} />
    </Stack>
  );
}
