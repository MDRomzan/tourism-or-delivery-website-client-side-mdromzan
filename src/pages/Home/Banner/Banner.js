
import React from 'react';
import banner1 from "../../../images/banner3.jpg"
import banner2 from "../../../images/banner2.jpg"
import banner3 from "../../../images/banner1.jpg"
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
import { Link } from 'react-router-dom';
const Banner = () => {
    return(
    <>
    <Carousel className="mb-5">
        <Carousel.Item interval={1000}>
        <img
        className=" size-cut d-block w-100"
        src={banner1}
        alt="First slide"
        />
    <Carousel.Caption>
        <Link to="/details/:id">
             <button className="btn-button">Booking Now</button>
        </Link>

        
        <button className="btn-contact">Contact us</button>
       <br />
        <h1 className="text">RD Best Travel Agency in The World</h1>
        <p className="text-warning">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className = "size-cut d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
       <Link to="/details/:id">
             <button className="btn-button">Booking Now</button>
        </Link>
        
        <button className="btn-contact">Contact us</button>
        <br />
        < h1 className = "text" > RD Best Travel Agency in The World </h1>
        <p className="text-warning">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className = "size-cut d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Link to="/details/:id">
             <button className="btn-button">Booking Now</button>
        </Link>
        
        <button className="btn-contact">Contact us</button>
             <h1 className="text">RD Best Travel Agency in The World</h1>
        <p className="text-warning">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       
        </Carousel.Caption>
     </Carousel.Item>
    </Carousel>
</>
);
};
export default Banner;