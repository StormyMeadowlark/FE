import axios from "axios";

//USER AND AUTH ROUTES

//LOGIN
export const login = (user) => {
  // API call to sign in a user
  return axios
    .post("http://localhost:4000/auth/login", JSON.stringify(user), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data; // Return response data
    })
    .catch((err) => {
      return err.response.data; // Return error response data
    });
};

//REGISTER
export const register = (user) => {
  // API call to sign up a user
  return axios
    .post("http://localhost:4000/auth/register", JSON.stringify(user), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data; // Return response data
    })
    .catch((err) => {
      return err.response.data; // Return error response data
    });
};

//SETTING THE JWT TOKEN IN USER'S BROWSER
export const authenticate = (data, next) => {
  // Storing JWT token in user's browser
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

//LOGOUT -> REMOVING JWT TOKEN
export const logout = (next) => {
  // Removing JWT token upon logout
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");

    axios
      .get("http://localhost:4000/api/logout")
      .then((response) => {
        console.log(response.data);
        next();
      })
      .catch((err) => console.log(err));
  }
};

//VALIDATION IF USER IS SIGNED IN
export const isAuthenticated = () => {
  // Checking if the user is authenticated
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt"))
    return JSON.parse(localStorage.getItem("jwt"));
  else return false;
};
