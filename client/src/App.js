import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Navbar } from "./components/Navbar"
import { getPosts } from './actions/posts'
// import logo from './images/logo.jpg';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"


function App() {
  // set id where we can pass to posts and form 
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home currentId={currentId} setCurrentId={setCurrentId}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default App;
