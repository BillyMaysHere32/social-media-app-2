import React from 'react'
import Post from './Post/Post'
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux';

export default function Posts() {
  //fetch data from global redux store
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <Container>
        <h1>Recent Posts</h1>
        {/* <Post />
        <Post /> */}
 
     <Row md={1} xs={1} lg={2} className="g-3">
             {posts.map((post) => (
              <Col key={post._id}>
                <Post post={post} />
            </Col>
        ))}
      </Row>
    </Container>

    // !posts.length ? <CircularProgress /> : (
    //   <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    //      {posts.map((post) => (
    //       <Grid key={post._id} item xs={12} sm={6} md={6}>
    //         <Post post={post} setCurrentId={setCurrentId} />
    //       </Grid>
    //     ))}
    //   </Grid>
    // )
  )
}
