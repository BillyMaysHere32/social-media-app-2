import React from 'react'

export default function Form() {
  return (
    <div>
      <h1>Form</h1>
    </div>
      )
    }





// import React,  { useState, useEffect } from 'react';
// import { Container, Form as FormBoot } from "react-bootstrap"
// import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import './styles.css';
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';
// import { createPost } from '../../actions/posts';

// export default function Form({ currentId, setCurrentId }) {
//   const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
//   const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
//   const dispatch = useDispatch();

//   // populate values of form when post value changes
//   useEffect(() => {
//     if (post) setPostData(post);
//   }, [post]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // to avoid refresh
//     if (currentId === 0) {
//       dispatch(createPost(postData));
//       clear();
//     } else {
//       // dispatch(updatePost(currentId, postData));
//       clear();
//     }
//   };

//   const clear = (e) => {
//   };

//   return (
//     <Container id="main-container" className="d-grid h-100">
//       <FormBoot onSubmit={handleSubmit} noValidate id="create-post-form" className="text-center p-3 w-100">
//         <h1 className="mb-3 fs-3 fw-normal">Create a Post!</h1>

//         <FloatingLabel
//         controlId="creator"
//         label="Creator"
//         className="mb-3"
//         value={postData.creator}
//         onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
//         >
//           <FormBoot.Control as="textarea" placeholder="Leave a message here" />
//         </FloatingLabel>

//         <FloatingLabel
//         controlId="title"
//         label="Title"
//         className="mb-3"
//         value={postData.title}
//         onChange={(e) => setPostData({ ...postData, title: e.target.value })}
//         >
//           <FormBoot.Control as="textarea" placeholder="Leave a message here" />
//         </FloatingLabel>

//         <FloatingLabel
//         controlId="message"
//         label="Message"
//         className="mb-3"value={postData.message}
//         onChange={(e) => setPostData({ ...postData, message: e.target.value })}
//         >
//           <FormBoot.Control as="textarea" placeholder="Leave a message here" />
//         </FloatingLabel>

//         <FloatingLabel
//         controlId="tags"
//         label="Tags"
//         className="mb-3"
//         value={postData.tags}
//         onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
//         >
//           <FormBoot.Control as="textarea" placeholder="Leave a message here" />
//         </FloatingLabel>

//         <FormBoot.Group controlId="picture" className="mb-3">
//           <FormBoot.Label></FormBoot.Label>
//           {/* <FormBoot.Control type="file" size="sm" /> */}
//           {/* <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /> */}
//         </FormBoot.Group>

//         <div className="d-grid mb-2">
//           <Button variant="primary" type="submit" size="lg">Submit</Button>
//         </div>

//         <div className="d-grid">
//           <Button variant="secondary" onClick={clear} size="sm">Clear</Button>
//         </div>

//         <p className="mt-5 text-muted">&copy; 2021-2022</p>
//       </FormBoot>
//   </Container>
//   )
// }