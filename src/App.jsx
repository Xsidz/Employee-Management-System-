import { useState,useEffect } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import Login from "./components/Auth/Login";
import {setLocalStorage} from "./utils/localStorage.jsx"

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLocalStorage()
  }, [])
  

  const handelLogin = (email, password) => {
    if (email == "admin@123.com" && password == 123) {
      setUser("admin");
    } else if (email == "user@123.com" && password == 123) {
      setUser("employee");
    } else {
      console.log("Invalid Credentials");
    }
  };
  
  return (
    <>
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard />
      ) : (
        <Login handelLogin={handelLogin} />
      )}
    </>
  );
};

export default App;
