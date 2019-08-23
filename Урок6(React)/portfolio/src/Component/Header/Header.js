import React, {Component} from 'react'
// import Background from '../../img/bg-masthead.jpg';
import './Header.css';

	const myStyles = {
		// backgroundImage: `url(${Background})`,
		backgroundColor : '#1d809f',
		height: '50vh',
		backgroundSize: 'cover'
	}

class Header extends Component {

	render(){
		return(
			<header style={myStyles}>
			<img src="images/profile.jpg"  alt="profile picture"/>
			<h1>{this.props.title}</h1>
			<p>Frontend developer</p>
			<a href="#button">{this.props.button}</a>
			<div className="overlay"></div>
			</header>
			)
	}
};

export default Header;