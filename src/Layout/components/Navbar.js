import React from 'react';

// style
import './styles/Navbar.scss';

// firebase
import {auth, provider} from '../firebase/Config';

export default function Navbar() {
    const handleAuth = e => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message));
    }

    return <div id='navbar'>
        <a className='navbar-logo' href='/'>
            <img className='logo-img' src='./images/logo.svg' alt='Navbar Logo'/>
        </a>
        <div className="nav-menu">
            <a href="/home">
                <img src='./images/home-icon.svg' alt='Home Icon'/>
                <span>Home</span>
            </a>
            <a href="/search">
                <img src='./images/search-icon.svg' alt='Search Icon'/>
                <span>Search</span>
            </a>
            <a href="/watchlist">
                <img src='./images/watchlist-icon.svg' alt='Watchlist Icon'/>
                <span>Watchlist</span>
            </a>
            <a href="/originals">
                <img src='./images/original-icon.svg' alt='Originals Icon'/>
                <span>Originals</span>
            </a>
            <a href="/movies">
                <img src='./images/movie-icon.svg' alt='Movies Icon'/>
                <span>Movies</span>
            </a>
            <a href="/series">
                <img src='./images/series-icon.svg' alt='Series Icon'/>
                <span>Series</span>
            </a>
        </div>
        <a className='login-btn' href="/" onClick={handleAuth}>Login</a>
    </div>
}
