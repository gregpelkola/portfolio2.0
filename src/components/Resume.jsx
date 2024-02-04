import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../style/Resume.css";
//import PDF from './docs/Gregory-Pelkola-Resume.pdf';

function Resume() {
    return (
        <section id="resume" className='resume-wrapper'>
            <Container className="resume-section">
                <Row>
                    <Col className='text-center'>
                        <h1>Resume</h1>
                        <hr className='star-primary' />
                        {/* <Button variant='dark' href={PDF} download>Download Resume</Button> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume;