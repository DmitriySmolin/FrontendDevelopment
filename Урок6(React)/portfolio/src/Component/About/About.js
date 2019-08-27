import React, {Component} from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <section id="Обо мне" className="about">
            <div  id="about" className='container-fluent bg-dark backgroundAbout'>
                <div className="row justify-content-between">
                    <div className="col-10 mx-auto col-md-4 my-5 mx-5">
                        <div className="information">
                            <h2><i className="fa fa-user-circle" aria-hidden="true"></i> Обо мне</h2>
                            <p>Привет, меня зовут Дмитрий! Я начинающий веб-разработчик. В настоящее время я активно занимаюсь самообучением и совершенствую свои навыки программирования, приобретая с каждным днем все больше опыта и знаний. За моими плечами уже есть три завершенных проекта, которые мне удалось  успешно реализовать! Если вы хотите ознакомиться с ними, то вы можете перейти в раздел <a href="#Портфолио"> «Портфолио»</a>. На данные момент владею на базовом уровне: HTML, CSS, JavaScript.</p>
                        </div>
                    </div>

                    <div className="col-10 mx-auto col-md-5 my-5 mx-5">
                        <div className="education">
                            <h2><i className="fa fa-graduation-cap" aria-hidden="true"></i> Образование</h2>
                            <p>ИжГТУ им. М.Т. Калашникова, Бакалавр, Инфокоммуникационные технологии и системы связи <br/>2014 - 2018</p>
                            <p>ИжГТУ им. М.Т. Калашникова, Магистр,<br/> Информатика и вычислительная техника  
                            <br/> 2018 - 2020</p>
                        </div>
                    </div>
                </div>
                    <div className="row justify-content-center">
                    <div className="col-10 mx-auto col-md-6 my-5 mx-5">
                        <div className="information">
                            <h2><i className="fa fa-building"></i> Опыт работы</h2>
                            <p>Без  опыта</p>
                        </div>
                    </div>
                </div>
                </div>
                </section>
        );
    }
}
export default About;
