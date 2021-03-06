import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./login.css";
const Login = () => {
    const {googleSignIn,setUser,setError}=useAuth();
    const history=useHistory()
  const location=useLocation()
  const url = location.state?.from||"/home"
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(res=>{
            setUser(res.user)
            history.push(url)
        })
        .catch(err=>setError(err.message));
       
    }
    return (
        <div className="d-flex justify-content-center mx-auto my-5">
            <div className="card h-100 card-size">
            <button onClick={handleGoogleSignIn} className="btn-button">Google SignIn</button>
             <p>New user?<Link to="/register">Please Register</Link></p>
            </div>
             
        </div>

    );
};

export default Login;