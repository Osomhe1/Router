import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {

    const newStyle = {
        color : 'white'
    };
  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-link'>
            <Link style={newStyle} to='/about'><li>About</li></Link>
            <Link style={newStyle} to='/shop'> <li>Shop</li></Link>
            <Link style={newStyle} to='/cart'> <li> Cart</li></Link>
            <Link style={newStyle} to='/menu'> <li> Menu</li></Link>
            <Link style={newStyle} to='/info'> <li> Info</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;