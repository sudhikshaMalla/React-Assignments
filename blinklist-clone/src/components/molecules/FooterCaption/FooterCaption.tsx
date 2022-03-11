import { Stack } from "@mui/material";
import CaptionText from "../CaptionText/CaptionText";

export default function FooterCaption() {
  return (
    <Stack direction="column" spacing={1}>
      <CaptionText text="Big ideas in small packages" />
      <CaptionText text="Start learning now" />
    </Stack>
  );
}
