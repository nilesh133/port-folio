import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components import 
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import About from './Components/About/About'
import Resume from "./Components/Resume/Resume"
import Skills from "./Components/Skills/Skills"
import Contact from "./Components/Contact/Contact"
import Projects from "./Components/Projects/Projects"

//Context Import
import ColorContextProvider from './context/ColorProvider';
import ThemeChanger from './Components/ThemeChanger/ThemeChanger';

const App = () => {
  return (
    <Router>
      <ColorContextProvider>
        <div className='app' style={{ display: "flex", backgroundColor: "#070708", position: "relative", overflowX: "hidden"}}>
          <Navbar />
          <Routes>
          <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/resume" exact element={<Resume />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/projects" exact element={<Projects />} />

            {/* <Route path="/" exact component={About} />
          <Route path="/home/:page" exact component={Resume} /> */}

            {/* <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route> */}

            {/* <Route exact path="/about" component={About} />
          <Route path="/resume" component={Resume} /> */}

          </Routes>
          <ThemeChanger/>
        </div>
      </ColorContextProvider>
    </Router>
  )
}

export default App