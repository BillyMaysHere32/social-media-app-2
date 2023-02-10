import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaThumbsUp } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import moment from 'moment'

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  // Likes sub component
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <>{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <>{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <>Like</>;
  };

  return (
<Card className='h-100'>
  
    <Card.Img variant="top" src={post.selectedFile} height="400px" style={{ objectFit: "cover"}} />
    <Card.ImgOverlay className="d-flex flex-row justify-content-between">
        <div>
          <div>
            <Card.Subtitle className="fs-2 text-white">{post.name}</Card.Subtitle>
            <Card.Text className="text-white">{moment(post.createdAt).fromNow()}</Card.Text>
          </div>
        </div>
        <div>
          <Button className="fs-5 text-white" 
            variant="primary-outline" 
            onClick={() => dispatch(likePost(post._id))}
            disabled={!user?.result}
            >
              <FaThumbsUp />
          </Button>

          <Button className="pt-0 fs-4 text-white" size="lg" variant="primary-outline"
            onClick={() => setCurrentId(post._id)}><FaEdit /></Button>

          <Button className="pt-0 fs-4 text-white" size="lg" variant="primary-outline" 
            onClick={() => dispatch(deletePost(post._id))}><FaTrashAlt /></Button>
          
        </div>
      </Card.ImgOverlay>
      
      

  <Card.Body className="d-flex flex-column">
    <Card.Text><Likes /></Card.Text>
    <Card.Title className="mb-4 fs-2"><span>{post.title}</span></Card.Title>
    <Card.Text>{post.message}</Card.Text>
    
    {/* <Card.Text className=" text-muted">{post.tags.map((tag) => `#${tag} `)}</Card.Text> */}
    
    {/* <div className="d-flex flex-row justify-content-between p-0">
      <Button className="mb-2" size="sm" variant="primary" 
        onClick={() => dispatch(likePost(post._id))}><FaThumbsUp /> Like {post.likeCount}</Button>
      <Button className="mb-2" size="sm" variant="secondary" 
        onClick={() => dispatch(deletePost(post._id))}><FaTrashAlt /></Button>
    </div> */}
  </Card.Body>
</Card> 
  )
}
