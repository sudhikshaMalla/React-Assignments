import { Stack } from "@mui/material";
import FooterHeading from "../../atoms/FooterHeading/FooterHeading";
import FooterText from "../../atoms/FooterText/FooterText";

export default function CompanyStack() {
  return (
    <Stack direction="column" spacing={1}>
      <FooterHeading text="Company" />
      <FooterText text="About" />
      <FooterText text="Careers" />
      <FooterText text="partners" />
      <FooterText text="Code of Conduct" />
    </Stack>
  );
}
