import React, { Component } from "react";
// import Background from '../../img/bg-masthead.jpg';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header id="home" className="container-fluent">
        <div id="Главная" className="row">
          <div className="header-content">
            <div className="col-12 mx-auto">
              <span className="avatar">{this.props.children}</span>
              <h1 className="text1">{this.props.title}</h1>
              <p className="text2">Frontend developer</p>
              <div>
                <a className="text3" href="#about">
                  {this.props.button}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
        <div className="row justify-content-center">
          <div className="col-12">
            <a href="#contact" className="downArrow">
              <i className="fas fa-angle-double-down fa-2x" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
