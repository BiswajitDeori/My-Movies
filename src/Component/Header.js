import React from 'react'
import './Header.css'
import icon from './main.png'
export default function Header() {
    return (
       
        //    
        <span  className="header" onClick={()=> window.scroll(0,0)}> <img src={icon} width="120px" height="70px" alt="images"/> Movies Hub</span>
       
    )
}
