import React from 'react';
import { Link } from 'react-router-dom';
import "./Extra.css"
import maldive from "../../../images/Maldive.jpeg"
const Extra = () => {
    return (
        <div className="row my-5 banner container mx-5">
            <div className="col-lg-8 shadow-lg px-2">
                <img className="my-2 img-fluid" src={maldive} alt="" />
            </div>
            <div className=" col-lg-4 px-4 shadow-lg">
                <h1 className="">Make Awesome Tour
                </h1>
                <p className="">Discover Hidden Wonders On Trips With Peulis

                </p>
                <Link to="/about">
                    <button className="btn-button">Explore More</button>
                </Link>

            </div>
        </div>
    );
};

export default Extra;