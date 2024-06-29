import { Link, useNavigate } from "react-router-dom";
import Logo from "../../limeGreenAndBlackLogo.svg?react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "", experience: "" });
  const { email, password, experience } = inputValue;
  const handleOnChange = (e) => {
    const { name, value, experience } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-center",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-center" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      experience: "Retail",
    });
  };
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
            <h2 className="mb-6 text-center text-2xl text-stroke text-stroke-black text-stroke-fill-[#00ff00] tracking-widest  font-Bungee">
              Register
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
              >
                Enter your email address:
              </label>
              <div className="mt-2">
                <input
                  placeholder="HEMautomotive@example.com"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                  onChange={handleOnChange}
                  value={email}
                />
              </div>
            </div>
            <div className="flex gap-x-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                >
                  Enter a password:
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    required
                    placeholder="••••••••••"
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                    minLength="6"
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password1"
                  className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                >
                  Re-enter your password:
                </label>
                <div className="mt-2">
                  <input
                    id="password1"
                    name="password1"
                    type="password"
                    value={password1}
                    required
                    placeholder="••••••••••"
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                    minLength="6"
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3
                className="block text-base font-medium leading-6 text-white
                font-Urbanist tracking-wide text-left"
              >
                What kind of customer are you?
                <p className="text-[.8rem] text-[#aaaaaa]">
                  Defaults to retail
                </p>
              </h3>
              <div className="">
                <input
                  type="radio"
                  id="Retail"
                  defaultChecked
                  name="Experience"
                  value="Retail"
                  className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                />
                <label
                  htmlFor="Retail"
                  className="text-base font-medium text-white font-Urbanist tracking-wide text-left px-2 align-middle hover:text-[#aaaaaa] mr-2"
                >
                  {" "}
                  Retail
                </label>

                <input
                  type="radio"
                  id="Dealership"
                  name="Experience"
                  value="Dealership"
                  className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                />
                <label
                  htmlFor="Dealership"
                  className="text-base font-medium text-white font-Urbanist tracking-wide text-left px-2 align-middle hover:text-[#aaaaaa] mr-2"
                >
                  {" "}
                  Dealership
                </label>

                <input
                  type="radio"
                  id="Fleet"
                  name="Experience"
                  value="Fleet"
                  className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                />
                <label
                  htmlFor="Fleet"
                  className="text-base font-medium text-white font-Urbanist tracking-wide text-left px-2 align-middle hover:text-[#aaaaaa] mr-2"
                >
                  {" "}
                  Fleet
                </label>

                <input
                  type="radio"
                  id="Other"
                  name="Experience"
                  value="Other"
                  className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                />
                <label
                  htmlFor="Other"
                  className="text-base font-medium text-white font-Urbanist tracking-wide text-left px-2 align-middle hover:text-[#aaaaaa] mr-2"
                >
                  {" "}
                  Other
                </label>
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

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-[#333333] px-6 text-white">
                  Or you can register with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Link
                to="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#aaaaaa] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md hover:bg-[#00dd00] focus-visible:outline shadow-black hover:shadow-inner hover:shadow-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="text-sm font-semibold leading-6 font-Play">
                  Google
                </span>
              </Link>

              <Link
                to="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#aaaaaa] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md hover:bg-[#00dd00] focus-visible:outline shadow-black hover:shadow-inner hover:shadow-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="text-sm font-semibold leading-6 font-Play">
                  Facebook
                </span>
              </Link>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-[#aaaaaa] font-Urbanist tracking-wider flex justify-center align-text-center">
            Already have an account?{" "}
            <Link
              to={"/user/login"}
              className="font-semibold text-[#00ff00] hover:text-[#00dd00]"
            >
              <span>
                <p className="ml-2">Sign-in</p>
              </span>
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RegistrationForm;
