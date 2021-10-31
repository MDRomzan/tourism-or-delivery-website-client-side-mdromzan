import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);


    useEffect(()=>{
       fetch("https://mysterious-cliffs-16987.herokuapp.com/services")
       .then(res =>res.json())
       .then(data=>setServices(data))

    },[])
    return (
        <div className="container">
            <div className="row ">
                <h1 className="text-warning text-center">Popular Travels & Tours</h1>
                <p className="text-center">Popular Travels & Tours, in the heart of Rome center since 2002, provides first rate personalized services </p>
                {
                    services.map(service =><Service
                    key={service._id}
                    service={service}
                    >

                    </Service>)
                } 
            </div>
        </div>
    );
};

export default Services;