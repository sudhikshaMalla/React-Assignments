import { Stack } from "@mui/material";
import { COLORS } from "../../../constants";
import CardBody1 from "../../atoms/CardBody/CardBody";
import API from "../../../api";

type FinishedProps = {
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

export default function Finished(props: FinishedProps) {
  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const book = props.val;
    book["status"] = "finished";
    API.put("http://localhost:3333/books/" + book.id.toString() + "/", book);
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={2}
      sx={{
        width: props.usage === "details" ? "330px" : "200px",
        backgroundColor:
          props.usage === "details" ? "white" : COLORS.BRIGHT_GREEN,
        color:
          props.usage === "details" ? COLORS.BRIGHT_BLUE : COLORS.DARK_BLUE,
        border:
          props.usage === "details" ? "1px solid " + COLORS.SHADOW_GREY : "",
        paddingTop: "10px",
        paddingBottom: "10px",
        "&:hover": {
          backgroundColor:
            props.usage === "details" ? COLORS.BRIGHT_BLUE : COLORS.DULL_GREEN,
          color: props.usage === "details" ? "white" : "",
        },
      }}
      onClick={handleClick}
    >
      <CardBody1
        name={props.usage === "details" ? "Finished" : "Finished Reading"}
      />
    </Stack>
  );
}
