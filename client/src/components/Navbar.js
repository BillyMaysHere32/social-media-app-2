import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import { Button, Navbar as NavbarBoot } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom"
import logo from "../assests/logo.jpg";
import Auth from '../components/Auth'

export function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    
    useEffect(() => {
        const token = user?.token
        
        if (token) {
            const decodedToken = decode(token);
      
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          }
        
    }, []);

    function refreshPage() {
        window.location.reload(false);
      }

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        refreshPage();
        setUser(null);
    }

  return (
    <NavbarBoot sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <div className="d-flex flex-row align-items-center me-5">
                <div className="d-flex flex-column align-items-center">
                    {/* <img 
                        className=''
                        style={{ width: "150px", height: "50px", objectFit: "cover" }}
                        alt='...'
                        src= {logo}>
                    </img> */}
                    <div className="app-pic">Social Media App</div>
                </div>
            </div>

            <Nav className="me-auto fs-4">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/About" as={NavLink}>
                    About
                </Nav.Link>
                <Nav.Link to="/Contact" as={NavLink}>
                    Contact
                </Nav.Link>
            </Nav>
            <div>
                {user?.token ? (
                    <div className="d-flex flex-row align-items-center">
                        {/* <div className="p-3 d-flex flex-column align-items-center"> */}
                        <img 
                            className='img-fluid hover-shadow rounded-circle'
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                            alt='...'
                            src={user?.picture ? (
                                user?.picture ) : (
                                    logo
                                )
                            }>
                        </img>
                        <div className="ms-1 user">{user?.name ? (
                                user?.name ) : (
                                    user.result.name
                                )
                            }</div>
                        {/* </div> */}
                        <Button 
                        className="ms-5" onClick={logout} variant="outline-primary">Logout</Button>
                    </div>
                ) : ( 
                    <div className="d-flex flex-row align-items-center">
                        <Auth />
                        <img
                        src={ logo }
                        className='ms-3 img-fluid hover-shadow rounded-circle'
                        style={{ width: "75px", height: "75px", objectFit: "cover" }}
                        alt='...'
                        />
                    </div>
                )}
            </div>

        </Container>
    </NavbarBoot>
  )
}
