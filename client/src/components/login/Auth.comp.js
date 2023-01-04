import React  from 'react'
import { PropTypes } from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {useLogin} from './useLogin.comp';



export const AuthForm = ({handleOnChange, handleOnSubmit, email, pass,LoginCredentials}) => {

       
    const {login}= useLogin();
    


  return (
    <Container>
        <Row>
            <Col>
                <h1> Staff Login</h1>
                <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4" >Email Address</Form.Label>
                    <Col sm="8">
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange = {handleOnChange}
                            placeholder="Enter Email"
                            required
                            
                        />
                    </Col>
                    
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4" >Password</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        type="password"
                        name="password"
                        value={pass}
                        onChange = {handleOnChange}
                        placeholder="Enter Password"
                        required
                         
                    />
                    </Col>
                    
                </Form.Group>
                <hr />
                <Form.Group as={Row} className='mb-3'>
                <Col sm="4"> </Col><Form.Label column sm="5" className=".fs-4 text">Create a new user : </Form.Label> <Col sm="3" className="text-sm-start" > <a href="/Registre" >Registre</a></Col>
                </Form.Group>
                
                <hr />
                <Button type="button" onClick={()=>login(LoginCredentials)}>Submit</Button>
                <hr />
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

AuthForm.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}
