import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
import "./HomeService.css";
const HomeService = () => {
     const {services}=useServices()
    return (
        <div className="container m-5 row">
          <h1 className="text-center">Popular Travels & Tours</h1>
          <hr />
            {
              services.slice(0,6)?.map(service=><div className="col-md-6   text-center col-lg-4 my-3 p-4 size-card" key={service._id}>
                <img className="ima-size" src={service?.img} alt="" />
                <h3>{service?.name}</h3>
                <h4>{service?.price}</h4>
                <p>{service?.Description}</p>
                <Link to={`/booking/${service._id}`}>
                <button className="btn-button">Booking</button>
                </Link>
              </div>)  
            }
        </div>
    );
};

export default HomeService;