import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import "./Header.css";
import logo from "../../../images/RD (2).png"
import { Button } from 'bootstrap';
const Header = () => {
    const{user,logOut}=useAuth();
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home/home">
        <img className="img-size" src={logo} alt="Health care" />

       RD Travel Agency
    </Navbar.Brand>
     <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
      
        <Nav.Link as={HashLink} to="/home#home" className="nav-btn">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/services"className="nav-btn">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/about"className="nav-btn">About us</Nav.Link>

     <Nav.Link as={HashLink} to="/contact"className="nav-btn">Contact us</Nav.Link>
        
        {user?.email? <Nav.Link as={HashLink} to="/my-orders"className="nav-btn">MyOrders</Nav.Link>:<Nav.Link className="n-link" as={Link} to="/login">Register</Nav.Link>} 
         {user?.email? <Nav.Link as={HashLink} to="/manage-services"className="nav-btn">ManageService</Nav.Link>:<Nav.Link className="n-link" as={Link} to="/login">Register</Nav.Link>} 
         {user?.email? <Nav.Link as={HashLink} to="/add-services"className="nav-btn">AddService</Nav.Link>:<Nav.Link className="n-link" as={Link} to="/login">Register</Nav.Link>} 
        {user?.email? <button onClick={logOut} className="btn-button">logout</button>:<Nav.Link as={Link} to="/login">Register</Nav.Link>} 

         <Navbar.Text>
        Signed in as: <a href="/login">{user?.displayName}</a>
         </Navbar.Text> 
    </Navbar.Collapse>

    </Container>
  </Navbar>
  
  
</> 
    );
};

export default Header;