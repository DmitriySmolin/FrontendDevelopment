import React, { Component } from 'react';
import './App.css';
import Navigation from'./Component/Navigation/Navigation'
import Header from './Component/Header/Header'
import About from './Component/About/About'
class App extends Component {

	render(){
		
		return(	
			<div className="container-fluid">
			 <div className="row">
			 <div className="col-12">
				<Navigation LogoTitle="Портфолио"/>
				<Header title="Дмитрий Смолин" button="Узнать больше"/>
				<About/>
				</div>
			</div>
			</div>
		);
	};
};


export default App;
