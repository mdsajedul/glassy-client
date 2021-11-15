import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";



initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');
    const [admin,setAdmin] = useState(false);

    const auth = getAuth();

    // User registration with email and password
    const userRegistration = (email, password,name,history,location) => {
       
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            saveUser(email,name);
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            window.location.assign('/');
            
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
    }, [auth]);


    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {
    
        })
            .finally(() => setIsLoading(false));
    }

    return {
        userRegistration,
        userLogin,
        logout,
        user,
        isLoading,
        errorMassage,
        admin

    }
}

export default useFirebase;