import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { Navbar as NavbarBoot } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom"
import logo from "./images/logo.jpg";

export function Navbar() {
    const user = false;
    
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
                {user ? (
                    <div>
                        Logged In
                        {/* <img src={user.result.imgUrl}>{user.result.name.charAt(0)</img>
                        <div className="user">{user.result.name}</div>
                        <Button>Logout</Button> */}
                    </div>
                ) : (
                    <GoogleLogin
                        onSucess={(response) => console.log(response)}
                        onError={() => console.log('Error')}
                    />
                )}
            </div>
            <img
                src={ logo }
                // src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                className='img-fluid hover-shadow rounded-circle'
                style={{ width: "75px", height: "75px", objectFit: "cover" }}
                alt='...'
            />
        </Container>
    </NavbarBoot>
  )
}
