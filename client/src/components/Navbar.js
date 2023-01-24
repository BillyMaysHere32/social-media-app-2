import { Container, Nav, Navbar as NavbarBoot } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from "./images/logo.jpg";

export function Navbar() {
    
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
