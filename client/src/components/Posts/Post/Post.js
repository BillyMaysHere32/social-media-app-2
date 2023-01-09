import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Post({ post, setCurrentId }) {

  return (
    // <div>
    //   <h1>Post</h1>
    // </div>
   

<Card className='h-100'>
<Card.Img variant="top" src={post.selectedFile} height="200px" style={{ objectFit: "cover"}} />

<Card.Body className="d-flex flex-column">
  <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
      <span className="fs-2">{post.creator}</span>
         
  </Card.Title>
  <div className='mt-auto'>

    </div>  
</Card.Body>
</Card> 


  )
}
