import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.png';

import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <img src={homeIcon} />
            </Link>
        </nav>
    )
}

export default NavBar;