import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  //   const navigate = useNavigate();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <div>{children}</div>;
};

export default RequireAuth;

//note: useNavigate is used to navigate programmatically

//note: useLocation is used to get the current location object of the router
