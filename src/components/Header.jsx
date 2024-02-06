import React from 'react';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/Header.css";

function Header() {
    return (
        <>
            <Container fluid className="bg-dark">
                <Row className='justify-content-center text-center mb=0'>
                    <Col className='pb-o'>
                        <h1 className='text-white' style={{fontSize: '3rem'}}></h1>
                    </Col>
                </Row>
            </Container>
            <Navigation />
        </>
    );
};

export default Header;