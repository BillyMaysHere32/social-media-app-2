import React,  { useState, useEffect } from 'react';
import { createPost, updatePost } from '../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { Form as FormBoot } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


import Modal from 'react-bootstrap/Modal';

export default function Form({ currentId, setCurrentId }) {
  // data in form inputs
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  // if current id, find that specific post
  const post = useSelector((state) => (currentId ? state.posts.find((post) => post._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
  const formClose = () => {setShow(false); clear()}

  // populate values of form when post value changes
  useEffect(() => {
    if (post) setPostData(post); 
  }, [post]);

  // populate update post form
  useEffect(() => {
    if (currentId) setShow(true);
  }, [currentId]);

  // console.log(postData)
  // console.log(currentId)

  const handleSubmit = (e) => {
    e.preventDefault();
    // to avoid refresh
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name}));
      formClose();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name}));
      formClose();
    }
  };

  const clear = (e) => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  if (!user?.result?.name) {
    return (
      <></>
    )
  }

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
    Create Post
  </Button>

    <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
    <Modal.Header closeButton onClick={formClose}>
      <Modal.Title>Post Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <Container id="main-container" className="bg-light">
      <FormBoot onSubmit={handleSubmit} noValidate id="create-post-form" className="text-center">
        <h1 className="mb-3 fs-3 fw-normal">{currentId ? `Make changes to "${post.title}"` : "Create a Post!"}</h1>

        {/* <FloatingLabel
        controlId="creator"
        label={!currentId ? "Creator" : `${postData.creator}`}
        className="mb-3"
        ><FormBoot.Control as="textarea" placeholder="Leave a message here" 
          value={postData.creator} 
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
        </FloatingLabel> */}

        <FloatingLabel
        controlId="title"
        label={currentId ? `${postData.title}` : "Title"}
        className="mb-3"
        ><FormBoot.Control as="textarea" placeholder="Enter title here" 
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
        </FloatingLabel>


        <FloatingLabel
        controlId="message"
        label={currentId ? `${postData.message}` : "Message"}
        className="mb-3"
        ><FormBoot.Control as="textarea" placeholder="Leave a message here" 
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
        </FloatingLabel>


        {/* <FloatingLabel
        controlId="tags"
        label={currentId ? `${postData.tags}` : "Tags"}
        className="mb-3"
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ><FormBoot.Control as="textarea" placeholder="Leave a message here" />
        </FloatingLabel> */}

        <FormBoot.Group controlId="picture" className="mb-3">
          {/* <FormBoot.Control type="file" size="sm" /> */}
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </FormBoot.Group>

        <div className="d-grid mb-2">
          <Button variant="primary" type="submit" size="lg">Submit</Button>
        </div>

        <div className="d-grid">
          <Button variant="secondary" onClick={clear} size="sm">Clear</Button>
        </div>

        <p className="mt-5 text-muted">&copy; 2022-2023</p>
      </FormBoot>
  </Container>

  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={formClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}
