import React, {useState} from "react";

import "./ticket.style.css";

import { AddTicketForm } from "../../components/tickets/addTicket.comp";



export const Tickets = () => {

  const [ticketEmail, setticketEmail] = useState('')
  const [description,setdescription] = useState('')
  const [product,setProduct] = useState('')

  const handleOnChange = (e) =>{
    
    const {name, value} = e.target 
  
    switch(name) {
      case "ticketEmail":
        setticketEmail(value);
        break;
      case "description":
        setdescription(value);
        break;

      case "product":
        setProduct(value);
        break;
  
        default:
        break;
    }

    console.log(name, value)
    
      
   }

  const handleOnSubmit = e =>{
    e.preventDefault()
  
    if(!ticketEmail !=="" || !description !=="" || product !==""){
        return alert('Please enter the email or password')
        
    }
  }

  return (
    <div className="ticket-header">
      <div className="ticket-panel"> 
        <AddTicketForm
          handleOnChange = {handleOnChange}
          handleOnSubmit = {handleOnSubmit}
          ticketEmail = {ticketEmail}
          product = {product}
          description = {description}
        />
      </div>
  </div>
  )
};

export default Tickets.views;
