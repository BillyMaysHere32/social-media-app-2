import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

import { Button, Card, Container } from 'react-bootstrap'
import { FaThumbsUp } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import moment from 'moment'

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();

  return (
<Card className='h-100'>
  
    <Card.Img variant="top" src={post.selectedFile} height="400px" style={{ objectFit: "cover"}} />
    <Card.ImgOverlay className="d-flex flex-row justify-content-between">
        <div>
          <div>
            <Card.Subtitle className="fs-2 text-white">{post.creator}</Card.Subtitle>
            <Card.Text className="text-white">{moment(post.createdAt).fromNow()}</Card.Text>
          </div>
          <div><Button className="p-0 text-white" variant="primary-outline"><FaThumbsUp /> Like {post.likeCount}</Button></div>
        </div>
        <div>
          <Button className="pt-0 fs-4 text-white" size="lg" variant="primary-outline"
            onClick={() => setCurrentId(post._id)}><FaEdit /></Button>

          <Button className="pt-0 fs-4 text-white" size="lg" variant="primary-outline" 
            onClick={() => dispatch(deletePost(post._id))}><FaTrashAlt /></Button>
          
        </div>
      </Card.ImgOverlay>

  <Card.Body className="d-flex flex-column">
    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
      <span className="fs-2">{post.title}</span>  
    </Card.Title>

    <Card.Text>{post.message}</Card.Text>
    <Card.Text className=" text-muted">{post.tags.map((tag) => `#${tag} `)}</Card.Text>
    
    <div className="d-flex flex-row justify-content-between p-0">
      <Button className="mb-2" size="sm" variant="primary"><FaThumbsUp /> Like {post.likeCount}</Button>
      <Button className="mb-2" size="sm" variant="secondary" 
        onClick={() => dispatch(deletePost(post._id))}><FaTrashAlt /></Button>
    </div>
  </Card.Body>
</Card> 
  )
}
