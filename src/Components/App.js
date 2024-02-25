import React from 'react';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';



import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Product from './Components/Product';
import About from './Components/About';
import Error from './Components/Error';

function App() {
  function Navbar() {
    return (
      <ul>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/About">About</Link>
        <Link className='link' to="/Contact">Contact</Link>
        <Link className='link' to="/Product">Product</Link>
        <Link className='link' to="/Login">Login</Link>
      </ul>
    )
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='*' element={<Error />}></Route>

      </Routes>
    </BrowserRouter>



  )
}

export default App;