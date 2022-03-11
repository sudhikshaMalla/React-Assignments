import { Stack } from "@mui/material";
import FooterLogo from "../../../resources/FooterLogo.png";
import FooterCaption from "../FooterCaption/FooterCaption";

export default function BlinklistStack() {
  return (
    <Stack direction="column" spacing={2}>
      <img src={FooterLogo} alt="blinklist_logo" height="24px" width="99.1px" />
      <FooterCaption />
    </Stack>
  );
}
