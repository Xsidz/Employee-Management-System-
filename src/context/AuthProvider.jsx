/* eslint-disable react-refresh/only-export-components */
import React, { useState,useEffect, createContext } from "react";
import { getLocalStorage } from "../utils/localStorage";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin });
  }, []);

  return <div>


    <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>

  </div>;
};

export default AuthProvider;
