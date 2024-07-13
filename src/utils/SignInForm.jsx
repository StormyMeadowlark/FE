import { Link, Navigate } from "react-router-dom";
import Logo from "../components/limeGreenAndBlackLogo.svg?react";
import { useState } from "react";
import { login, authenticate} from "../Backend"



export function SignInForm() {

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false,
  });

  const { email, password, error, loading, success} = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }

  const onSubmit = async event => {
    event.preventDefault();
    setValues({ ...values, success: false, loading: true });
    login({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false, success: false })
        } else {
          authenticate(data, () => {
            setValues({ ...values, success: true });
          })
        }
      })
      .catch();
  }
  const errorMessage = () => {
    return (<div className="error-message" style={{ display: error ? "" : "none", color: "red" }}>
    {error}
    </div>)
  }

  const loadingMessage = () => {
    return (
      loading && (
        <div className="loading-message" style={{ display: error ? "" : "none", color: "red" }}>
          <div className="loading-spinner"></div>
          <p>Leading...</p>
        </div>
        
      )
    )
  }




  return (
    success ? <Navigate to="/dashboard" /> :
    <div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-[#333333] px-6 py-12 shadow-[#00ff00] shadow-md sm:rounded-lg sm:px-12 ring-black ring-inset ring-2">
          <div className="sm:mx-auto sm:w-full sm:max-w-md ">
            <Link to="/">
              <Logo
                className="mx-auto w-auto h-[12rem] "
                alt="H.E.M Automotive"
              />
            </Link>
            <h2 className="mb-6 text-center text-2xl text-stroke text-stroke-black text-stroke-fill-[#00ff00] tracking-widest  font-Bungee">
              Sign into your account
            </h2>
            {loadingMessage()}
            {errorMessage()}
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  placeholder="HEMautomotive@example.com"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa] active:bg-[#aaaaaa]"
                  value={email}
                  onChange={handleChange("email")}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-base font-medium leading-6 text-white font-Urbanist tracking-wide"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••••"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-md shadow-black ring-1 ring-inset ring-black focus:ring-[#00ff00] placeholder:text-black focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#aaaaaa]"
                  minLength="6"
                  value={password}
                  onChange={handleChange("password")}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-black text-black focus:ring-[#00ff00]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-white font-urbanist tracking-wide"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <Link
                  to="#"
                  className="font-semibold text-[#00ff00] hover:text-[#00dd00] font-Play tracking-wide"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
                <button
                  className="flex w-full justify-center rounded-md bg-[#00ff00] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md hover:bg-[#00dd00] focus-visible:outline shadow-black hover:shadow-inner hover:shadow-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-Play"
                  onClick={onSubmit}
                >
                  Log-in
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
                  Or continue with
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
            Not a member?{" "}
            <Link
              to={"/register"}
              className="font-semibold leading-6 text-[#00ff00] hover:text-[#00dd00]"
            >
              <span>
                <p className="ml-2">Register Here</p>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


export default SignInForm