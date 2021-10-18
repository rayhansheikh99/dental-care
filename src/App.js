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

function App() {
  return (
    <div className="App">
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
         <Route path='/servicedetails/:serviceId'>
            <ServiceDetails/>
         </Route>
         <Route path='*'>
            <Error/>
         </Route>
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
