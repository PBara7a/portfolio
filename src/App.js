import React, { useState, createContext, useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import withRouter from "./utils/withRouter";
import "./App.css";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState("night");

  const toggleTheme = () => {
    setTheme((curTheme) => (curTheme === "day" ? "night" : "day"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default withRouter(App);
