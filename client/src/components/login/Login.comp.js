import { createContext, useState} from "react";
import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";



export const LoginContext = createContext();

const  LoginComp = ({ children }) => {
  
    //const [user, setUser]=useState({isLogged:true});
   const [user, setUser] = useState(null);
   const navigate = useNavigate();
    
     //console.log(user);

     const login=(LoginCredentials)=>{

      axios.post("https://winnertickets.onrender.com/api/login/Login-User",LoginCredentials,{}).then(res=>{
        if(res.data!=="No Registre"){
          alert("Log In Succesfull")
          setUser({isLogged:true,
          name:res.data.firstname})
          navigate('/TicketList');
          
        }else{
          alert("There is no registre with this email.")
        }
        
    }).catch(err=>{ 
      console.log(err)
    })
      
     }

     const isLogged =()=> !!user;

     const logout=()=>{
      setUser({isLogged:false})
     }

  

    const contextValue={ user,isLogged, login,logout,};

    

  return (
    <LoginContext.Provider value={contextValue} > 
        {children}
    </LoginContext.Provider>

  )
}

export default LoginComp;
