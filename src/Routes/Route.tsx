import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext, { AuthType } from '../Contexts/authContext';

interface ProtectedRouteProps {
  children?: JSX.Element | undefined;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}: ProtectedRouteProps): JSX.Element | React.ReactElement => {
  const { userData } = useContext(AuthContext) as AuthType;

  if (userData?.email) return children || <Outlet />;

  return <Navigate to={{ pathname: '/login' }} />;
};

export default ProtectedRoute;
