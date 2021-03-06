import React from "react";
import "./Contact.css";

class Contact extends React.PureComponent {
  render() {
    return (
      <section id="Контакты" className="contact">
        <div id="contact" className="container-fluent backgroundContact">
          {this.props.children}
          <div className="row">
            <div className="col text-center">
              <h4 className="contactMe">Контакты</h4>
              <h3 className="myTel">
                <i className="fa fa-phone-square" aria-hidden="true" />{" "}
                +7-912-855-37-67
              </h3>
              <h3 className="myEmail">
                <i className="fa fa-envelope" aria-hidden="true" />{" "}
                neox56@gmail.com
              </h3>
              <h3 className="skype">
                <ion-icon name="logo-skype" /> crazyonyx216
              </h3>
            </div>
            <div className="col text-center">
              <div className="githubIcon">
                <a
                  className="btn btn-outline btn-xl emailButton"
                  href="https://github.com/DmitriySmolin"
                >
                  Dmitry Smolin
                </a>
                <a href="https://github.com/DmitriySmolin">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="col-12">
              <a href="#home" className="upArrow">
                <i className="fas fa-angle-double-up fa-2x" />
              </a>
            </div>
            <ul className="social-networks spin-icon">
              <li>
                <a href="https://www.facebook.com/">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" className="icon-twitter">
                  <ion-icon name="logo-twitter" />
                </a>
              </li>
              <li>
                <a href="https://vk.com/" className="icon-vk">
                  <ion-icon name="logo-vk" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="icon-instagram">
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
