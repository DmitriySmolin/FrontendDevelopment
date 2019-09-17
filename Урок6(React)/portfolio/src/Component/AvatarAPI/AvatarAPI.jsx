import React from "react";

class AvatarAPI extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      url: "https://i.ibb.co/XLQ6hVT/15-Kh-Z0wky-RA.jpg"
    };
  }
  componentDidMount() {
    fetch("https://i.ibb.co/XLQ6hVT/15-Kh-Z0wky-RA.jpg")
      .then(res => res.blob())
      .then(res => {
        this.setState({
          isLoaded: true
        });
      });
  }

  render() {
    return <img src={this.state.url} alt="avatar" />;
  }
}

export default AvatarAPI;
