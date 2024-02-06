import React from 'react';
import "../style/Project.css";

import PropTypes from 'prop-types';

function Project(props) {
    return (
        <div className='card'>
            <h5 className='card-title'>{props.title}</h5>
            <a href={props.deployed} target='_blank' rel='noreferrer'>
                <img src={props.imgSrc} className='card-img-top' alt={props.imgAlt} />
            </a>
            <div className='card-body'>
                <p className='card-text'>{props.description}</p>
                <a href={props.deployed} target='_blank' rel='noreferrer' className='btn btn-primary'>Deployed App</a>
                <a href={props.github} target='_blank' rel='noreferrer' className='btn btn-primary'>GitHub Repository</a>
            </div>
        </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    deployed: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
};


export default Project;