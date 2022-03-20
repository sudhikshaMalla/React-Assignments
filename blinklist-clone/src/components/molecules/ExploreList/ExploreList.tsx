import Stack from "@mui/material/Stack";
import CategoriesList from "../CategoriesList/CategoriesList";
import PopularTitlesList from "../PopularTitlesList/PopularTitlesList";
import RecentTitlesList from "../RecentTitlesList/RecentTitlesList";

export default function ExploreList() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        width: "100%",
      }}
    >
      <CategoriesList />
      <RecentTitlesList />
      <PopularTitlesList />
    </Stack>
  );
}
