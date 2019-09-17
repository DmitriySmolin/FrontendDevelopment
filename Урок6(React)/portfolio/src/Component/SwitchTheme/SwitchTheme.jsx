import React from "react";
const TContext = React.createContext();
const TConsumer = TContext.Consumer;

class TProvider extends React.PureComponent {
  toggleTheme = evt => {
    this.setState({ theme: evt.target.checked ? "night" : "day" });
  };

  state = {
    theme: "day",
    toggleTheme: this.toggleTheme
  };

  render() {
    return (
      <TContext.Provider value={this.state}>
        {this.props.children}
      </TContext.Provider>
    );
  }
}

class Slider extends React.PureComponent {
  render() {
    return (
      <label className="switch">
        <TConsumer>
          {({ toggleTheme, theme }) => (
            <input
              onChange={toggleTheme}
              type="checkbox"
              checked={theme === "night"}
            />
          )}
        </TConsumer>
        <span className="slider round" />
      </label>
    );
  }
}

export { TProvider, TConsumer, Slider };
