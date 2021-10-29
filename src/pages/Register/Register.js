import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
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
             <p>Already Register?<Link to="/login">Please login</Link></p>
            </div>
             
        </div>
    );
};

export default Register;