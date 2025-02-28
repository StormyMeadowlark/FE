import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Simulate checking auth status, you can replace this with your actual logic
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setUser({ name: "John Doe" });
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  const login = (userCredentials) => {
    localStorage.setItem("token", "dummy-token");
    setIsLoggedIn(true);
    setUser({ name: userCredentials.name });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
