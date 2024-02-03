import React from 'react';
import Project from './Project';
import techBlog from '../images/tech-blog.png';
import logoMaker from '../images/logo-maker.png';
import spiritLabs from '../images/spirit-labs.png';
import noteTaker from '../images/note-taker.png';
import eCommerce from '../images/e-commerce.png';
import myPortfolio from '../images/my-portfolio.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

function Portfolio() {
    return (
        <div className='portfolio-wrapper'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className='container'>
                <div className='row'>
                    {[
                        {
                            title: 'Tech Blog',
                            image: techBlog,
                            description: 'A CMS-style blog site similar to a Wordpress site, where a user can publish their blog posts and comment on other user posts as well.',
                            github: 'https://github.com/gregpelkola/tech-blog',
                            deployed: 'https://fierce-citadel-96014-077ff42eca39.herokuapp.com/'
                        },
                        {
                            title: 'Logo Maker',
                            image: logoMaker,
                            description: 'An app that allows users to create and save logos.',
                            github: 'https://github.com/gregpelkola/logo-maker'
                        },
                        {
                            title: 'Spirit Labs',
                            image: spiritLabs,
                            description: 'A website for a cocktail recipe finder and random cocktail generator.',
                            github: 'https://github.com/gregpelkola/spirit-labs',
                            deployed: 'https://gregpelkola.github.io/spirit-labs/'
                        },
                        {
                            title: 'Note Taker',
                            image: noteTaker,
                            description: 'An app that can be used to write, save, and delete notes.',
                            github: 'https://github.com/gregpelkola/notes-taker',
                            deployed: 'https://notes-taker-c285992a1dc3.herokuapp.com/'
                        },
                        {
                            title: 'E-Commerce Backend',
                            image: eCommerce,
                            description: 'The back end for an e-commerce site.',
                            github: 'https://github.com/gregpelkola/e-shop'
                        },
                        {
                            title: 'My Portfolio',
                            image: myPortfolio,
                            description: 'My first portfolio site.',
                            github: 'https://github.com/gregpelkola/my-portfolio',
                            deployed: 'https://gregpelkola.github.io/my-portfolio/'
                        },
                    ].map((project, index) => (
                        <div className='col-12 col-md-6 col-lg-4 my-2' key={index}>
                            <Project
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                github={project.github}
                                deployed={project.deployed}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
