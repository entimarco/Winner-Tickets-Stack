import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import uniquid from 'uniqid';
import axios from 'axios';



export const AddTicketForm = ({handleOnChange, handleOnSubmit, ticketEmail, product, description}) => {

  
  function addTicket(){

    var ticket = {
      ticketEmail: JSON.stringify(ticketEmail,null,2),
      description: description,
      product: product,
      idTicket : uniquid(),
      updated: '',
      status:'false',
      staffcomments:'',
      staff:''
    }

    console.log(ticket) 
    //debugger
    if (ticketEmail.length!== 0 && description.length!== 0 && product.length!== 0){
      console.log ('sending tickets')
      axios.post('https://winnertickets.onrender.com/api/ticket/addTicket', ticket,{
      }).then(res =>{
        alert(res.data)
        window.location.reload(true)
      })
      .then(err=>{ 
        console.log(err)
      })

    }else{
      alert('Please complete all the information')
    }
    

   }


  return (
    <Container>
        <Row>
            <Col>
                <h1> Add a Ticket</h1>
                <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit} >
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4" >Email Address</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        htmlSize='30px'
                        type="email"
                        name="ticketEmail"
                        value = {ticketEmail}
                        onChange = {handleOnChange}
                        placeholder="Enter Email"
                        required
                         
                    />
                    </Col>
                    
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4">Product</Form.Label>
                    <Col sm="8">
                    <Form.Select
                        name="product"
                        placeholder="Enter a product reference to the ticket"
                        value= {product}
                        onChange = {handleOnChange}
                        required
                    >
                      <option value="none">Select a product reference to the ticket</option>
                      <option value="website"> Website</option>
                      <option value="mobile"> Mobile App</option>
                      <option value="subs"> Subscriptions</option>
                      <option value="general"> General</option>
                      <option value="others"> Others</option>
                      </Form.Select>
                    </Col>
                    
                </Form.Group>

    
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4">Description</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={description}
                        onChange = {handleOnChange}
                        placeholder="Enter a description"
                        required
                    />
                    </Col>
                </Form.Group>
                <hr />
                <Button type="button" onClick={(e)=>addTicket()}>Submit</Button>
                <hr />
                </Form>
            </Col>
        </Row>
    </Container>
    
    
  )
}





