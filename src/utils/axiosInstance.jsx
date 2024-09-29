import axios from "axios";
import Cookies from "js-cookie";

const tenantId = "66d063ca0800f9ad017e7cfc"; // Define tenant ID globally

const axiosInstance = axios.create({
  baseURL: "https://skynetrix.tech/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to set headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token"); // Get the token from cookies
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["x-tenant-id"] = tenantId; // Set the x-tenant-id header
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
