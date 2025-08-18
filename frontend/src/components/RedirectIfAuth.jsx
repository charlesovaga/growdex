import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuth({ children }) {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
}
