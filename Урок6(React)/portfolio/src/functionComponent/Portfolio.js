import React from 'react'

export default (props) => (
	<div>
		<h3>{props.profession}</h3>
		<p>Имя: {props.fname}</p>
		<p>Фамилия: {props.sname}</p>
		<p>О себе: <br/> {props.information}</p>
		<p>Образование: <br/> {props.bachelor} <br/> {props.master}</p>
		<p>Контакты: {props.tel}, {props.mail}</p>
		<p>Опыт работы: {props.experience}</p>	
	</div>
)
	
