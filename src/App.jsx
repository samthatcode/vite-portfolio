import React from "react";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
