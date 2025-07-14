import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {

    const authToken = localStorage.getItem("authToken");
    const tokenParsed = JSON.parse(authToken);
  const navigate = useNavigate();

      useEffect(() => {
        if(!tokenParsed){
        navigate("/login");
        }
      
      }, [tokenParsed])

if(tokenParsed){
    return children;

}
 
}

export default ProtectedRoute