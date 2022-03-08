import Dropdown from "../../atoms/icons/Dropdown";
import LetterAvatar from "../../atoms/LetterAvatar";
import Stack from "@mui/material/Stack";

export default function AccountMenu() {
  return (
    <Stack direction="row" alignItems="center">
      <LetterAvatar />
      <Dropdown />
    </Stack>
  );
}
