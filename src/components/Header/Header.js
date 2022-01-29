import React from 'react';

import slimetooth_logo from '../../images/slimetooth_logo'
import '../Header/styles.css'

const Header = () => {
    return (
        <div id='header-container'>
            <img className='img-fluid' height='200' width='200' src={slimetooth_logo} alt='Slimetooth_Logo'/>
        </div>
    );
}

export default Header;
