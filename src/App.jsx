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
  
  // useEffect(() => {
    
  // if(authData){
  //   const loggedInUser = localStorage.getItem("loggedInUser");
  //   if(loggedInUser){
  //     setUser(loggedInUser.role)
  //   }
  // }
  //   return () => {
      
  //   }
  // }, [authData])
  

  

  const handelLogin = (email, password) => {
    if (authData && authData.admin.find((e)=> email == e.email && password == e.password)) {
      setUser("admin");
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
      const user = authData.admin.find((e)=>email == e.email)
      console.log(user.id)
     
    } else if (authData ) {
      const employee = authData.employees.find((e)=> email == e.email && password == e.password)
      if(employee){
        setUser("employee");
        setLoggedInUserData(employee)
      }
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
    } else {
      console.log("Invalid Credentials");
    }
  };
  
  


  return (
    <>
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data = {loggedInUserData} />
      ) : (
        <Login handelLogin={handelLogin} />
      )}
    </>
  );
};

export default App;
