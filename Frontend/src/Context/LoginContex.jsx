import { createContext, useEffect, useState } from "react";

export const LoginContex = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
  }, []);

  // Regular login
  const login = (token, userData) => {
    const normalizedUser = {
      name: userData.name,
      email: userData.email,
      picture: userData.picture,
    };
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(normalizedUser));
    setUser(normalizedUser);
    setToken(token);
  };

  // Google login
  const googleLogin = (googleUser) => {
    const normalizedUser = {
      name: googleUser.name || googleUser.given_name || "Guest",
      email: googleUser.email,
      picture: googleUser.picture,
    };
    localStorage.setItem("user", JSON.stringify(normalizedUser));
    setUser(normalizedUser);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  return (
    <LoginContex.Provider value={{ user, token, login, googleLogin, logout }}>
      {children}
    </LoginContex.Provider>
  );
};
