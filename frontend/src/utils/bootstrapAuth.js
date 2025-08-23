// src/utils/bootstrapAuth.js
import axiosInstance from "./axiosInstance";
import { setCredentials, logout } from "../store/slices/authSlice";
import store from "../store";

export const bootstrapAuth = async () => {
    try {
      const res = await axiosInstance.post("/admin/refresh");
      store.dispatch(setCredentials({ token: res.data.accessToken }));
    } catch (err) {
        if (err.response?.status === 401) {
          // silent fail = not logged in
          store.dispatch(logout());
          // don't console.error, just ignore
        } else {
          console.error("Unexpected error in bootstrapAuth:", err);
        }
      }
  };
  
