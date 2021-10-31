import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import"./UpdateUser.css"

const UpdateUser = () => {
    const {id}=useParams()
    const [service,setService]=useState({});
    console.log(service)
    useEffect(()=>{
        const url=`https://mysterious-cliffs-16987.herokuapp.com/services//${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>console.log(data))
    },[])
    const handleNameChange=(e)=>{
        const updateName=e.target.value;
        const updateService={name:updateName,price:service.price,img:service.img,Description:service.Description}
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
        const url=`https://mysterious-cliffs-16987.herokuapp.com/services/${id}`
        fetch(url,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(service)
        })
        .then(res =>res.json())
        .then(data =>{
            if (data.modifiedCount > 0){
                alert("Updated Successfully");
                setService({});
            }
        })
        e.preventDefault();
    }
    return (
        <div className="update">
            <h3>This is update user:{id}</h3>
             <form onSubmit={handleServiceUpdate}>
            <input type="text"placeholder="name" onChange={handleNameChange} value={service.name ||""} />
            <input type="img"placeholder="image url"  onChange={handleImgChange} value={service.img || ""}  />
            <input type="price" placeholder="price"  onChange={handlePriceChange} value={service.price || ""}  />
            <input type="Description" placeholder="Description"  onChange={handleDescriptionChange} value={service.Description|| ""}  />
            <input type="submit" value="Update" />
          </form>
        </div>
    );
};

export default UpdateUser;