import store from "../store";
import { setCredentials } from "../store/slices/authSlice";
import axiosInstance from "./axiosInstance";

export const bootstrapAuth = async () => {
  try {
    const res = await axiosInstance.post("/admin/refresh", null, {
      withCredentials: true, // IMPORTANT: send cookie
      timeout: 10000,
    });

    store.dispatch(setCredentials({
      token: res.data.accessToken,
      admin: res.data.admin, // <-- now we have user info
    }));

    console.log("Token refrseshed on app load");
    return true;
  } catch (err) {
    console.log("No refresh toke, skipping bootstrap.");
    store.dispatch(setLoading(false)); // still stop loading
    return false;
  }
};
