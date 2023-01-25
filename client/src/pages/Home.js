import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { React, useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';

import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';

export function Home() {
  // set id where we can pass to posts and form 
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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
    )
  }