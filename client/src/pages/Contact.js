import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ybtifoz', 'template_rw1kl0s', form.current, 'udzqDcPaUVHp8xI8W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h1 className="mb-3 fs-3 fw-normal">Contact Us</h1>

      <FloatingLabel controlId="name" label="Name" className="mb-3">
        <Form.Control name="name" as="textarea" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="email" label="Email address" className="mb-3">
        <Form.Control type="email" name="email" placeholder="name@example.com" />
      </FloatingLabel>
      
      <FloatingLabel controlId="message" label="Message" >
        <Form.Control name="message" as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
      </FloatingLabel>

      <div className="d-grid mt-3">
        <Button variant="primary" type="submit" size="lg">Submit</Button>
      </div>
    </form>
  );
};
