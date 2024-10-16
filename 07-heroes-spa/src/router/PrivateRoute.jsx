import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom'

// This component is a wrapper for the Routes component, it will only render the children if the user is logged in
export const PrivateRoute = ({children}) => {
    const {logged} = useContext (AuthContext)
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);
    return ( (logged)
    ? children
    : <Navigate to="/login" />
    
  )
}
