import React from 'react';
import "./Discount.css";
import discount from "../../../images/discount.jpeg"
const Discount = () => {
    return (
        <div className="container my-5 mx-5 px-4">
            <img className="discount" src={discount} alt="" />
        </div>
    );
};

export default Discount;