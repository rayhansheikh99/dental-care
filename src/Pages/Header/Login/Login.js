import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';
import './login.css'
const Login = () => {
  const {loginWithGoogle} = useFirebase();
  
    return (
        <div className='page-size'>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className='px-5'>
    Login
  </Button><br/>
  <Button onClick={loginWithGoogle} className='mt-3'>
    LogIn with Google
  </Button>
  <Button className='mt-3 ms-2' >
    Create a New Account
  </Button>
</Form>
        </div>
    );
};

export default Login;