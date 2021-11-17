import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile , signOut } from "firebase/auth";



initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');
    const [admin,setAdmin] = useState(false);
    const [userAgain,setUserAgain] = useState({});
    const auth = getAuth();

    // User registration with email and password
    const userRegistration = (email, password,name,history,location) => {
       
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            console.log(userCredential)
            updateProfileName(name);
            saveUser(email,name);
            
        })
        .catch((error) => {
            
            
        })
        .finally(()=>{ 
            
            
            setIsLoading(false); 
            window.location.assign('/');
        });
            
    }


    const  updateProfileName=(name)=>{
        updateProfile( auth.currentUser,{displayName:name})
        .then(()=>{
            console.log("Profile Updated");
        })
        .catch((error)=>{
            console.log(error)
        })
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

    //save user information in db

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        user.role = 'user';
        fetch('https://pure-anchorage-09038.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    //cheching if user is admin or not and geting user information

    useEffect(() => {
        fetch(`https://pure-anchorage-09038.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserAgain(data.user);
                setAdmin(data.admin)
            })
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
        admin,
        userAgain

    }
}

export default useFirebase;