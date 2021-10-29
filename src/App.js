import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import Details from './pages/Details/Details';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
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

         <PrivateRoute exact path="/services">
           <Services></Services>
         </PrivateRoute>
          <Route path="/details/:id">
          <Details></Details>
         </Route>
         <Route exact path="/contact">
         <Contact></Contact>
         </Route>
         <Route exact path="/about">
           <About></About>
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
}

export default App;
