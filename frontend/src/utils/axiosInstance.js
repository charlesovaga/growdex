// // src/utils/axiosInstance.js
import axios from "axios";
import { logout, setCredentials } from "../store/slices/authSlice";
import store from "../store";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    withCredentials: true,
  });
  

// Request interceptor: attach token from Redux (not localStorage)
axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: handle 401 (expired access token)
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh token request (cookie will be sent automatically)
        const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/admin/refresh`,
            {},
            { withCredentials: true }
          );
          

        const newToken = res.data.accessToken;

        // Update Redux store (instead of localStorage)
        store.dispatch(setCredentials({ token: newToken }));

        // Retry original request with new token
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Refresh token failed:", err);
        store.dispatch(logout());
        return Promise.reject(err);
       
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;


// // src/utils/axiosInstance.js
// import axios from "axios";
// import { logout, setCredentials } from "../store/slices/authSlice";
// import store from "../store";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true, // include cookies
// });

// // Request interceptor: attach token from Redux (not localStorage)
// axiosInstance.interceptors.request.use((config) => {
//   const token = store.getState().auth.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Response interceptor: handle 401 (expired access token)
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // Refresh token request (cookie will be sent automatically)
//         const res = await axios.post(
//           "http://localhost:5000/api/admin/refresh",
//           {},
//           { withCredentials: true }
//         );

//         const newToken = res.data.accessToken;

//         // Update Redux store (instead of localStorage)
//         store.dispatch(setCredentials({ token: newToken }));

//         // Retry original request with new token
//         originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
//         return axiosInstance(originalRequest);
//       } catch (err) {
//         console.error("Refresh token failed:", err);
//         store.dispatch(logout());
//         return Promise.reject(err);
       
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
