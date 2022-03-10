import { Stack } from "@mui/material";
import BooksGrid from "../molecules/BooksGrid";

export default function FinishedReading() {
  return (
    <Stack
      direction="column"
      spacing={5}
      sx={{
        paddingTop: "8%",
        width: "60%",
        paddingBottom: "25%",
        paddingLeft: "20%",
        paddingRight: "20%",
      }}
    >
      <h1>Finished Reading</h1>
      <BooksGrid property="read" />
    </Stack>
  );
}
