import React from 'react'
import {  Routes, Route } from "react-router-dom";
import { Login } from '../views/authentication/Login.views';
import { Registre } from '../views/authentication/Registre.view';
import { Main } from '../views/main.views';
import { ListTickets } from '../views/tickets/ListTickets.views';
import { Ticket } from '../views/tickets/Ticket.view';
import { Tickets } from '../views/tickets/Tickets.views';
import PrivateRoute from './Private.route';


export const AppRouter = () => {

    

  return (
    
      <Routes>
                <Route path='/' element={<Main/>} exact></Route>
                <Route path='/Tickets' element={<Tickets/>} exact></Route>
                <Route path='/Login' element={<Login/>} exact></Route>
                <Route path='/Registre' element={<Registre/>} exact></Route>
                <Route element={<PrivateRoute />}>
                  <Route path='/TicketList' element={<ListTickets/>} exact/>
                  <Route path='/Ticket/:idTicket' element={<Ticket/>} exact/>
                </Route>
        </Routes>
      


      
      
      
  )
}
