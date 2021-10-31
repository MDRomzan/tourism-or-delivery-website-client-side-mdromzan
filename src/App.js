
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from "./context/AuthProvider"
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Booking from './pages/Booking/Booking';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageServices from './pages/ManageServices/ManageServices';
import AddServices from './pages/AddServices/AddServices';
import UpdateUser from './pages/UpdateUser/UpdateUser';
import PrivateRoute from './PrivateRoute/PrivateRoute';
const App = () => {
    return (
        <div>
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                 <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/home">
                    <Home></Home>
                </Route>
                <Route exact path="/services">
                    <Services></Services>
                </Route>
                <Route exact path="/my-orders">
                   <MyOrders></MyOrders>
                </Route>
              <PrivateRoute exact path="/manage-services">
                   <ManageServices></ManageServices>
                </PrivateRoute>
                <Route exact path="/add-services">
                    <AddServices></AddServices>
                </Route>
               
                <PrivateRoute exact path="/booking/:id">
                    <Booking></Booking>
                </PrivateRoute>
                 <PrivateRoute exact path="/update-user/:id">
                    <UpdateUser></UpdateUser>
                </PrivateRoute> 

                <Route exact path="/about">
                    <About></About>
                </Route>
                <Route exact path="/contact">
                   <Contact></Contact>
                </Route>
                <Route exact path="/login">
                 <Login></Login>
                </Route>
                <Route exact path="/register">
                 <Register></Register>
                </Route>
                <Route path="*">
                 <NotFound></NotFound>
                </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </AuthProvider>
        </div>
    );
};

export default App;