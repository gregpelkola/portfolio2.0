import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../style/About.css";

function About() {
    return (
    <section id="about" className="py-5">
        <h1 className="about-header">About Me</h1>
        <Container>
            <Row>
                <Col md={6}>
                    <Image src="./images/avatar.png" alt="myavatar"/>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text> 
                                Hi, my name is Greg Pelkola. I enjoy playing guitar, video games, relaxing with my dogs, and of course, coding. I am a full stack web developer with a passion for creating and maintaining web applications. I am skilled in HTML, CSS, JavaScript, Node.js, Express.js, SQL, and React. I am also familiar with MongoDB, Mongoose, and Git. I am a quick learner and am always looking to expand my skill set. I am currently attending the University of Wisconsin Extended Campus Full Stack Bootcamp, I will be graduating February 2024.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default About;