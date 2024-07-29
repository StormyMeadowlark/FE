import axios from "axios";
import "react";

//USER AND AUTH ROUTES

//LOGIN
export const login = (user) => {
  // API call to sign in a user
  return axios
    .post(
      "http://localhost:2015/api/v1/auth/login",
      JSON.stringify(user),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
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
    .post(
      "http://localhost:2015/api/v1/auth/register",
      JSON.stringify(user),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
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
      .get("http://localhost:2015/api/v1/auth/logout")
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





export const fetchYears = async () => {
  const years = [];
  for (let year = 1981; year <= 2025; year++) {
    years.push(year.toString());
  }
  return years;
};

export const fetchMakes = async (year) => {
  if (year >= 1981 && year <= 2025) {
    const response = await axios.get(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
    );
    return response.data.Results.map((make) => make.Make);
  }
  return [];
};

export const fetchModels = async (year, make) => {
  if (year && make) {
    const response = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/year/${year}?format=json`
    );
    return response.data.Results.map((model) => model.Model_Name);
  }
  return [];
};

export const decodeVin = async (vin) => {
  try {
    const response = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`
    );
    return response.data.Results[0];
  } catch (error) {
    throw new Error("Error decoding VIN:", error);
  }
};

export const sendEmail = async (emailData) => {
  try {
    const response = await axios.post("/api/send-email", emailData);
    return response.data;
  } catch (error) {
    throw new Error("Error sending email:", error);
  }
};
