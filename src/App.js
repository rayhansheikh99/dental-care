import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Menu from './Pages/Header/Menu/Menu';
import About from './Pages/About/About';
import AllService from './Pages/AllService/AllService';
import Error from './Pages/Error/Error';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Header/Login/Login';
import SignUp from './Pages/Header/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Header/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Menu/>
       <Switch>
         <Route exact path='/'>
            <Home/>
         </Route>
         <Route path='/home'>
            <Home/>
         </Route>
         <Route path='/services'>
            <AllService/>
         </Route>
         <Route path='/about'>
            <About/>
         </Route>
         <Route path='/contact'>
            <Contact/>
         </Route>
         <Route path='/login'>
            <Login/>
         </Route>
         <Route path='/signup'>
            <SignUp/>
         </Route>

         <PrivateRoute exact path='/servicedetails/:serviceId'>
            <ServiceDetails/>
         </PrivateRoute>
         <Route path='*'>
            <Error/>
         </Route>
       </Switch>
       <Footer/>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
