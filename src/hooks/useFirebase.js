import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');

    const auth = getAuth();

    // User registration with email and password
    const userRegistration = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            ;
            console.log(error);
        })
        .finally(()=>{  setIsLoading(false); });
    }

    // User login with email and password
    const userLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setErrorMassage('');
            })
            .catch((error) => {
                setErrorMassage(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {
    
        })
            .finally(() => setIsLoading(false));
    }

    return{
        userRegistration,
        userLogin,
        logout,
        user,
        isLoading,
        errorMassage

    }
}
export default useFirebase;