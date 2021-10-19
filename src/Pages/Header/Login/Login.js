import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './login.css'
const Login = () => {
  const {loginWithGoogle, handleSignIn, handleEmailChange, handlePasswordChange} = useFirebase();
  
    return (
        <div className='page-size'>
            <Form onSubmit={handleSignIn}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
  </Form.Group>
  <Button className='px-5' type="submit">
    Login
  </Button><br/>
  <Button onClick={loginWithGoogle} className='mt-3'>
    LogIn with Google
  </Button>
  <Button as={Link} to="/signup" className='mt-3 ms-2' >
    Create a New Account
  </Button>
</Form>
        </div>
    );
};

export default Login;