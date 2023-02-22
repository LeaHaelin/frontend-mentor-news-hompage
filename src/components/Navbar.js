import React from 'react'
import logo from '../assets/images/logo.svg';
import iconMenu from '../assets/images/icon-menu.svg';
import iconMenuClose from '../assets/images/icon-menu-close.svg';

export const Navbar = () => {

    return (
        <div className='navbar'>
            <img className='navbar__logo' src={logo} alt="" />
            <img className='navbar__menu--open' src={iconMenu} alt="" />
            <div className='navbar__menu'>
                <img className='navbar__menu--close' src={iconMenuClose} alt="" />
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
