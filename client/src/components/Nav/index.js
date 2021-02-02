import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return(
                <ul>
                    <li>
                        {/* <Link to=''>User Page</Link> */}
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li><Link to='/create'>Create a Palette</Link></li>
                    <li>
                        <Link to='/' onClick={() => Auth.logout()}>Logout</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                </ul>
            )
        }
    }

    return (
        <header>
            <h1>
                <Link to='/'>Color Theory</Link>
            </h1>

            <nav>
                {showNavigation()}
            </nav>
        </header>
    )
}

export default Nav;