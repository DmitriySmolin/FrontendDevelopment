import React, { Component } from 'react';
import './App.css';
import Navigation from'./Component/Navigation/Navigation'
import Header from './Component/Header/Header'
 
class App extends Component {

	render(){
		
		return(	
			<div>
				<Navigation LogoTitle="Портфолио"/>
				<Header title="Дмитрий Смолин" button="Узнать больше"/>
			</div>
		);
	};
};


export default App;
