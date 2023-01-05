import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Posts({ setCurrentId }) {
    //fetch data from global redux store
    const posts = useSelector((state) => state.posts);
    
    console.log(posts);

    return (
        <div>
        <Container >
            {posts.map((post) => (
            <Row>
                <Col><Post post={post} setCurrentId={setCurrentId} /></Col>
            </Row>
            ))}
        </Container>
        </div>
    )
}
