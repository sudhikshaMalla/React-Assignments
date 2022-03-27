import React from "react";
import useDivStyles from "../styles/useDivStyles";
import Bookdetils from "./Bookdetails";
import Bookimage from "./Bookimage";
import Rectangle from "./Rectangle";

export default function Bookcard() {
  const classes = useDivStyles();
  return (
    <div className={classes.div}>
      <Bookimage />
      <Bookdetils />
      <Rectangle />
    </div>
  );
}
