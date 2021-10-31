import React from 'react';
import "./Latest.css"
import admin1 from "../../../images/admin1.jpeg"
import admin2 from "../../../images/admin2.jpeg"
const Latest = () => {
    return (
        <div className="row container mx-5"> 
           <div className="col-md-6 text-center">

                <img src={admin1} alt="" />
                <h3>Maldive Your Travel
                </h3>
                <small>By Admin</small>
                <button className="btn-button">20 FRD 2022</button>
                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration...</p>
           </div>
           <div className="col-md-6 text-center">
                <img src={admin2} alt="" />
                <h3>PhotoGraper </h3>
                <small>By Admin</small>
                 <button className="btn-button">23 March 2025</button>
                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration...</p>
           </div>
        </div>
    );
};

export default Latest;