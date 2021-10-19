import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './login.css'
const Login = () => {
    return (
        <div className='page-size'>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className='px-5' variant="primary" type="submit">
    Login
  </Button><br/>
  <Button className='mt-3' variant="primary" type="submit">
    LogIn with Google
  </Button>
  <Button className='mt-3 ms-2' variant="primary" type="submit">
    Create a New Account
  </Button>
</Form>
        </div>
    );
};

export default Login;