import CompanyStack from "../CompanyStack/CompanyStack";
import { Stack } from "@mui/material";
import UsefulLinksStack from "../UsefulLinksStack/UsefulLinksStack";
import EditorialStack from "../EditorialStack/EditorialStack";
import BlinklistStack from "../BlinklistStack/BlinklistStack";

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
