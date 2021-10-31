import React from 'react';
import "./NotFound.css"
import notFound from "../../images/notfound.png"
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="text-center d-flex justify-content-center mx-auto">
            <div>
            <img className="im-size" src={notFound} alt="" />
            <h1>404</h1>
            <h2>This is NOT FOUND</h2>
            <Link to="/home">
                <button className="btn-button">Go tO Home</button>
            </Link>
            
            </div>

        </div>
    );
};

export default NotFound;