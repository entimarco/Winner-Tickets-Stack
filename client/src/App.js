import React from "react";
import { AppRouter } from "./routes/App.routes";
import './App.css';
import LoginComp from "./components/login/Login.comp";
import { Navbar,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function App() {

  function logout(){
    window.location.href ="/login"
  }

  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" variant="dark" bg ="dark">
        <Navbar.Brand>Winner Tikets</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to ="/Tickets">Send a Ticket</Nav.Link>
            <Nav.Link as={NavLink} to ="/TicketList">Review a Ticket</Nav.Link>
          </Nav>
          <Nav >
          <Nav.Link as={NavLink} to ="/Login">Login</Nav.Link>
          <Nav.Link to ="/Login" onClick={()=>logout()} >Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <LoginComp >
        <AppRouter />
      </LoginComp >
      
    </div>
  );
} 

export default App;
