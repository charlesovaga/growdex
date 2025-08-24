import store from "../store";
import { logout } from "../store/slices/authSlice";
import axiosInstance from "./axiosInstance";

export const bootstrapAuth = async () => {
    console.log("Bootstrap started");
    try {
      const res = await axiosInstance.post("/admin/refresh", null, { timeout: 5000 });
      console.log("Token refreshed:", res.data.accessToken);
      store.dispatch(setCredentials({ token: res.data.accessToken }));
    } catch (err) {
      if (err.response?.status === 401) {
        console.log("Not logged in, logging out");
        store.dispatch(logout());
      } else if (err.code === "ECONNABORTED") {
        console.error("Request timed out:", err.message);
      } else {
        console.error("Unexpected error in bootstrapAuth:", err);
      }
    } finally {
      console.log("Bootstrap finished");
    }
  };
  