
import React from "react";
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <h1 class="navbar-brand m-5">ZHUANYA</h1>
      <ul class="menuList navbar-nav">
        <li class="nav-item active nav-link"><Link to="/">Home</Link></li>
        <li class="nav-item nav-link"><Link to="/webdesign&development">Web Design & Dev</Link></li>
        <li class="nav-item nav-link"><Link to="/visualart">Visual Art</Link></li>
        <li class="nav-item nav-link"><Link to="/digitalart">Digital Art</Link></li>
        <li class="nav-item contactList">

          <a class="nav-link" href="https://www.linkedin.com/in/zhuanya/" target="_blank"
            rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-2xl contactIcons" /></a>
        </li>
        <li class="nav-item contactList">
          <a class="nav-link" target="_blank"
            rel="noopener noreferrer"
            href="mailto:zhuanya@nyu.edu"> <i class="fa-solid fa-envelope fa-2xl contactIcons" ></i></a>

        </li>
        <li class="nav-item contactList">
          <a class="nav-link" target="_blank"
            rel="noopener noreferrer" href="https://t.me/zhuanya14">
            <i class="fa-solid fa-paper-plane fa-2xl contactIcons"/>
          </a>
        </li>
        <li class="nav-item contactList">
          <a class="nav-link" target="_blank"
            rel="noopener noreferrer" href="https://drive.google.com/file/d/11S9MyukDqzKQrzuQyfdxfIB1ePn0wm1s/view?usp=sharing">
          <i class="fa-brands fa-weixin fa-2xl contactIcons" ></i></a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
