import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';

// import { clearTheCart, getStoredCart } from '../../Uitilities/fakedb';

import "./Booking.css"
const Booking = () => {
    // const {user}=useAuth();
    // // use form use
    // const {handleSubmit,register,reset,formState: { errors }}=useForm();
   
    // Use card matched
    const [service,setService]=useState({})
    const {id}=useParams();
    console.log(id)
    useEffect(()=>{
        fetch(`https://mysterious-cliffs-16987.herokuapp.com/services/${id}`)
        .then(res =>res.json())
        .then(data =>setService(data))
    },[])
    
    // console.log(services);
    
    // use form handle use part
    /*const onSubmit=(data)=>{
        const savedCart=getStoredCart();
        data.order=savedCart;
        fetch("http://localhost:8080/orders",{
          method="POST",
          headers:{
              "content-type":"application/json"
          },
           body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result=>{
            if(result.insertedId){
                 alert("Order processed Successfully");
                 clearTheCart();
                 reset();
            }
        })
    };
    */
    return (
        // useauth use
        
        // this is card 
        <div className="row m-4 p-4 container">
            <div className=" shadow-lg col-md-8 my-5 py-3 card">
                 <h2>{service?.name}</h2>
                <img className="cut-size" src={service?.img} alt="" />
            <p>{service?.Description}</p> 
            </div>
            {/* This is form submit */}
            <div className="col-md-4 card my-5">
                 {/* <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <br />
            <select {...register("gender")}>
                    Gender
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>


                <input type="submit" />
            </form> */}
            </div>

        </div>
    );
};

export default Booking;