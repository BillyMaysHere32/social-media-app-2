import { React, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import { Form as FormBoot } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Auth() {
      // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
  const formClose = () => {setShow(false)};

  const handleSubmit = (e) => {
    e.preventDefault();
    // to avoid refresh
  };



  return (
    <div>
        <Button variant="primary" onClick={handleShow}>Sign In</Button>

        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Header closeButton onClick={formClose}>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container id="main-container" className="bg-light">
                    <FormBoot onSubmit={handleSubmit} noValidate id="sign-up-form" className="text-center">
                        <h1 className="mb-3 fs-3 fw-normal">"Auth"</h1>


                        <div className="d-grid mb-2">
                        <Button variant="primary" type="submit" size="lg">Submit</Button>
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
    </div>
  )
}
