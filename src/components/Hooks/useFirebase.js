import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

initializeFirebase();
const provider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

   /*  const Redirect = () => {
        let navigate = useNavigate();
        navigate(-1)
        console.log('I am from redirect!')
    }
 */

    // google signin auth
    const googleSignInAuth = () => {
        const auth = getAuth();
        return signInWithPopup(auth, provider)
            /* .then((result) => {
                const myUser = result.user;
                console.log('MyUser:', myUser)
                setUser(myUser)
                // Redirect()
            }) */
            .catch((error) => {
                const errorMessage = error.message;
                console.log('ERROR:', errorMessage)
                setError(errorMessage)
            })
    };


    // google sigb out auth
    const googleSignOutAuth = () => {
        const auth = getAuth();
        signOut(auth)
            .then((result) => {
                // console.log('Sign out Successful')
                setUser({})
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    };



    //useEffect to update the user state / currently signedIn-user more efficiently 
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });

    }, [])




    return {
        user,
        error,
        googleSignInAuth,
        googleSignOutAuth
    }

};

export default useFirebase;