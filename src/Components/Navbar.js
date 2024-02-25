import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'




export default function Navbar() {
    return (
        <>
            <div className='ani'>
                <div className="logo">
                    <img src='https://www.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png' alt='' width="80px"></img>
                </div>
                <div className="display-menu">
                    <Link className='menu' to="/">Home</Link>
                    <Link className='menu' to="/About">About</Link>
                    <Link className='menu' to="/Contact">Contact</Link>
                    <Link className='menu' to="/Login">Login</Link>
                </div>
                <div className='nani'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" Placeholder='searching for items'/>
                </div>
            </div>
        </>

    )
}


