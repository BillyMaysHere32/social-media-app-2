import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';

export function Home({ currentId, setCurrentId }) {
  // set id where we can pass to posts and form 
  // const [currentId, setCurrentId] = useState(0);

    return (   
      <Container className="pe-0 ps-0"> 
      <div className="p-3 d-flex flex-row justify-content-between">
        <h1>Recent Posts</h1>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </div>
      <Row>
        <Col>
          <Posts setCurrentId={setCurrentId} />
        </Col>
      </Row>
    </Container> 

      // <Container className="pe-0 ps-0"> 
      //   <Row md={1} lg={2}>
      //     <Col md={8} xxl={8}>
      //       <Posts setCurrentId={setCurrentId} />
      //     </Col>
      //     <Col xxl={4}>
      //       <div><Form currentId={currentId} setCurrentId={setCurrentId}/></div>
      //     </Col>
      //   </Row>
      // </Container> 
    )
  }