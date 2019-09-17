import React from "react";
// import './App.css';
import "./Navigation.css";
import NavPanel from "./NavPanel";

const sections = ["Главная", "Обо мне", "Услуги", "Портфолио", "Контакты"];

class Navigation extends React.PureComponent {
  openSlideMenu = () => {
    document.getElementById("side-menu").style.width = "250px";
  };

  closeSlideMenu = () => {
    document.getElementById("side-menu").style.width = "0";
  };

  render() {
    return (
      <nav className="navbar">
        <span className="open-slide">
          <button onClick={this.openSlideMenu}>&#9776;</button>
          {this.props.children}
        </span>
        <ul className="nav-links">
          {sections.map((sections, index) => (
            <NavPanel key={index} navLinks={sections} />
          ))}
        </ul>
        <div id="side-menu" className="side-nav" onClick={this.closeSlideMenu}>
          <a href="#btn" className="btn-close">
            &times;
          </a>
          {sections.map((sections, index) => (
            <NavPanel key={index} navLinks={sections} />
          ))}
        </div>
      </nav>
    );
  }
}

export default Navigation;
