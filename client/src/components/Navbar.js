import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Navbar as NavbarBoot } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom"
import logo from "../assests/logo.jpg";
import Auth from '../components/Auth'

export function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const token = user?.token
    //     console.log(token)

    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, []);

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
                        <div className="p-3 d-flex flex-column align-items-center">
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
                        <div className="user">{user?.name ? (
                                user?.name ) : (
                                    user.result.name
                                )
                            }</div>
                        {/* <div className="user">{user.name}</div> */}
                        </div>
                        <Button onClick={logout} variant="outline-primary">Logout</Button>
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
