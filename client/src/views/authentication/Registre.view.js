import React,{useState} from 'react'

import "./login.style.css";
import { RegistreForm } from '../../components/login/Registre.Comp';


export const Registre = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Rpassword, setRPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

 const handleOnChange = e =>{
  const {name, value} = e.target 
  

  switch(name) {
    case "fname":
        setFirstname(value);
      break;
      case "lname":
        setLastname(value);
      break;
    case "email":
      setEmail(value);
      break;
    case "password":
      setPassword(value);
      break;
      case "Rpassword":
      setRPassword(value);
      break;
      

      default:
      break;
  }

  console.log(name, value)
    
 }
 


  return (
    <div className="login-header">
      <div className="registre-panel"> 
      <RegistreForm 
        handleOnChange = {handleOnChange}
          email = {email}
          password ={password}
          Rpassword ={Rpassword}
          firstname = {firstname}
          lastname = {lastname}/>
      </div>
    </div>
  )
}


