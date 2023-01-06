import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
// import logo from './images/logo.jpg';
import Posts from "./components/Posts/Posts";
import FormComponent from "./components/Form/FormComponent";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"

function App() {

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
