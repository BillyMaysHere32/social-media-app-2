import { React, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import { Form } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Auth() {
      // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
  const formClose = () => {setShow(false)};

  const isSignUp = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    // to avoid refresh
  };

  return (
    <div className="me-1">
        <Button variant="primary" onClick={handleShow}>{isSignUp ? "Sign Up" : "Log In"}</Button>

        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Header closeButton onClick={formClose}>
                <Modal.Title>{isSignUp ? "Sign Up" : "Sign In"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container id="main-container" className="bg-light">
                    <Form onSubmit={handleSubmit} noValidate id="sign-up-form" className="text-center">
                        <h1 className="mb-3 fs-3 fw-normal">{isSignUp ? "Sign Up" : "Log In"}</h1>
                        { isSignUp && (
                            <>
                                <FloatingLabel
                                    controlId="first-name"
                                    label="First Name"
                                    className="mb-3"
                                    ><Form.Control as="textarea" placeholder="Leave a message here" 
                                    value="" 
                                    // onChange={ => ()}
                                />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="last-name"
                                    label="Last Name"
                                    className="mb-3"
                                    ><Form.Control as="textarea" placeholder="Leave a message here" 
                                    value="" 
                                    // onChange={ => ()}
                                />
                                </FloatingLabel>
                            </>
                        )}

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers,
                                and must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </FloatingLabel>

                        { isSignUp &&
                            <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        }

                        <div className="d-grid mt-4 mb-2">
                            <Button variant="primary" type="submit" size="lg">{isSignUp ? "Create Account" : "Log In"}</Button>
                        </div>

                        <p className="mt-5 text-muted">&copy; 2022-2023</p>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={formClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}
