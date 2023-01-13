import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Navbar } from "./components/Navbar"
import { getPosts } from './actions/posts'
// import logo from './images/logo.jpg';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default App;
