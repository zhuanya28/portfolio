
import React, { useState } from "react";
import { Link } from 'react-router-dom';



function Menu() {
  return (
    <nav>
    <ul>
    <li><Link to="/aboutme">Home</Link></li>
      <li><Link to="/webdesign&development">Web Design & Dev</Link></li>
      <li><Link to="/visualart">Visual Art</Link></li>
  
      <li><Link to="/digitalart">Digital Art</Link></li>
    </ul>
  </nav>
  );
}

export default Menu;
