import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../style/Resume.css";
import PDF from '../docs/Gregory-Pelkola-Resume.pdf.pdf';

function Resume() {
    return (
        <section id="resume" className='resume-wrapper'>
            <Container className="resume-section">
                <Row>
                    <Col className='text-center'>
                        <h1>Resume</h1>
                        <hr className='star-primary' />
                        <Button variant='dark' href={PDF} download>Download Resume</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>
                                <strong>Coding Languages:</strong> HTML, JavaScript and CSS
                            </li>
                            <li>
                                <strong>Frameworks:</strong> React.js, Bootstrap and jQuery
                            </li>
                            <li>
                                <strong>Database Management:</strong> SQL, NoSQL and MongoDB
                            </li>
                            <li>
                                <strong>Platforms:</strong> Github, Heroku, Render and Netlify
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume;