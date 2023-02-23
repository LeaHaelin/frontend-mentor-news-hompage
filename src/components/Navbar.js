import React, { useState } from 'react'
import logo from '../assets/images/logo.svg';
import iconMenuOpen from '../assets/images/icon-menu.svg';
import iconMenuClose from '../assets/images/icon-menu-close.svg';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menuToggleHandler = () => {
        setToggle(!toggle);
    }


    return (
        <div className='navbar'>
            <a href="#"><img className='navbar__logo' src={logo} alt="logo" /></a>
            <img className='navbar__menu--open' src={iconMenuOpen} alt="" onClick={menuToggleHandler} />
            <div className={toggle ? 'navbar__menu active-true' : 'navbar__menu'} >
                <img className='navbar__menu--close' src={iconMenuClose} alt="close menu" onClick={menuToggleHandler} />
                <ul className='navbar__items'>
                    <li className='navbar__item'><a className='navbar__item--a' href="#">home</a></li>
                    <li className='navbar__item'><a className='navbar__item--a' href="#">new</a></li>
                    <li className='navbar__item'><a className='navbar__item--a' href="#">popular</a></li>
                    <li className='navbar__item'><a className='navbar__item--a' href="#">trending</a></li>
                    <li className='navbar__item'><a className='navbar__item--a' href="#">categories</a></li>
                </ul>
            </div>
        </div>
    )
}
