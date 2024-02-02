import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../style/Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

   const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
    };

    const handleMsgChange = (e) => {
        setMessage(e.target.value);
        setMessageError(false);
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (name.length <= 5) {
            setNameError(true);
            valid = false;
        }
        if (!validateEmail(email)) {
            setEmailError(true);
            valid = false;
        }
        if (message.length <= 10) {
            setMessageError(true);
            valid = false;
        }

        if (valid) {
            setMessageSent(true);
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col lg={8} className='mx-auto'>
                        <h2 className='contact-header'>Contact Me</h2>
                        {messageSent && (
                            <div className='alert alert-success' role='alert'>
                                Your message has been sent!
                            </div>
                        )}
                        <Form onSubmit={handleSubmit} noValidate>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    className={nameError ? "is-invalid" : ""}
                                    id='name'
                                    name='name'
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                                {nameError && (
                                <div className='invalid-feedback'>
                                    Please enter a name longer than 5 characters.
                                </div>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    className={emailError ? "is-invalid" : ""}
                                    id='email'
                                    name='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailError && (
                                    <div className='invalid-feedback'>
                                        Please enter a valid email address.
                                    </div>
                                )}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="message">Message</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows={5}
                                        className={messageError ? "is-invalid" : ""}
                                        id='message'
                                        name='message'
                                        value={message}
                                        onChange={handleMsgChange}
                                    />
                                    {messageError && (
                                        <div className='invalid-feedback'>
                                            Please enter a message longer than 10 characters.
                                        </div>
                                    )}
                                </Form.Group>
                                <Button type='submit' className='custom-send-message-button'>
                                    Send
                                </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
```

