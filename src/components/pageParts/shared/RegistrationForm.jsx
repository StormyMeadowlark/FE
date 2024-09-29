// utils/RegistrationForm.jsx

import axiosInstance from "../../../utils/axiosInstance"; // Import the Axios instance
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../limeGreenAndBlackLogo.svg?react";
import { useState } from "react";

function RegistrationForm() {
  const tenantId = "66d063ca0800f9ad017e7cfc"; // Define tenant ID here

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    loading: false,
    success: false,
  });

  const {
    username,
    email,
    password,
    confirmPassword,
    error,
    loading,
    success,
  } = formValues;

  const handleChange = (name) => (event) => {
    setFormValues({ ...formValues, error: false, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormValues({ ...formValues, success: false, loading: true });

    if (password !== confirmPassword) {
      setFormValues({
        ...formValues,
        error: "Passwords do not match, try again.",
      });
    } else {
      try {
        await axiosInstance.post(`/users/${tenantId}/register`, {
          username,
          email,
          password,
          tenant: "HEM Automotive",
        });

        // On successful registration, set success to true
        setFormValues({ ...formValues, success: true, loading: false });
      } catch (err) {
        setFormValues({
          ...formValues,
          error: err.response?.data?.error || "Error during registration",
          loading: false,
        });
      }
    }
  };

  const errorMessage = () =>
    error && <div className="text-red-500">{error}</div>;

  const loadingMessage = () =>
    loading && <div className="text-green-500">Loading...</div>;

  const successMessage = () =>
    success && (
      <div className="text-green-500">
        Registration successful! Please <Link to="/login">log in</Link>.
      </div>
    );

  return (
    <div className="flex min-h-full flex-1 justify-center pb-12 sm:px-6 lg:px-8">
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
              Register
            </h2>
            {errorMessage()}
            {loadingMessage()}
            {successMessage()}
          </div>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  placeholder="Your Username"
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                  onChange={handleChange("username")}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  placeholder="HEMautomotive@example.com"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                  onChange={handleChange("email")}
                />
              </div>
            </div>

            <div className="flex gap-x-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••••"
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                    minLength="6"
                    onChange={handleChange("password")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="••••••••••"
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                    minLength="6"
                    onChange={handleChange("confirmPassword")}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#00ff00] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md hover:bg-[#00dd00] focus-visible:outline shadow-black hover:shadow-inner hover:shadow-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-Play"
              >
                Register for a High-End Mechanics Experience
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
