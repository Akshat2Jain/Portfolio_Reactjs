import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./component/Home";
import Experience from "./component/Experience";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProjectDisplay from "./component/Projectdisplay";
import ScrollToTop from "./component/scrollToTop";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Portfolio />} />
          <Route path="/Project/:id" element={<ProjectDisplay/>}/>
          <Route path="/Experience" element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
