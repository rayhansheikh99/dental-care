import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const SignUp = () => {
  const {loginWithGoogle, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, error} = useFirebase();


    return (
        <div className='page-size'>
        <Form className='login-form' onSubmit={handleRegistration}>
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
<p>or Sign Up with</p>
  <h1 onClick={loginWithGoogle} className='icon-google'>G</h1><br/>
  
  <Link to="/login"> Already Have an Account</Link>
</Form>
    </div>
    );
};

export default SignUp;