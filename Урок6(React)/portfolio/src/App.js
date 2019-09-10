import React, { Component } from "react";
import "./App.css";
import Navigation from "./Component/Navigation/Navigation.jsx";
import Header from "./Component/Header/Header.jsx";
import About from "./Component/About/About.jsx";
import Services from "./Component/Services/Services.jsx";
import Portfolio from "./Component/Portfolio/Portfolio.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import AvatarAPI from "./Component/AvatarAPI/AvatarAPI.jsx";
import {
  TProvider,
  TConsumer,
  Slider
} from "./Component/SwitchTheme/SwitchTheme";

class App extends Component {
  render() {
    return (
      <TProvider>
        <TConsumer>
          {({ theme }) => (
            <div className={theme}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <Navigation LogoTitle="Портфолио">
                      <Slider />
                    </Navigation>
                    <Header title="Дмитрий Смолин" button="Узнать больше">
                      <AvatarAPI />
                    </Header>
                    <About />
                    <Services />
                    <Portfolio />
                    <Contact className={theme} />
                    <Footer
                      footer={
                        "© Copyright 2019 React Portfolio by Dmitry Smolin"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </TConsumer>
      </TProvider>
    );
  }
}

export default App;
