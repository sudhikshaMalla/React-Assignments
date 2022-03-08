import CompanyStack from "./CompanyStack";
import { Stack } from "@mui/material";
import UsefulLinksStack from "./UsefulLinksStack";
import EditorialStack from "./EditorialStack";
import BlinklistStack from "./BlinklistStack";

export default function FooterContainer() {
  return (
    <Stack direction="row" justifyContent="space-around">
      <BlinklistStack />
      <EditorialStack />
      <UsefulLinksStack />
      <CompanyStack />
    </Stack>
  );
}
