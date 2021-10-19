import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
// import { useEffect} from "react";
import initializeAuthentication from "../Pages/Header/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = ()=>{
    const [user,setUser]=useState({});
    const [isLoading, setIsLoading] = useState(true);

    const provider = new GoogleAuthProvider()
    const auth = getAuth();

    const loginWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => setUser(result.user))
            // .catch((error) => setUser(error.message));
            .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=> unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { });
    }

    return{
        user,
        loginWithGoogle,
        isLoading,
        logOut
        
    }
} 

export default useFirebase;