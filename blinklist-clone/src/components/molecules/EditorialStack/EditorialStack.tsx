import { Stack } from "@mui/material";
import FooterHeading from "../../atoms/FooterHeading/FooterHeading";
import FooterText from "../../atoms/FooterText/FooterText";

export default function EditorialStack() {
  return (
    <Stack direction="column" spacing={1}>
      <FooterHeading text="Editorial" />
      <FooterText text="Book lists" />
      <FooterText text="What is Nonfiction?" />
      <FooterText text="What to read next?" />
      <FooterText text="Benefits of reading" />
    </Stack>
  );
}
