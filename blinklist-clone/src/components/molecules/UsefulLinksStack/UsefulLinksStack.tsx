import { Stack } from "@mui/material";
import FooterHeading from "../../atoms/FooterHeading/FooterHeading";
import FooterText from "../../atoms/FooterText/FooterText";

export default function UsefulLinksStack() {
  return (
    <Stack direction="column" spacing={1}>
      <FooterHeading text="Useful links" />
      <FooterText text="Pricing" />
      <FooterText text="Blinklist business" />
      <FooterText text="Gift cards" />
      <FooterText text="Blinklist Magazine" />
      <FooterText text="Contact & help" />
    </Stack>
  );
}
