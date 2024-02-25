import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';



import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Search from './Components/Search';
import About from './Components/About';
import Error from './Components/Error';
import Men_pants from './Components/Men_pants';

function App() {

  return (


    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Search' element={<Search />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='*' element={<Error />}></Route>
        <Route path='/men_pants' element={<Men_pants/>}></Route>
      </Routes>
    </BrowserRouter>
    
   





  )

}
export default App;

