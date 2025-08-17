import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./Components/Nav/Nav";
import About from "./pages/About";
import Cards from "./pages/Cards";

function App() {
  return (
    <div className="bg-black h-screen">
      <Nav />
      <div className="h-screen" data-theme="light">
        <Home />
      </div>
      <div className="h-screen" data-theme="dark">
        <About />
      </div>
      <div className="h-screen" data-theme="light">
        <Cards />
      </div>
    </div>
  );
}

export default App;
