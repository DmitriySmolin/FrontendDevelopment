import React, {Component} from 'react';

class Project extends Component {
    render() {
        const {title, description, icon, link} = this.props;
        return (
            <div className="col-10 mx-auto col-lg-4 my-3 my-5">
                <div className='containerBox'>
                    <div className='box'>
                        <div className='content'>
                            <i className={icon}/>
                            <h3 className="titleProject">{title}</h3>
                            <p>
                                {description}
                            </p>
                            <a href={link} target="_blank">Посмотреть..</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
