import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
// import logo from './images/logo.jpg';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  return (
    <Container>
      <h1>app</h1>
          {/* <Row md={2} xs={1} lg={3} className="g-3">
            <Col xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId} />
            </Col>
            <Col xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Col>
          </Row> */}
        </Container>
  );
};

export default App;
