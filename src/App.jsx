import { useState,useEffect, useContext } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import Login from "./components/Auth/Login";
import {setLocalStorage} from "./utils/localStorage.jsx"
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
  useEffect(() => {
    setLocalStorage()
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser && authData) {
      const parsedUser = JSON.parse(storedUser);
      console.log(parsedUser)
      
      setUser(parsedUser.role); 
      if (storedUser && authData) {
        let fullUserData;
        
        if (storedUser.role === 'admin') {
          fullUserData = authData.admin.find(a => a.id === parsedUser.id);
        } else {
          fullUserData = authData.employees.find(e => e.id === parsedUser.id);
        }
        
        // If the user exists in our data, restore them to the state
        if (fullUserData) {
          setLoggedInUserData(fullUserData);
        } 
      }
      console.log(user)// Set the user role from localStorage
    }
  }, [authData,user])
  

  

  const handelLogin = (email, password) => {
    if (!authData) return;

    const admin = authData.admin.find(
      (e) => email === e.email && password === e.password
    );
    if (admin) {
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem("loggedInUser", JSON.stringify({role:"admin", id : admin.id})); // Store full admin object
      return;
    }

    const employee = authData.employees.find(
      (e) => email === e.email && password === e.password
    );
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({role:"employee", id : employee.id})); // Store full employee object
      console.log(employee)
    } else {
      console.log("Invalid Credentials");
      alert("Invalid credentials. Please try again.");
    }
  };
  
  const logout = ()=>{
     setUser(null);
    setLoggedInUserData(null);
   localStorage.removeItem("loggedInUser");
  }


  return (
    <>
      {user == "admin" ? (
        <AdminDashboard data = {loggedInUserData} logout ={logout} />
      ) : user == "employee" ? (
        <EmployeeDashboard data = {loggedInUserData} logout ={logout}/>
      ) : (
        <Login handelLogin={handelLogin}  />
      )}
    </>
  );
};

export default App;
