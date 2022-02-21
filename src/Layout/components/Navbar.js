import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

// style
import './styles/Navbar.scss';

// firebase
import {auth, provider} from '../firebase/Config';

// features
import {selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/UserSlice';

export default function Navbar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const setUser = user => dispatch(setUserLoginDetails({
        user: user.displayName,
        email: user.email,
        photo: user.photoURL
    }));

    useEffect(_ => auth.onAuthStateChanged(user => {
        if (user) {
            setUser(user);
            history.push('/home');
        }
    }), [userName]);

    const handleAuth = _ => {
        if (!userName) {
            auth.signInWithPopup(provider).then(response => setUser(response.user)).catch(err => alert(err.message));
        } else if (userName) {
            auth.signOut().then(_ => {
                dispatch(setSignOutState());
                history.push('/');
            }).catch(err => alert(err.message));
        }
    }

    return <div id='navbar'>
        <a className='navbar-logo' href='/'>
            <img className='logo-img' src='./images/logo.svg' alt='Navbar Logo'/>
        </a>
        {userName ? <a className='login-btn' onClick={handleAuth}>Login</a>
            : <>
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
                <div className='sign-out'>
                    <img className='user-img' src={userPhoto} alt={userName}/>
                    <div className='dropdown'>
                        <a className='logout-btn' onClick={handleAuth}>Logout</a>
                    </div>
                </div>
            </>
        }
    </div>
}
