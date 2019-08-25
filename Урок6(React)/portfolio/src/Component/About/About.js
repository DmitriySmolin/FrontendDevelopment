import React, {Component} from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <section className="about">
            <div id="about" className='container-fluent bg-dark backgroundAbout'>
                <div className="row justify-content-between">
                    <div className="col-10 mx-auto col-md-4 my-5 mx-5">
                        <div className="information">
                            <h2><i className="fa fa-user-circle" aria-hidden="true"></i> О себе</h2>
                            <p>Привет! Я начинающий веб-разработчик. Я начал заниматься программированием во время обучения в университете. Помимо обучения, я одновременно изучал много дополнительной литературы и смотрел различные видеокурсы, затем, осознав, что уже могу что-то реализовать самостоятельно, я начал выполнять небольшие проекты для себя. Сейчас я продолжаю заниматься самообучением и совершенствую свои навыки, приобретая еще больше опыта и знаний. Есть большое желание стать Front-end разработчиком! Владею на базовом уровне: HTML, CSS, JavaScript.</p>
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
                        </div>
                    </div>
                </div>
                </div>
                </section>
        );
    }
}
export default About;
