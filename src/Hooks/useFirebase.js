import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import initializeAuthenticaion from "../Firebase/firebase.init";



initializeAuthenticaion();
const useFirebase=()=>{
    // all useStae use
    const [user,setUser]=useState([]);
    const [error,setError]=useState("");
    const [isLoading,setIsLoading]=useState(true);
    // ggogle provider
    const googleProvider=new GoogleAuthProvider();
    // get auth use
    const auth =getAuth();
    // googlesign in use
    const googleSignIn=()=>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    // logOut use
    const logOut =()=>{
        setIsLoading(true)
        signOut(auth).then(() => { 
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
                setError(error.message);
            });
    }
    // onAuth use
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
            
            setUser(user)

        } else {
            setUser({})
        }
        setIsLoading(false)
    });
    return ()=>unSubscribe;

},[])

    return{
        user,
        setUser,
        logOut,
        googleSignIn,
        setError,
    }
}
export default useFirebase;