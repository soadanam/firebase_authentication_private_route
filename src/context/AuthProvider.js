import React, { createContext } from 'react';
import useFirebase from '../components/Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const allContext = useFirebase();
    const {children} = props;
    // console.log('CH:', children)

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;