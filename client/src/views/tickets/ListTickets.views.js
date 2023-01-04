import axios from "axios";
import React, {useEffect, useState} from "react";
import "./ticket.style.css";
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import "./ticket.style.css";
import { useNavigate } from "react-router-dom";


export const ListTickets = () => {


  const [ticketdata, setTicketdata] = useState([])
  const navigate = useNavigate();
  
  useEffect(()=>{
    axios.get('api/ticket/getTickets').then(res=>{
        //console.log(res.data)
        setTicketdata(res.data)
    }).catch(err=>{
        console.log(err)
    });
  },[])

   const HandleButtonClick = (id) => {
        console.log('clicked');
        console.log(id);
     
        navigate(`/Ticket/${id}`);
        
    };


    const columns = [
        {
            name: 'ID',
            selector: row => row.idticket,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Product',
            selector: row => row.product,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Assigned Staff',
            selector: row => row.staff,
        },
        {
            name: 'Staff Comment',
            selector: row => row.staffComments,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        
        {   
            
            cell: (row) => {if(row.status!=="Completed"){return <Button className="btn btn-success" onClick={()=>HandleButtonClick(row.idticket)}>Action</Button>} else { return <Button disabled>No Action</Button>}},
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },

    ];
    

  return (
    <div className="ticket-header">
      <div className="ticket-table"> 
        <h1> Tickets List</h1>
        <DataTable 
                id="general data"
                data = {ticketdata}
                columns={columns}
                striped
                responsive
                pagination
            /> 
            
      </div>
  </div>
  )
}
