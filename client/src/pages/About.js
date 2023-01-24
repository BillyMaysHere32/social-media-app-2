import React from 'react'
import Skills from '../components/Skills'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export  function About() {
  return (
    <Container>
      <h2 className="component-title fw-bold">About Me</h2>
      <hr></hr>
      <Container className="mb-5 mt-5">
      <Row className="d-flex flex-row justify-content-between align-items-center g-5">
          <Col md={12} lg={6} className="d-flex flex-column justify-content-center align-items-center">
            <img src={require('../assests/me.jpg')} className="w-50 rounded-circle profile mb-5" alt="me" />
            <p className="lead">I’m a MERN full‑stack developer that enjoys approaching my projects with a user‑first perspective. My passion is creating responsive applications using modern tools such as React and NodeJs, with focus on user experience.</p>
          </Col>

          <Col className="">
            <Skills />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

