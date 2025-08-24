// import store from "../store";
// import { setCredentials } from "../store/slices/authSlice";
// import axiosInstance from "./axiosInstance";

// export const bootstrapAuth = async () => {
//   console.log("Bootstrap started");
//   try {
//     const res = await axiosInstance.post("/admin/refresh", null, { timeout: 10000 }); // bump to 10s
//     console.log("Token refreshed:", res.data.accessToken);
//     store.dispatch(setCredentials({ token: res.data.accessToken }));
//   } catch (err) {
//     if (err.response?.status === 401) {
//       // No refresh token (user not logged in) → just skip
//       console.log("No refresh token found, skipping bootstrap auth.");
//     } else if (err.code === "ECONNABORTED") {
//       console.error("Request timed out:", err.message);
//     } else {
//       console.error("Unexpected error in bootstrapAuth:", err);
//     }
//   } finally {
//     console.log("Bootstrap finished");
//   }
// };


import store from "../store";
import { setCredentials } from "../store/slices/authSlice";
import axiosInstance from "./axiosInstance";

export const bootstrapAuth = async () => {
  console.log("Bootstrap started");

  const tryRefresh = async (attempt = 1) => {
    try {
      const res = await axiosInstance.post("/admin/refresh", null, { timeout: 10000 });
      console.log("Token refreshed:", res.data.accessToken);
      store.dispatch(setCredentials({ token: res.data.accessToken }));
      return true;
    } catch (err) {
      if (err.response?.status === 401) {
        console.log("No refresh token found, skipping bootstrap auth.");
        return false;
      } else if (err.code === "ECONNABORTED") {
        console.error(`Attempt ${attempt}: Request timed out`);
      } else {
        console.error(`Attempt ${attempt}: Unexpected error`, err.message);
      }
      return false;
    }
  };

  // First attempt
  const success = await tryRefresh(1);

  // Retry once if it failed (but not due to 401)
  if (!success) {
    console.log("Retrying refresh in 2s...");
    await new Promise((res) => setTimeout(res, 2000));
    await tryRefresh(2);
  }

  console.log("Bootstrap finished");
};
