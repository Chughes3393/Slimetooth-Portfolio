import { useContext } from 'react'

// contexts
import UserContext from '../../Contexts/UserContext';

import { Link } from 'react-router-dom'

import React from 'react';

const Nav = () => {
    const user =useContext(UserContext)
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to ='login'>Login</Link>
            <Link to='portfolio'>Portfolio</Link>
            
        </div>
    );
}

export default Nav;
