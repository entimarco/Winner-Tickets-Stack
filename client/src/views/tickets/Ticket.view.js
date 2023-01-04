import React,{useState} from 'react'
import { TicketForm } from '../../components/tickets/ticket.comp';
import "./ticket.style.css";

export const Ticket = () => {

  
  const [staffComments,setStaffComments]= useState('')

  const handleOnChange = (e) =>{
    
    const {name, value} = e.target 
  
    switch(name) {
      
        case "staffcomments":
          setStaffComments(value);
        break;
  
        default:
        break;
    }

    console.log(name, value)
    
      
   }

  const handleOnSubmit = e =>{
    console.log(staffComments)
  
    
  }
  return (
    <div className="ticket-header">
      <div className="ticket-panel"> 
        <TicketForm
          handleOnChange={handleOnChange}
          handleOnSubmit ={handleOnSubmit}
          staffComments = {staffComments}
         />
      </div>
  </div>
  )
}
