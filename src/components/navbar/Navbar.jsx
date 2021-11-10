import React from 'react'
const PF = process.env.REACT_APP_PUBLIC_FOLDER

const Navbar = () => {
    return (
        <div>
            <div class="flex-container ">
                <div><img src={PF + 'logo.png'} alt="Shapify logo"/></div>
                <div>
                    <div><img src={PF + 'home.svg'} alt="Home" /></div>
                    <div><img src={PF + 'openfile.svg'} alt="File Upload" /></div>
                    <div><img src={PF + 'cart.svg'} alt="Repo" /></div >
                    <div><img src={PF + 'save.svg'} alt="Favourites" /></div>
                </div>
            </div>
        </div>
)}

export default Navbar;