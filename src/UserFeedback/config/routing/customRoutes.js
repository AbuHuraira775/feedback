import { Navigate, Outlet } from "react-router-dom"

const PrivateRouting = () => {
    const user = localStorage.getItem('user')
    return !user ? <Navigate to='/login'/> : <Outlet /> 
}

const PublicRouting = () => {
    const user = localStorage.getItem('user')
    return user ?  <Navigate to='/add-feedback'/> : <Outlet /> 
}

const LogoutRouting = () => {
    const user = localStorage.getItem('user')
    return !user ?  <Navigate to='/add-feedback'/> : <Outlet /> 
}

export {PrivateRouting , PublicRouting,LogoutRouting}