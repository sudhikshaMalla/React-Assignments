import React from "react";
import { useState } from "react";
import "./App.css";
import Body from "./components/organisms/Body/Body";
import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";

function App() {
  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked(!clicked);
    console.log(clicked);
  };

  return (
    <div className="App">
      <Body clickState={clicked} />
      <Header clickHandler={toggleClicked} />
      <Footer />
    </div>
  );
}

export default App;
