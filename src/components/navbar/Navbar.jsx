import React from 'react'
import './navbar.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <div className="logoWrapper">
                <div>
                    <img src={PF + 'logo.png'} alt='logo' />
                </div>
            </div>
            <div className="navabar">
                <ul className='navbarElements'>
                    <li><img src={PF + 'home.svg'} alt='Home' /></li>
                    <li><img src={PF + 'openFile.svg'} alt='OpenFiles' /></li>
                    <li><img src={PF + 'cart.svg'} alt='Bookmarks' /></li>
                    <li><img src={PF + 'save.svg'} alt='Collections' /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;