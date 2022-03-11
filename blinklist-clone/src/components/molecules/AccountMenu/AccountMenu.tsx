import Dropdown from "../../atoms/DropdownIcon/DropdownIcon";
import LetterAvatar from "../../atoms/LetterAvatar/LetterAvatar";
import Stack from "@mui/material/Stack";

export default function AccountMenu() {
  return (
    <Stack direction="row" alignItems="center">
      <LetterAvatar />
      <Dropdown />
    </Stack>
  );
}
