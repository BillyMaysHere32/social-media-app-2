import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Container>
      <GoogleOAuthProvider clientId="652750791547-b9ina7g63u1of71odmvjv17s5th03ktl.apps.googleusercontent.com">
      {/* <GoogleOAuthProvider clientId={`${process.env.PUBLIC_GOOGLE_API_TOKEN}`}> */}
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Container>
      </GoogleOAuthProvider>
    </Container>
  );
};

export default App;