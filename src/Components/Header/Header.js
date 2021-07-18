import React from 'react'
import "./Header.css";
import logo from '../images/icons/logo.png';
import search from '../images/icons/search-icon-sm.png';
import cart from '../images/icons/cart-sm.png'
function Header() {
    return (
       	<header className="header-wrapper">
            <div className="internal-wrapper">
                <ul>
                    <li><a href="index.html"> <img src={logo} alt="" width="0" height="8"/></a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPaad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">support</a></li>
                    <li><a href="#"> <img src={search} alt="" width="18" height="10"/></a></li>
                    <li><a href="#"> <img src={cart} alt="" width="18" height="18"/></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
