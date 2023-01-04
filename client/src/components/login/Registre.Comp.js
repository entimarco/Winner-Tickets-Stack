import React, {  } from 'react'
import { PropTypes } from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import validator from "validator";





export const RegistreForm = ({handleOnChange,firstname,lastname,password,Rpassword,email}) => {
    
    function RegistreUser(){ 

        console.log('registre')

        if(validator.isEmail(email)){

            
            var user = {

                REmail: JSON.stringify(email,null,2),
                Rfirstname: firstname,
                RLastname: lastname,
                pass : password,
                Rpass : Rpassword

              }
    
            if(password !== Rpassword){
                alert('Password does not match')
            }else{
                
                
                console.log ('Registre user')
                axios.post('/api/login/RegistreUser', user,{
                    
                }).then(res =>{
                    alert(res.data);
                    window.location.href = "/Login";
                    
                })
                .catch(err=>{ 
                    console.log(err)
                });
                    
                  
    
            }


        }else{
            alert('Please type a valid email address')
        }
            

        
        
    
       }
  return (
    <Container>
        <Row>
            <Col>
                <h1> Staff Registre</h1>
                <hr />
            <Form autoComplete="off" validated>
            <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4">Firstname</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        type="text"
                        name="fname"
                        value={firstname}
                        onChange = {handleOnChange}
                        placeholder="Enter your firstname"
                        required
                         
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm="4">Lastname</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        type="text"
                        name="lname"
                        value={lastname}
                        onChange = {handleOnChange}
                        placeholder="Enter your Lastname"
                        required
                         
                    />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm="4">Email Address</Form.Label>
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
                <Form.Label column sm="4">Enter a Password</Form.Label>
                <Col sm="8">
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange = {handleOnChange}
                        placeholder="Enter Password"
                        required
                         
                    />
                    </Col>
                </Form.Group>
               
                <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm="4">Re-enter the password</Form.Label>
                <Col sm="8">
                    <Form.Control
                        type="password"
                        name="Rpassword"
                        value={Rpassword}
                        onChange = {handleOnChange}
                        placeholder="Re-enter Password"
                        required
                         
                    />
                    </Col>
                </Form.Group>
                
                <hr />

                <Form.Group as={Row} className='mb-3'>
                <Col sm="6"> </Col><Form.Label column sm="3" className=".fs-4 text">Already registered? </Form.Label> <Col sm="2" className="text-sm-start" > <a href="/Login" >Sign In</a></Col>
                </Form.Group>
                <hr />
                <Button type="button" onClick={(e)=>RegistreUser()}>Submit</Button>
                <hr/>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}
RegistreForm.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    Rpassword: PropTypes.string.isRequired,
}