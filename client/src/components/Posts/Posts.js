import React from 'react'
import Post from './Post/Post'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

export default function Posts({ setCurrentId }) {
  //fetch data from global redux store
  const posts = useSelector((state) => state.posts);
  //console.log(posts);

  return (
    !posts.length ? <Spinner animation="border" /> : (
    <Container>
      <Row md={2} xs={1} lg={2} xl={3} className="g-3">
        {posts.map((post) => (
          <Col key={post._id}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Col>
        ))}
      </Row>
    </Container>
    )
  )
}
