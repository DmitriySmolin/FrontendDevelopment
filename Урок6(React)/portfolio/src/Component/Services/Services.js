import React, { Component } from 'react';
import './Services.css'
class Services extends Component {
    render() {
        return (
        	<section id="services">
            <div className="services">
				<div className="row">
					<Icons icon={iconObj[0].icon} title={iconObj[0].title} description={iconObj[0].description}/>
					<Icons icon={iconObj[1].icon} title={iconObj[1].title} description={iconObj[1].description}/>
					<Icons icon={iconObj[2].icon} title={iconObj[2].title} description={iconObj[2].description}/>
					<Icons icon={iconObj[3].icon} title={iconObj[3].title} description={iconObj[3].description}/>
				</div>
				 <div className="overlay-services"></div>
			</div>
			</section>
        );
    }
}

const iconObj = [
	{
		icon: <ion-icon name="phone-portrait"></ion-icon>,
		title: 'Адпативный дизайн',
		description:'Отлично будет смотреться на любом экране!'
	},
	{
		icon: <ion-icon name="create"></ion-icon>,
		title: 'Верстка на Bootstrap 4',
		description:'Быстрая верстка с  Bootstrap 4.'
	},
	{
		icon: <ion-icon name="logo-javascript"></ion-icon>,
		title: 'JavaScript (jQuery)',
		description:"Помощь в написании скриптов"
	},
	{
		icon: <ion-icon name="help"></ion-icon>,
		title: 'Вопросы',
		description:'Есть вопросы? Консультация бесплатно!'
	}
]

class Icons extends Component {

    render() {
        return (
        <div>
			<span>
			{this.props.icon}
			</span>
			<h4>{this.props.title}</h4>
			<p>{this.props.description}</p>
		</div>
        )

    }
}

export default Services


