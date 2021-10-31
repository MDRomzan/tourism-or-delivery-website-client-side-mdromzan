import React from 'react';
import pic1 from "../../../images/homepic/pic1.jpeg"
import pic2 from "../../../images/homepic/pic2.jpeg"
import pic3 from "../../../images/homepic/pic3.jpeg"
import pic4 from "../../../images/homepic/pic4.jpeg"
import pic5 from "../../../images/homepic/pic5.jpeg"
import pic6 from "../../../images/homepic/pic6.jpeg"
import "./HomeServices.css"
const HomeServices = () => {
    return (
        <div className="row d-flex justify-content-center mx-auto cut-img container">
            <h1 className="text-center text-danger">Features of Popular Beautiful Sports</h1>
            <hr />
            <div className="col-md-4 col-sm-12">
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
                      
            </div>
            <div className="col-md-4  col-sm-12">     
                <img src={pic3} alt="" />
                 <img className="size" src={pic4} alt="" />
            </div> 
             <div className="col-md-4  col-sm-12"> 
                <img src={pic5} alt=""/>     
                <img src={pic6} alt="" />
            </div>            
        </div>
    );
};

export default HomeServices;