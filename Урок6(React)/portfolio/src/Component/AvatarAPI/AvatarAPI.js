import React, {Component} from 'react';

class AvatarAPI extends Component{

constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      url: 'https://i.ibb.co/XLQ6hVT/15-Kh-Z0wky-RA.jpg'
    }
  }
     componentDidMount() {
       fetch('https://i.ibb.co/XLQ6hVT/15-Kh-Z0wky-RA.jpg')
       .then(res => res.json())
       .then(json => {
         this.setState({
           isLoaded:true,
           url: json,
         })
       })
  }

  render() {
    return (    
      <img src={this.state.url} alt="avatar"/>
    )
  }
}

export default AvatarAPI;
