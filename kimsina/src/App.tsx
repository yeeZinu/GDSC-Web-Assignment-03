import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StoreTexting from "./components/StoreTexting";
import Store from "./components/Store";

function App() {
  return (
    <div className="App">
      <Store />
      <StoreTexting />
    </div>
  );
}

export default App;
