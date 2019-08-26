import React, { Component } from 'react';
import './App.css';
import Navigation from'./Component/Navigation/Navigation'
import Header from './Component/Header/Header'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
class App extends Component {

	render(){
		
		return(	
			<div className="container-fluid">
			 <div className="row">
			 <div className="col-12">
				<Navigation LogoTitle="Портфолио"/>
				<Header title="Дмитрий Смолин" button="Узнать больше"/>
				<About/>
				<Services/>
				<Portfolio/>
				<Contact/>
				<Footer footer={'© Copyright 2019 React Portfolio by Dmitry Smolin'}/>
				</div>
			</div>
			</div>
		);
	};
};


export default App;
