import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "./loader/Loader";

export default function ProtectedRoute({ children }) {
  const { token, loading } = useSelector((state) => state.auth);

  if (loading) return <Loader />;
  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
