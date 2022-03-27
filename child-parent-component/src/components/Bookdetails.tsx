import Box from "@mui/material/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Booktitle from "./Booktitle";
import Bookauthor from "./Bookauthor";
import Readingtime from "./Readingtime";
import useBoxStyles from "../styles/useBoxStyles";

export default function Bookdetils() {
  const classes = useBoxStyles();
  return (
    <Box className={classes.box}>
      <Booktitle />
      <Bookauthor />
      <Readingtime />
      <MoreHorizIcon color="info" />
    </Box>
  );
}
