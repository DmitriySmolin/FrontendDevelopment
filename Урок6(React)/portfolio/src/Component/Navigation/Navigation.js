import React, { Component } from 'react';
// import './App.css';
import './Navigation.css';
class Navigation extends Component {
    render() {    
    	const sections = ['Главная','Обо мне','Услуги','Портфолио','Контакты'];
    	const navLinks = sections.map(section => {
    		return(
    			<li><a href={'#' + section}>{section}</a></li>
    		)
    	})
       return (
               <nav>
               		<h2 className="logo">{this.props.LogoTitle}</h2>
					<ul>
						{navLinks}
					</ul>
               	</nav>

               
        );
    }
}

export default Navigation;