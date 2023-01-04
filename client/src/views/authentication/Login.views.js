import React, {useState} from 'react';
import "./login.style.css";
import { AuthForm } from "../../components/login/Auth.comp";






export const Login = () => {

  

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 //console.log(user)



  const LoginCredentials= {
    Uemail: JSON.stringify(email,null,2),
    Upass : password};

 const handleOnChange = e =>{
  const {name, value} = e.target 
  

  switch(name) {
    case "email":
      setEmail(value);
      break;
    case "password":
      setPassword(value);
      break;

      default:
      break;
  }

  console.log(name, value)
    
 }

 

 const handleOnSubmit = e =>{  

  if(!email || !password){
      return alert('Please enter the email or password')
  }

  //console.log('log in')
  

    


}

  return (
    <div className="login-header">
      <div className="login-panel"> 
        <AuthForm 
        handleOnChange= {handleOnChange} 
        handleOnSubmit = {handleOnSubmit}
        email = {email}
        pass = {password}
        LoginCredentials={LoginCredentials}
        />
      </div>
    </div>
  )
}

export default Login.views;
