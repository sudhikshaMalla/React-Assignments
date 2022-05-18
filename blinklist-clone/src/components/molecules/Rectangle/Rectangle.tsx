import { Stack } from "@mui/material";
import AddToLibrary from "../AddToLibrary/AddToLibrary";
import ProgressComplete from "../../atoms/ProgressComplete/ProgressComplete";
import ProgressInComplete from "../../atoms/ProgressInComplete/ProgressInComplete";
import ReadAgain from "../ReadAgain/ReadAgain";
import { Link } from "react-router-dom";
import Finished from "../Finished/Finished";
import ProgressZero from "../../atoms/ProgressZero/ProgressZero";
import "./Rectangle.css";

type RectangleProps = {
  val: booktype;
  className: string;
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

export default function Rectangle(props: RectangleProps) {
  if (props.val.status === "pending") {
    return (
      <Stack direction="column" justifyContent="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <AddToLibrary val={props.val} />
        </Link>
        <ProgressZero />
      </Stack>
    );
  } else if (props.val.status === "reading") {
    return (
      <Stack
        direction="column"
        // alignItems="flex-end"
        spacing={0}
        sx={{ width: "330px" }}
      >
        <Finished val={props.val} usage="details" />
        <ProgressInComplete className="ProgressInComplete" />
      </Stack>
    );
  }
  return (
    <Stack direction="column" spacing={0} sx={{ width: "330px" }}>
      <ReadAgain val={props.val} usage="details" />
      <ProgressComplete />
    </Stack>
  );
}
