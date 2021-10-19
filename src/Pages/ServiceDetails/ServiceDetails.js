import React, { useEffect, useState } from 'react';
import { Card,Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './servicedetails.css'

const ServiceDetails = () => {
    let {serviceId} = useParams()
    const [service, setService]= useState([])
    const [singleService, setSingleService] = useState({});
    useEffect(()=>{
        fetch('/serviceDetails.json')
        .then(res => res.json())
        .then(data => setService(data.services))
    },[])

    useEffect(()=>{
        const foundService = service.find(
            (services)=>services.id===serviceId);
        setSingleService(foundService);
      
    },[service,serviceId]);
   
    return (
        <div>
            <Card className="card h-100 details-card details ">
                    <Card.Img className="img-service d-block w-50 mx-auto" variant="top" src={singleService?.image} />
                    <Card.Body>
                        <Card.Title>{singleService?.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Fee:</b> {singleService?.fee}</ListGroupItem>
                        <ListGroupItem>{singleService?.describe}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                  <Link to='/home'><Button className='px-5 btn-design'>Book Appoinment</Button></Link>
                    
                    </Card.Body>
                </Card>
                
        </div>
    );
};

export default ServiceDetails;