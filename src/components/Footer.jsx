import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../style/Footer.css";

const socials = [
    {
        name: "GitHub",
        link: "https://github.com/gregpelkola",
        icon: faGithub,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/greg-pelkola-3aba43295/",
        icon: faLinkedin,
    },
];

const Footer = () => {
    return (
        <footer className='footer bg-dark text-white'>
            <div className='footer-container d-flex justify-content-center align-items-center'>
                <section className='social-icons-wrapper d-flex'>
                    {socials.map(({ name, link, icon }) => (
                        <div key={name} className='d-flex flex-column align-items-center mx-md-2 transparent-bg'>
                            <a href={link} target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={icon} className="footer-icon-size"/>
                            </a>
                            <a href={link} target='_blank' rel='noreferrer'>
                                <span className='d-inline-block mx-1 name'>{name}</span>
                            </a>
                        </div>
                    ))}
                </section>
                <div className='mx-2'></div>
                <section className='footer-text'>
                    <p>Greg Pelkola &copy; {new Date().getFullYear()}</p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;