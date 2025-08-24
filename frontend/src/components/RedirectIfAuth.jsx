import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "./loader/Loader";

export default function RedirectIfAuth({ children }) {
  const { token, loading } = useSelector((state) => state.auth);

  if (loading) return <Loader />;

  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
}
