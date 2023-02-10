import React from 'react'
import Container from 'react-bootstrap/Container';


export  function About() {
  return (
    <Container>
      <br></br>
      <h2 className="component-title fw-bold">About App</h2>
      <hr></hr>
      <Container className="d-flex flex-row align-items-center mb-5 mt-5">
        {/* <div>
          <img src={require('../assests/logo.jpg')}  style={{ width: "250px", height: "250px"}} 
            className="me-5 fluid rounded-circle" alt="me" />
        </div> */}
        <p className="lead">This is a MERN full stack social media app developed using React, NodeJs, Express redux, and MongoDB. It allow users to login and create, update or delete a post. To use the app please login with your email, or a fake email, to like other users posts or to create, modify or delete your own posts.</p>
       
      </Container>
    
    {/* <Row className="d-flex flex-row justify-content-between align-items-center g-5"> */}
  </Container>
  )
}

