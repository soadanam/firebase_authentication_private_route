import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useFirebase from './../Hooks/useFirebase';
import { useAuth } from './../Hooks/useAuth';

const Header = () => {
    // const { user, googleSignOutAuth } = useFirebase();
    const {user, googleSignOutAuth } = useAuth();

    return (
        <nav className='nav-list'>
            <NavLink className='nav-item' to='/home'> Home</NavLink>
            <NavLink className='nav-item' to='/shipping'> Shipping </NavLink>
            <NavLink className='nav-item' to='/cart'> Cart </NavLink>
            <NavLink className='nav-item' to='/creditCard'> CreditCard </NavLink>
            <NavLink className='nav-item' to='/form'> Form </NavLink>
            <NavLink className='nav-item' to='/login'> Login </NavLink>
            <NavLink className='nav-item' to='/registration'> Registration </NavLink>

            <span> {user.displayName} </span>
            {user.email && <button onClick={googleSignOutAuth} className='logout-button'>Logout</button>}
        </nav>
    );
};

export default Header;