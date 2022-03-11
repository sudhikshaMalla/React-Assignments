import Stack from "@mui/material/Stack";
import Banner from "../../molecules/Banner/Banner";
import DefaultBooks from "../../molecules/DefaultBooks/DefaultBooks";
import SearchBar from "../../molecules/SearchBar/SearchBar";

export default function Entrepreneurship() {
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
      <Banner />
      <SearchBar />
      <DefaultBooks />
    </Stack>
  );
}
