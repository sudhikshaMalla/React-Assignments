import { Stack } from "@mui/material";
import AddToLibrary from "./AddToLibrary";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { COLORS } from "../../constants";
import ProgressComplete from "../atoms/ProgressComplete";
import ProgressInComplete from "../atoms/ProgressInComplete";
import ReadAgain from "./ReadAgain";
import { Link } from "react-router-dom";
import Finished from "./Finished";

type RectangleProps = {
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

export default function Rectangle(props: RectangleProps) {
  if (props.val.status === "pending") {
    return (
      <Stack direction="column" justifyContent="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <AddToLibrary val={props.val} />
        </Link>
      </Stack>
    );
  } else if (props.val.status === "reading") {
    return (
      <Stack
        direction="column"
        alignItems="flex-end"
        spacing={0}
        sx={{ width: "330px" }}
      >
        {/* <MoreHorizIcon
          sx={{
            color: COLORS.DARK_GREY,
            height: "24px",
            width: "24px",
            paddingRight: "5px",
          }}
        /> */}
        <Finished val={props.val} />
        <ProgressInComplete />
      </Stack>
    );
  }
  return (
    <Stack direction="column" spacing={0} sx={{ width: "330px" }}>
      <ReadAgain val={props.val} />
      <ProgressComplete />
    </Stack>
  );
}
