import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { token } = useSelector((state) => state.auth);

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
