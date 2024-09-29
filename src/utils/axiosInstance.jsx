import axios from "axios";
import Cookies from "js-cookie";

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
    const tenantId = "66d063ca0800f9ad017e7cfc"; // You can make this dynamic if needed

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["x-tenant-id"] = tenantId; // Set the x-tenant-id header

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
