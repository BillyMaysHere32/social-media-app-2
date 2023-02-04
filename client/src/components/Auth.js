import { React, useState } from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { AUTH } from '../constants/actionTypes';
import jwt_decode from 'jwt-decode'
import { signin, signup } from '../actions/auth';

import { Form } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function Auth() {
  // state 
  const initialState = { firstName: '', lastName: '', userEmail: '', userPassword: '', confirmPassword: '' };

  // sign up input state
  const [userData, setUserData] = useState(initialState);
  
  // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
  const formClose = () => {setShow(false)};

  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // to avoid refresh
    e.preventDefault();
    console.log(userData);

    if (isSignUp) {
        dispatch(signup(userData));
        refreshPage();
      } else {
        dispatch(signin(userData));
        refreshPage();
      }
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="me-1">
        <Button variant="primary" onClick={handleShow}>{isSignUp ? "Sign Up" : "Log In"}</Button>

        <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
            <Modal.Header closeButton onClick={formClose}>
                <Modal.Title>{isSignUp ? "Sign Up" : "Sign In"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Container id="sign-in-container" className="bg-light">
                    <Form onSubmit={handleSubmit} noValidate id="sign-up-form" className="text-center">
                        <h1 className="mb-3 fs-3 fw-normal">{isSignUp ? "Sign Up" : "Log In"}</h1>
                        <div>
                        {/* First and Last name inputs */}
                        { isSignUp && (
                            <>
                                <FloatingLabel
                                    controlId="firstName"
                                    label="First Name"
                                    className="mb-3"
                                    ><Form.Control as="textarea" placeholder="Leave a message here" 
                                    value={userData.firstName} 
                                    onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                                />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="lastName"
                                    label="Last Name"
                                    className="mb-3"
                                    ><Form.Control as="textarea" placeholder="Leave a message here" 
                                    value={userData.lastName} 
                                    onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                                />
                                </FloatingLabel>
                            </>
                        )}

                        {/* Email and Password inputs */}
                        <FloatingLabel
                            controlId="userEmail"
                            label="Email"
                            className="mb-3"
                        ><Form.Control type="email" placeholder="name@example.com" 
                            value={userData.userEmail}  
                            onChange={(e) => setUserData({ ...userData, userEmail: e.target.value })}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="userPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" 
                                value={userData.userPassword}  
                                onChange={(e) => setUserData({ ...userData, userPassword: e.target.value })}/>
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers,
                                and must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </FloatingLabel>

                        {/* Confirm password in sign up input */}
                        { isSignUp &&
                            <FloatingLabel controlId="confirmPassword" label="Confirm Password">
                                <Form.Control type="password" placeholder="Password" 
                                    value={userData.confirmPassword}  
                                    onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}/>
                            </FloatingLabel>
                        }

                        {/* Form Buttons */}
                        <div className="d-grid mt-4 mb-2">
                            <Button variant="primary" type="submit" size="lg">
                                {isSignUp ? "Create Account" : "Log In"}</Button>
      
                            <Button variant="secondary" className="mt-2 mb-2" 
                                onClick={switchMode}>
                                    { isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign Up" }
                            </Button>

                            <GoogleLogin
                                onSuccess={ async (res) => { 
                                    const decoded = jwt_decode(res?.credential)
                                    const result = res?.clientId;
                                    const token = decoded;
                                
                                    try {
                                      formClose();
                                      dispatch({ type: AUTH, data: { result, token } });
                                      refreshPage();
                                    } catch (error) {
                                      console.log(error);
                                    }
                                }}
                                
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>

                        <p className="mt-5 text-muted">&copy; 2022-2023</p>
                        </div>
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
