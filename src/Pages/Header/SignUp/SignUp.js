import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const SignUp = () => {
  const {loginWithGoogle, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, error} = useFirebase();


    return (
        <div className='page-size'>
        <Form onSubmit={handleRegistration}>
<Form.Group className="mb-3">
  
<Form.Control onBlur={handleNameChange} placeholder="Full Name" required />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
<div>{error}</div>
</Form.Group>

<Button className='px-5 btn-desing-all px-5' type="submit" >
Sign Up
</Button><br/>
<Button onClick={loginWithGoogle} className='mt-3 px-5 btn-desing-all' >
    Sign Up with Google
  </Button>
  <Button as={Link} to="/login" className='mt-3 btn-desing-all px-5 ms-2' variant="primary" type="submit">
    Already Have an Account
  </Button>
</Form>
    </div>
    );
};

export default SignUp;