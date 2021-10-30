
import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Service.css"
const Service = ({service}) => {
    const {_id,name,price,img,dec}=service;
    const history=useHistory()
    const handleDetails=(_id)=>{
        const uri =`/booking/${_id}`
        history.push(uri);
    }
    return (
        
           <div className="col-lg-4">
            <img className="ima-size" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{dec}</p>
            <button onClick={()=>handleDetails(_id)} className=" btn-button">Booking</button>
    </div>
    );
};
export default Service;
 