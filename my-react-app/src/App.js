import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from "./components/Home"
import WebDesignDev from "./components/WebDes&DevProjects"
import VisualArt from "./components/VisualArtProjects"
import DigitalArt from "./components/DigArtNGraphDesProjects"
import Menu from "./components/Menu";


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
      <Route path="/aboutme" exact elements={<Home/>} />
        <Route path="/webdesign&development" element={<WebDesignDev/>} />
     
        <Route path="/visualart" element={<VisualArt/>} />
        <Route path="/digitalart" element={<DigitalArt/>} />
      </Routes>
    </Router>
  );
}


export default App;


