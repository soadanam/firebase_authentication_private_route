import React from 'react';
import { useLocation } from 'react-router-dom';

const Registration = () => {
    // const location = useLocation();
    // console.log('Location:', location?.state?.from?.pathname)

    return (
        <div>
            <h3>Please register:</h3>
            <form action="">
                <input type="email" name="" placeholder='Your email' id="" />
                <br />
                <input type="password" name="" placeholder='Your password' id="" />
                <br />
                <input type="text" name="" placeholder='Name' id="" />
                <br /><br />
                
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Registration;