import React from "react";
import "./App.css";
import { LoginBox } from "./components/LoginBox/LoginBox";

function App() {
  const credentials = [
    {
      username: "sudhikshaMalla",
      password: "admin",
    },
    {
      username: "sudhi7",
      password: "123456",
    },
    {
      username: "sudhikshamalla28",
      password: "root",
    },
  ];

  return (
    <div className="App">
      <LoginBox AccountCredentials={credentials} variant="secondary" />
    </div>
  );
}

export default App;
