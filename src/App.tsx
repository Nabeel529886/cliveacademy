import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Explore from "./components/Explore/Explore";
import Community from "./components/Community/Community";
import { Register } from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Explore />
      <Community />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
