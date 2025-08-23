import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, 
});

// Request interceptor: attach token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
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
        // Call refresh endpoint
        const res = await axios.post(
          "http://localhost:5000/api/admin/refresh",
          {},
          { withCredentials: true }
        );

        const newToken = res.data.accessToken;

        // Save new token
        localStorage.setItem("accessToken", newToken);

        // Update headers
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        // Retry original request
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Refresh token failed:", err);

        // Force logout if refresh fails
        localStorage.removeItem("accessToken");
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
