import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={Logo} alt="" />
            <div>
                <a href="/shop">Shop</a><a href="/orders">Orders</a><a href="/inventory">Inventory</a><a href="/about">About Us</a>
            </div>
        </nav>
    );
};

export default Header;