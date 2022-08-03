import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <Header />
      <Routes>
        <Route path="/paulo-barata" element={<Home />} />
        <Route path="/paulo-barata/about" element={<About />} />
        <Route path="/paulo-barata/resume" element={<Resume />} />
        <Route path="/paulo-barata/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
