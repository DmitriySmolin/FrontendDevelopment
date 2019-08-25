import React, {Component} from 'react'
// import Background from '../../img/bg-masthead.jpg';
import './Header.css';

	const myStyles = {
		// backgroundImage: `url(${Background})`,
		backgroundColor : '#1d809f',
	    height: '100vh',
    	width: '100%',
    	display: 'flex',
    	alignItems: 'center',
    	textAlign: 'center'
	}

class Header extends Component {

	render(){
		return(
			       <header  id="home" className="container-fluent">
                <div className="row">
                    <div style={myStyles}>
                        <div className="col-12 mx-auto">
                            <h1 className="text1">{this.props.title}</h1>
                            <p className="text2">Frontend developer</p>
                            <div><a className="text3" href="#button">{this.props.button}</a></div>
                        </div>
                        </div>
                </div>
                <div className="overlay"></div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <a href="#about" className="downArrow">
                            <i className="fas fa-angle-double-down fa-2x"/>
                        </a>
                    </div>
                </div>
            </header>


			)
	}
};

export default Header;

