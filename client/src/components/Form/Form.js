import React,  { useState, useEffect } from 'react';
import { createPost, updatePost } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { Container, Form as FormBoot } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './styles.css';

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((post) => post._id === currentId) : null));
  const dispatch = useDispatch();

  // populate values of form when post value changes

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  console.log(postData)
  console.log(currentId)

  const handleSubmit = (e) => {
    e.preventDefault();
    // to avoid refresh
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const clear = (e) => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  return (
    <Container id="main-container" className="d-grid bg-light h-100">
      <FormBoot onSubmit={handleSubmit} noValidate id="create-post-form" className="text-center p-3 w-100">
        <h1 className="mb-3 fs-3 fw-normal">{currentId ? `Make changes to "${post.title}"` : "Create a Post!"}</h1>

        <FloatingLabel
        controlId="creator"
        label={currentId ? `${postData.creator}` : "Creator"}
        className="mb-3"
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        ><FormBoot.Control as="textarea" placeholder="Leave a message here" />
        </FloatingLabel>

        <FloatingLabel
        controlId="title"
        label={currentId ? `${postData.title}` : "Title"}
        className="mb-3"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ><FormBoot.Control as="textarea" placeholder="Enter title here" />
        </FloatingLabel>


        <FloatingLabel
        controlId="message"
        label={currentId ? `${postData.message}` : "Message"}
        className="mb-3"value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        ><FormBoot.Control as="textarea" placeholder="Leave a message here" />
        </FloatingLabel>


        <FloatingLabel
        controlId="tags"
        label={currentId ? `${postData.tags}` : "Tags"}
        className="mb-3"
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ><FormBoot.Control as="textarea" placeholder="Leave a message here" />
        </FloatingLabel>

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

        <p className="mt-5 text-muted">&copy; 2021-2022</p>
      </FormBoot>
  </Container>
  )
}
