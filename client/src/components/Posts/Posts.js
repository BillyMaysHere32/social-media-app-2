import React from 'react'
import Post from './Post/Post'
import { Container, } from "react-bootstrap";

export default function Posts() {
  return (

    <Container>
        <h1>Recent Posts</h1>
        <Post />
        <Post />
    </Container>
    // <Row md={2} xs={1} lg={3} className="g-3">
    //         {storeItems.map(item => (
    //           <Col key={item.id}>
    //             <Post {...item} />
    //         </Col>
    //     ))}
    //   </Row>
  )
}
