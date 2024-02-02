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
            <div className='footer-container'>
                <section className='social-icons-wrapper d-flex flex-md-row justfiy-content-center'>
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
                <section className='footer-text'>
                    <p>Greg Pelkola &copy; 2024</p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;