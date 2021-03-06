import React from "react";
import "./Portfolio.css";
import Project from "./Project";

const descriptionProjects = [
  {
    title: "Сервис погоды API OpenWeatherMap",
    description:
      "Сайт погоды, показывающий погодные условия: на сегодня, на 5 дней, историю погоды",
    icon: "fab fa-js",
    link: "https://dmitriysmolin.github.io/eFED2018Win/index.html"
  },
  {
    title: "Макет веб-студии Smart Guys Company на Bootstrap 4",
    description: "Адаптивная верстка макета",
    icon: "fab fa-bootstrap",
    link:
      "https://dmitriysmolin.github.io/FrontendDevelopment/%D0%A3%D1%80%D0%BE%D0%BA4(%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F%20%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0%20Bootstrap4)/"
  },
  {
    title: "Сайт портфолио на React",
    description: "Однострачничный сайт-портфолио разработанный на React",
    icon: "fab fa-react",
    link:
      "https://github.com/DmitriySmolin/FrontendDevelopment/tree/master/%D0%A3%D1%80%D0%BE%D0%BA6(React)/portfolio"
  }
];

class Portfolio extends React.PureComponent {
  render() {
    return (
      <section id="Портфолио" className="projects">
        <div id="projects" className="container-fluent backgroundProjects">
          <h2>Портфолио</h2>
          <div className="row py-4">
            {descriptionProjects.map((descriptionProject, index) => (
              <Project
                key={index}
                title={descriptionProject.title}
                description={descriptionProject.description}
                icon={descriptionProject.icon}
                link={descriptionProject.link}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
