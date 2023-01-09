import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaThumbsUp } from 'react-icons/fa';
import moment from 'moment'

export default function Post({ post, setCurrentId }) {

  return (
<Card className='h-100'>
<Card.Img variant="top" src={post.selectedFile} height="200px" style={{ objectFit: "cover"}} />

<Card.Body className="d-flex flex-column">
  <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
      <span className="fs-2">{post.title}</span>  
  </Card.Title>
  <Card.ImgOverlay>
  <Card.Subtitle className="fs-2 text-white">{post.creator}</Card.Subtitle>
  <Card.Text className="text-white">{moment(post.createdAt).fromNow()}</Card.Text>
  </Card.ImgOverlay>

  <Card.Text>{post.message}</Card.Text>
  <Card.Text className=" text-muted">{post.tags.map((tag) => `#${tag} `)}</Card.Text>

  <Button className="mb-2" size="sm" variant="primary"><FaThumbsUp /> Like {post.likeCount}</Button>
  <Button size="sm" variant="secondary">Delete</Button>
</Card.Body>
</Card> 
  )
}
