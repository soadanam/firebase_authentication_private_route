import React from 'react';
import { useAuth } from './../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const {googleSignInAuth} = useAuth();

    const location = useLocation();
    const Navigate = useNavigate();
    const redirect_uri = location?.state?.from?.pathname || '/home';
    // console.log('LOCATION:', redirect_uri);

    const handleGoogleSignIn = () => {
        googleSignInAuth()
        .then((result) => {
            const myUser = result.user;
            console.log('MyUser:', myUser)
            // Redirect
            Navigate(redirect_uri)
        })
        
    }

    return (
        <div>
            <h3>Please Login:</h3>
            {/* <button onClick={googleSignInAuth}>Google Login</button> */}
            <button onClick={handleGoogleSignIn}>Google Login</button>

        </div>
    );
};


export default Login;