import axiosInstance from "./axiosInstance.jsx"; // Import the Axios instance
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";
import Logo from "../components/limeGreenAndBlackLogo.svg?react";
import { useState } from "react";

export function SignInForm() {
  const tenantId = "66d063ca0800f9ad017e7cfc"; // Define tenant ID here

  const [values, setValues] = useState({
    username: "",
    password: "",
    error: "",
    loading: false,
    success: false,
    role: "", // Added to capture the user's role
  });

  const { username, password, error, loading, success, role } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, success: false, loading: true });
    try {
      const response = await axiosInstance.post(`/users/${tenantId}/login`, {
        username,
        password,
      });

      // Store the token in cookies
      Cookies.set("token", response.data.token, { expires: 7 }); // Expires in 7 days

      // Get the user's role from the response
      const userRole = response.data.role;
      setValues({ ...values, success: true, role: userRole });
    } catch (err) {
      setValues({
        ...values,
        error: err.response?.data?.error || "Error during login",
        loading: false,
      });
    }
  };

  const errorMessage = () =>
    error && <div className="text-red-500">{error}</div>;

  const loadingMessage = () =>
    loading && <div className="text-green-500">Loading...</div>;

  // Role-based redirection logic
  const getRedirectPath = () => {
    if (role === "Admin" || role === "SuperAdmin") return "/admin-dashboard";
    if (role === "Mechanic") return "/mechanic-dashboard";
    return "/profile"; // Default user profile
  };

  return success ? (
    <Navigate to={getRedirectPath()} /> // Redirect based on role
  ) : (
    <div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-[#333333] px-6 py-12 shadow-[#00ff00] shadow-md sm:rounded-lg sm:px-12 ring-black ring-inset ring-2">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Link to="/" className="">
              <Logo
                className="mx-auto w-auto h-[12rem]"
                alt="H.E.M Automotive"
              />
            </Link>
            <h2 className="mb-6 text-center text-2xl text-stroke text-stroke-black text-stroke-fill-[#00ff00] tracking-widest font-Bungee">
              Sign in to your account
            </h2>
            {errorMessage()}
            {loadingMessage()}
          </div>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={handleChange("username")}
                placeholder="Your Username"
                className="block w-full p-2 mb-4 text-black rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={handleChange("password")}
                placeholder="••••••••••"
                className="block w-full p-2 mb-4 text-black rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#00ff00] text-gray-800 px-4 py-2 rounded-full text-lg font-bold hover:bg-[#00dd00] transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Add Forgot Password link */}
          <div className="text-center mt-4">
            <Link
              to="/forgot-password"
              className="text-[#00ff00] hover:text-[#00dd00]"
            >
              Forgot your password?
            </Link>
          </div>

          <p className="mt-10 text-center text-sm text-[#aaaaaa]">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#00ff00] hover:text-[#00dd00]"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
