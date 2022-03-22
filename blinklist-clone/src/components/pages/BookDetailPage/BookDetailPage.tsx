import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import Body2Text from "../../atoms/Body2Text/Body2Text";

export default function BookDetailPage() {
  return (
    <Stack
      direction="column"
      spacing={5}
      alignItems="flex-start"
      sx={{
        paddingTop: "5%",
        paddingBottom: "25%",
        paddingLeft: "20%",
        paddingRight: "20%",
        color: COLORS.DARK_BLUE,
      }}
    >
      <Body2Text text="Get the key ideas from" />
    </Stack>
  );
}
