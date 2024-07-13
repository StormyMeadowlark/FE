import { Link } from "react-router-dom";
import Logo from "../../limeGreenAndBlackLogo.svg?react";
import { useState } from "react";
import { register } from "../../../Backend";

function RegistrationForm() {

  const [formValues, setFormValues] = useState({
    email: "",
    password:"",
    confirmPassword:"",
    error:"",
    loading:"",
    success:"",
  });

  const { email, password, confirmPassword, error, loading, success } = formValues;

  const handleChange = name => event => {
    setFormValues({ ...formValues, error: false, [name]: event.target.value});
  };

  const onSubmit = async event => {
    event.preventDefault();
    setFormValues({ ...formValues, success: false, loading: true });
    if (password !== confirmPassword) {
      errorMessage("Passwords do not match try again")
    } else (password === confirmPassword)
    register({ email, password })
      .then((data) => {
        if (data.error) {
          setFormValues({
            ...formValues,
            error: data.error,
            loading: false,
            success: false,
          });
        } else {
          setFormValues({ ...formValues, success: true });
        }
      })
      .catch();
  }

  const errorMessage = () => {
    return (
      <div className='error-message' style={{ display: error ? "" : "none", color: "red"}}>{error}</div>
    )
  }

const loadingMessage = () => {
  return (
    loading && (
      <div
        className="loading-message"
        style={{ display: error ? "" : "none", color: "red" }}
      >
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    )
  );
};

const successMessage = () => {
  return (
    success && (
      <div>
        <center><p className='login_redirect mt-2'>Account Created!<p>Start your High-End Experience now!</p><Link to="/login">Login</Link></p></center>
      </div>
    )
  )
}

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
            {errorMessage()}
            {loadingMessage()}
            {successMessage()}
          </div>

          <form className="space-y-6">
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
                  Enter a password:
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
                    maxLength="100"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,100}$"
                    onChange={handleChange("password")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide text-left"
                >
                  Re-enter your password:
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
                    maxLength="100"
                    pattern={password}
                    onChange={handleChange("confirmPassword")}
                    onPaste={(e) => {
                      e.preventDefault();
                      false;
                    }}
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
                  name="customerCategory"
                  value="Retail"
                  className="focus:ring-black focus:ring-inset-0 focus:ring-0 text-black shadow-md shadow-black outline focus:outline-black focus:border focus:border-black"
                  defaultChecked
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
                  name="customerCategory"
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
                  name="customerCategory"
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
                  name="customerCategory"
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
                onClick={onSubmit}
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
              to={"/login"}
              className="font-semibold text-[#00ff00] hover:text-[#00dd00]"
            >
              <span>
                <p className="ml-2">Sign-in</p>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
