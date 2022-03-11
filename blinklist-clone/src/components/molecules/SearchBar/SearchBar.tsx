import Search from "../../atoms/SearchIcon/SearchIcon";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

export default function SearchBar() {
  return (
    <TextField
      id="standard-search"
      type="search"
      variant="standard"
      placeholder="Search by title or author"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}
