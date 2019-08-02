import React from "react";
import logo from './logo.png'
import header from './header.module.scss'

class Header extends React.Component {
  render() {
    return (
      <header className={header.pink}>
        <a href="/" className={header.brand}>
          <img src={logo} alt="" height="40" />
          <span>Company X</span>
        </a>
        <a href="/">All Quizzes</a>
      </header>
    );
  }
}

export default Header;
