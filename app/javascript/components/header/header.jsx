import React from "react";
import { Link } from "react-router-dom";

import logo from './logo.png'
import header from './header.module.scss'

class Header extends React.Component {
  render() {
    return (
      <header className={header.pink}>
        <Link to="/" className={header.brand}>
          <img src={logo} alt="" height="40" />
          <span>Company X</span>
        </Link>
        <Link to="/">All Quizzes</Link>
      </header>
    );
  }
}

export default Header;
