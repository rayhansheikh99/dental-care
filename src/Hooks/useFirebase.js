import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initializeAuthentication from "../Pages/Header/Firebase/firebase.init";

initializeAuthentication();
// hooks here all 
const useFirebase = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [user,setUser]=useState({});
    const [isLoading, setIsLoading] = useState(true);


    // google sign in 
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
    const history = useHistory();

    const loginWithGoogle = () => {
        setIsLoading(true);
        history.push("/home")
        signInWithPopup(auth, provider)
              
            .then((result) => setUser(result.user))
            .finally(() => setIsLoading(false))
            .catch((error) => alert(error.message))
           

    }

    // email password sign in 
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
  
    const handleRegistration = e => {
        e.preventDefault();
        history.push("/home")
        if(password.length<6){
            setError('must be 6 character')
            return;
        }
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setError('')
        })
        .catch((error) => setError(error.message));
    }

    const handleSignIn = (e) =>{
        e.preventDefault();
        history.push("/home")
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
          })
          .catch((error) => {
            setError(error.code);
            setError(error.message);
          });

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

    // log out 

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { });
    }

    return{
        user,
        loginWithGoogle,
        isLoading,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        error,
        handleSignIn


        
    }
} 

export default useFirebase;