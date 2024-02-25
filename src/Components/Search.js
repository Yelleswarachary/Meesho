import React, { useState } from 'react'
import './Search.css'

export default function Search() {
  return (
    <>
      <div className='search-page'>
        <div className='search'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search Your Song' />
        </div>
        <div className='search-songs'>
          <div className='telugu'>
            <h1></h1>
          </div>
          <div className='hindi'>
            <h1></h1>
          </div>
          <div className='english'>
            <h1></h1>
          </div>
          <div className='tamil'>
            <h1></h1>
          </div>
        </div>
        <div className='album'>
          
        </div>
        <hr />
        <div className='futter'>
          <div className='company'>
            <p>Company</p>
            <hr/>
            <h6>About</h6>
            <h6>Jobs</h6>
            <h6>For the Records</h6>
          </div>
          <div className='communities'>
            <p>Communities</p>
            <hr />
            <h6>For Artists</h6>
            <h6>Developers</h6>
            <h6>Advertising</h6>
            <h6>Investors</h6>
            <h6>Vendors</h6>
          </div>
          <div className='useful'>
            <p>Useful Links</p>
            <hr />
            <h6>Support</h6>
            <h6>Free Mobile App</h6>
          </div>
          <div className="social">
            <i class="fa-brands fa-instagram"></i> <hr />
            <i class="fa-brands fa-facebook"></i> <hr />
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </>
  )
}