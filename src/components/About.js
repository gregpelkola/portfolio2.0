import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../style/About.css";

function About() {
    return (
       <section id="about" className="py-5">
        <h1 className="about-header">About Me</h1>
        <Container>
            <Row>
                <Col md={6}> // This is a placeholder for the image.
                    <Image src="https://via.placeholder.com/300" alt="placeholder" roundedCircle fluid />
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text> // This is a placeholder for the about me section.
                                I am a full-stack web developer with a background in customer service and project management. I am passionate about creating user-friendly applications that solve real-world problems. I am a quick learner and enjoy working with a team to create a product that is both functional and visually appealing. I am excited to bring my skills to a team that values collaboration and creativity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       </section>
    );
}