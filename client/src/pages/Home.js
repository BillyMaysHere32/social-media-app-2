import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';

export function Home() {
  const [currentId, setCurrentId] = useState(0);

    return (   
      <Container className="pe-0 ps-0"> 
        <Row md={1} lg={2}>
          <Col md={8} xxl={8}>
            <Posts setCurrentId={setCurrentId} />
          </Col>
          <Col xxl={4}>
            <div><Form currentId={currentId} setCurrentId={setCurrentId}/></div>
          </Col>
        </Row>
      </Container> 
    )
  }