import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'

//Si no esta logeado, renderiza el children, si esta logeado, redirige a la pagina de marvel
export const PublicRoute = ({children}) => {
    const {logged} = useContext (AuthContext)
    return ( (!logged)
    ? children
    : <Navigate to="/marvel" />
    )
}



