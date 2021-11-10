import React from 'react'
import './footer.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER

const Footer = () => {
    return (
        <div className = "footer" >
        <img src = {PF + 'comment.svg'} alt = 'comments' />
        <img src = {PF + 'settings.svg'} alt = 'settings' />
        </div>
    )
}

export default Footer
