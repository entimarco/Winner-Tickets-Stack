import React, { useEffect,useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useLogin } from '../login/useLogin.comp';

export const TicketForm = ({handleOnSubmit,handleOnChange,staffComments}) => {

  const params = useParams()
  const navigate = useNavigate();
  const user = useLogin();

  const [ticketEmail, setticketEmail] = useState('')
  const [description,setdescription] = useState('')
  const [product,setProduct] = useState('')
  const [switchState, setSwitchState] = useState(false);
  const[switchChecked,setSwitchChecked]= useState('In Progress');
    
  

  useEffect(()=>{
    axios.post('/api/ticket/getTicketData',{idticket : params.idTicket}).then(res=>{
      //console.log(res.data[0])
      const dataTicket = res.data[0];
      setticketEmail(dataTicket.email)
      setProduct(dataTicket.product)
      setdescription(dataTicket.description)
    })
  },[])

  function editTicket(){

    console.log(user.user.name)

    var editData = {
      ticketEmail: ticketEmail,
      description: description,
      product: product,
      idTicket : params.idTicket,
      status : switchChecked,
      staffComments : staffComments,
      staff: user.user.name
    }

    console.log(editData)

    axios.post('/api/ticket/editTicketData',editData).then(res=>{
      //console.log(res.data)
      alert(res.data)
       navigate('/TicketList');
    }).then(err => {console.log(err)})  
  }

  function checked(){
    setSwitchState(!switchState)
    switch(switchState) {
      case true:
        setSwitchChecked('In Progress');
        break;

        case false: 
        setSwitchChecked('Completed');
        break;

        default:
          setSwitchChecked('In Progress');
        break;
    }
  }


  return (
    <Container>
        <Row>
            <Col>
                <h1> Ticket {params.idTicket} </h1>
                <hr />
            <Form autoComplete="off" >
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4" >Email Address</Form.Label>
                    <Col sm="8">
                        <Form.Control
                            type="email"
                            name="email"
                            value={ticketEmail}
                            onChange = {handleOnChange}
                            placeholder="Enter Email"
                            disabled
                            
                        />
                    </Col>
                    
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4" >Product</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        type="text"
                        name="product"
                        value={product}
                        onChange = {(e)=>handleOnChange}
                        placeholder="Enter Password"
                        disabled
                         
                    />
                    </Col>
                    
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4" >Description</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        type="text"
                        name="description"
                        value={description}
                        onChange = {(e)=>handleOnChange}
                        placeholder="Enter Password"
                        disabled
                         
                    />
                    </Col>
                    
                </Form.Group>
                <hr />
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm="4" >Staff Comment</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        as="textarea"
                        name="staffcomments"
                        value={staffComments}
                        onChange = {handleOnChange}
                        placeholder="Enter a Comment"
                        required
                    />
                    </Col>
                    
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                <Col sm="4"></Col>
                <Col sm="4">
                    <Form.Check 
                    type="switch"
                    id="completed"
                    label="Mark as Completed "
                    onChange={e=>checked()}
                    defaultChecked={switchState}
                  />
                  </Col>
              </Form.Group>
                <hr />
                <Button type="button" onClick={(e)=>editTicket()}>Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

TicketForm.propTypes={
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
}
