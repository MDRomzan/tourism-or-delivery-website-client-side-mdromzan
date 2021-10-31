import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';

const ManageServices = () => {
    const [services,setServices]=useState([]);
    
    useEffect(()=>{
        fetch("https://mysterious-cliffs-16987.herokuapp.com/services")
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])

    const handleDelete =(id)=>{
        const url = `https://mysterious-cliffs-16987.herokuapp.com/services/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert("Delete Successfully")
                const remainig=services.filter(service =>service._id !==id);
                setServices(remainig);
            }
           
        })
    }
   
    return (
        <div className="row">
            <h3 className="text-warning text-center">This is Manage Services</h3>
            {
            services.map(service=> <div className="col-md-4  text-center col-lg-4 my-3 p-4" key={service._id}>
            <div className="">
                <img className="ima-size" src={service?.img}alt="" />
                <h3>{service?.name}</h3>
                <button onClick={()=>handleDelete(service._id)} className="btn-button">Delete</button>
               <Link to={`/update-user/${service._id}`}>
                    <button className="btn-button">Update</button>
               </Link>
                
               
            </div>
                

            </div> )
            }
        </div>
    );
};

export default ManageServices;