import React from "react";
import '../src/styles/app.css';
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { New } from "./components/New";
import { Popular } from "./components/Popular";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <New />
      <Popular />
    </div>
  );
}

export default App;
