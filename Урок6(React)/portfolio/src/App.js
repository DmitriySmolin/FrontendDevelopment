//import React from 'react'
import React, { Component } from 'react';
import './App.css';
import Portfolio from'./Portfolio/Portfolio'

//№1 - Функциональный компонент
//function App() {
//	return ( 
//		<div style={{textAlign:'center',border:'1px solid black',width:'50%',transform:'translate(50%,5%)'}}>
//		<Portfolio 
//		profession={'Web-разработчик'} 
//		fname={'Дмитрий'} 
//		sname={'Смолин'} 
//		information ={'Привет! Я начинающий веб-разработчик. Я начал заниматься программированием во время обучения в университете. Помимо обучения, я параллельно изучал много  дополнительной литературы и просматривал различные видеокурсы, затем поняв что могу уже что-то реализовать самостоятельно на практике, начал выполнять небольшие проекты для себя.Сейчас же продолжаю заниматься самообучением и совершенствовую свои навыки, получая еще больше опыта и знаний. Есть огромное желать стать Front-end разработчиком! Владею на базовом уровне: HTML, CSS, JavaScript.'}   
//		mail={'neox56@gmail.com'} 
//		tel={'+79128553767'} 
//		experience={'Без опыта'} 
//		bachelor={ 'ИжГТУ им. М.Т. Калашникова, Бакалавр, Инфокоммуникационные технологии и системы связи, 2014 - 2018'}  
//		master ={'ИжГТУ им. М.Т. Калашникова, Магистр, Информатика и вычислительная техника, 2018 - 2020'}/>
//		</div>	
//	);
//}

//№2 - Классовый компонент 
class App extends Component {
	state = {
		data : {
			 profession: 'Web-разработчик',
			 fname: 'Дмитрий',
			 sname: 'Смолин',
			 information: 'Привет! Я начинающий веб-разработчик',
			 mail:'neox56@gmail.com',
			 tel: '+79128553767',
			 experience: 'Без опыта',
			 bachelor :  'ИжГТУ им. М.Т. Калашникова, Бакалавр, Инфокоммуникационные технологии и системы связи, 2014 - 2018',
			 master : 'ИжГТУ им. М.Т. Калашникова, Магистр, Информатика и вычислительная техника, 2018 - 2020'
			}
		
	}
	render(){
		const data = this.state.data
		return(	
			<div style={{textAlign:'center',border:'1px solid black',width:'50%',transform:'translate(50%,5%)'}}>
				<Portfolio 
				profession={data.profession} 
				fname={data.fname} 
				sname={data.sname} 
				information ={data.information}   
				mail={data.mail} 
				tel={data.tel} 
				experience={data.experience} 
				bachelor={ data.bachelor}  
				master ={data.master}/>
			</div>
		);
	};
};


export default App;
