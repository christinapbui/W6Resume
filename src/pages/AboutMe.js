import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutMe() {
    return (
        <>
        <Container className="aboutme-main">
            <Col>
                <img src="/img/headshot.jpeg" alt="self" className="aboutme-photo" style={{ width: '20rem' }}/>
            </Col>
            <Row>
                <Col>
                    <h1>About Me</h1>
                    <div>My name is Christina Bui. I'm from the US. I'm currently living in Vietnam. I work for an NGO.</div>
                </Col>
            </Row>
        </Container>
        {/* <Container className="aboutme-whatido">
            <Row className="aboutme-whatido-row">What I do:
            </Row>
        </Container> */}
        <Container className="aboutme-contact">
            <Row className="aboutme-contact-row">
                <h1>Contact Me</h1>
                <div>Email: <u>christina.bui2@gmail.com</u></div>
                <div>Phone: (+84) 70.777.6940</div>
            </Row>
        </Container>
        </>
    )
}
