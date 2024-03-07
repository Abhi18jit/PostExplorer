import React, { useEffect , useNavigate} from 'react'
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../contextStore/UserContext';


const Logout = () => {
  const {logOutUser}=useUserContext();
    useEffect(()=>{
      console.log("Logout");
        logOutUser();
        

    },[])
  return (
    <>
      <Navigate to="/" />
    </>
  )
}

export default Logout
