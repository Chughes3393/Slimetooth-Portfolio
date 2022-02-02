import { useContext } from 'react'

// contexts
import UserContext from '../../Contexts/UserContext';

import { Link } from 'react-router-dom'

import React from 'react';

import '../Nav/styles.css'

const Nav = () => {
    const user = useContext(UserContext)
    return (
        <div id='nav-div'>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="portfolio"><strong>Portfolio</strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about"><strong>About</strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact"><strong>Contact</strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="shop"><strong>Shop</strong></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Nav;
