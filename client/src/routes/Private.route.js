
import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {useLogin} from '../components/login/useLogin.comp';



const PrivateRoute = (  {
      redirectPath = '/Login',
      
      }) => {


    const {isLogged} = useLogin();
    
    if(!isLogged()) return <Navigate to={redirectPath}  replace  />;
    //if(isLogged()) return <Navigate to={'/TicketList'}  replace  />;
    
        return ( <Outlet />)
        
    
    
}

export default PrivateRoute;