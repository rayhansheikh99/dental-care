import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './services.css'

const Services = (props) => {
   
        const{id, name, image, fee, describe}=props.service
   

    return (
        <div>
            
            <Card className="card h-100 card-design">
                    <Card.Img className="img-service d-block" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Fee:</b> {fee}</ListGroupItem>
                        <ListGroupItem>{describe.slice(0,130)}...</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                  <Link to={`/ServiceDetails/${id}`}><Button className='px-5 btn-design'>Explore Details</Button></Link>
                    
                    </Card.Body>
                </Card>
            </div>
    
    );
};

export default Services;