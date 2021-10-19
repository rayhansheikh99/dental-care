import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div className='page-size'>
        <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">

<Form.Control type="text" placeholder="Enter Full Name" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Control type="email" placeholder="Enter email" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Control type="password" placeholder="Confirm Password" />
</Form.Group>
<Button className='px-5' variant="primary" type="submit">
Sign Up
</Button><br/>
<Button className='mt-3' variant="primary" type="submit">
    Sign Up with Google
  </Button>
  <Button className='mt-3 ms-2' variant="primary" type="submit">
    Already Have an Account
  </Button>
</Form>
    </div>
    );
};

export default SignUp;