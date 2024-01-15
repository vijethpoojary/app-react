import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Sharing Files</span></h1>
            <p className='details'>I like to think that the Internet and file sharing,If utilized properly and embraced, and I emphasize properly, is a high-powered marketing design</p>
            <a href='#' className='cv-btn'>Read More</a>
        </div>

    </div>
  )
}

export default Header;