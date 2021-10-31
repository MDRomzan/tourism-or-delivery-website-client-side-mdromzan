import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import"./UpdateUser.css"

const UpdateUser = () => {
    const {id}=useParams()
    const [service,setService]=useState({});
   
    useEffect(()=>{
        const url =`https://mysterious-cliffs-16987.herokuapp.com/services/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data=>setService(data))
    },[]);
    const handleNameChange=(e)=>{
        console.log(e.target.value);
         const updateName=e.target.value;
         const updateService={name:updateName,price:service.price,img:service.img,Description:service.Description}
        // const updatedService={...service};
        // updatedService.name=updateName;
        // setService(updatedService)
        setService(updateService)
    }
     const handleImgChange=(e)=>{
        const updateImg=e.target.value;
        const updateService={name:service.name,price:service.price,img:updateImg,Description:service.Description}
        setService(updateService)
    }
    const handlePriceChange=(e)=>{
        const updatePrice=e.target.value;
        const updateService={name:service.name,price:updatePrice,img:service.img,Description:service.Description}
        setService(updateService)
    }
    const handleDescriptionChange=(e)=>{
        const updateDescription=e.target.value;
        const updateService={name:service.name,price:service.price,img:service.img,Description:updateDescription}
        setService(updateService)
    }
     const handleServiceUpdate=(e)=>{
        const url = `http://localhost:8080/services/${id}`;
         fetch(url,{
            method:"PUT",
            headers:{
                 "content-type":"application/json"
                },
                 body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0){
                alert("Updated Successfully");
                setService({});
             }
        })
        e.preventDefault();
    }
    return (
        <div className="update">
            <h1> This is Name:{service.name}</h1>
            <h3>This is update user:{id}</h3>
              <form onSubmit={handleServiceUpdate}>
            <input type="text"placeholder="name"onChange={handleNameChange}  value={service.name ||""} />
            <input type="text" placeholder="price" onChange={handlePriceChange}  value={service.price || ""}  />
             <input type="Description" onChange={handleDescriptionChange}  placeholder="Description"  value={service.Description|| ""}  />
            <input type="text"placeholder="image url" onChange={handleImgChange}  value={service.img || ""}  />
            <input type="submit" value="Update" />
          </form> 
        </div>
    );
};

export default UpdateUser;

/*
 onChange={handleNameChange}
 onChange={handlePriceChange}
 onChange={handleImgChange} 
onChange={handleDescriptionChange} 
*/