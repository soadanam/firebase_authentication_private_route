import React from 'react';
import Login from '../Login/Login';
import useFirebase from './../Hooks/useFirebase';

const Shipping = () => {
    const { user } = useFirebase();

    if (user?.email) {
        return (
            <div>
                <h2>This is Conditional-Route Component!</h2>
                <h1>(Working as a Protected Component!)</h1>
                <p>
                    This component renders between two components (itself 'shipping', and other one is 'login') that depends upon the USER state meaning that the "user" is found or not found (as login or not).
                    <br />
                    N.B: An user is found while anybody Loged-in.
                </p>
                <h5>So, this is an if-else conditional rendering! Using 2 "return"</h5>
            </div>
        )
    }

    else {
        return <Login />
    }
};

export default Shipping;