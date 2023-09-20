import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom';



const PrivateRouter = () => {
     const location = useLocation()
     console.log(location);
    const {currentUser} = useSelector(state=>state.auth);
  return currentUser ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRouter