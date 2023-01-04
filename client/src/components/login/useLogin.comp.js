import { LoginContext } from './Login.comp';

 import { useContext } from 'react'
 
 export const useLogin = () => {
  return(useContext(LoginContext));
 }
 
