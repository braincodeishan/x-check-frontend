import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from 'react'
import LoginContext from './LoginContext';

const useAuth = () => {
    const Login = useContext(LoginContext)
    return Login.isLoggedin

};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;