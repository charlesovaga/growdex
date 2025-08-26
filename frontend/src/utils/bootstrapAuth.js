import store from "../store";
import { setCredentials, setLoading } from "../store/slices/authSlice";
import axiosInstance from "./axiosInstance";

export const bootstrapAuth = async () => {
  store.dispatch(setLoading(true));
  try {
    const res = await axiosInstance.post("/admin/refresh", null, {
      withCredentials: true,
      timeout: 10000,
    });

    store.dispatch(setCredentials({
      token: res.data.accessToken,
      admin: res.data.admin,
    }));

    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("adminData", JSON.stringify(res.data.admin));

    console.log("Token refreshed on app load");
    return true;
  } catch (err) {
    console.log("No refresh token, skipping bootstrap.");
    store.dispatch(setLoading(false));
    return false;
  }
};
