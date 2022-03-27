import { ThemeProvider } from "@mui/material";
import { theme } from "../src/themes/theme";
import React from "react";
import "./App.css";
import Bookcard from "./components/Bookcard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Bookcard />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
