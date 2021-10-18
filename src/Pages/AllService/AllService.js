import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Services from '../Services/Services';
import './allservices.css'

const AllService = () => {
    const [services, setServices]=useState([])

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))

    },[])
    return (
        <div className='service-page card-design1'>
        <div><h2>Our Services</h2></div>
        <div className=''>
        <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
            
            {
              services.map(service=> <Services key={service.id} service={service}/>)
            }
        </div>
        </div>
        </div>
    );
};

export default AllService;