import React, { useContext } from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { ChildrenProps } from "../Contexts/deleteContext";

import AuthContext, {AuthType} from "../Contexts/authContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
    priv:boolean;
}

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({ children, priv}) => {

    const{userData} = useContext(AuthContext) as AuthType;


    
    
    if (!!userData.email === priv) {
      return <>{children}</>;
    }else{
        return <Navigate to={{
          pathname: priv ? "/login":"/"
        }}/>
  }

  
};

  export default ProtectedRoute;
