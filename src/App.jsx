import { useState, useEffect, useContext } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import Login from "./components/Auth/Login";
import { setLocalStorage } from "./utils/localStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const storedUserJSON = localStorage.getItem("loggedInUser");
    if (storedUserJSON && authData) {
      const storedUser = JSON.parse(storedUserJSON);

      let fullUserData;
      if (storedUser.role === "admin") {
        fullUserData = authData.admin.find((a) => a.id === storedUser.id);
      } else {
        fullUserData = authData.employees.find((e) => e.id === storedUser.id);
      }

      if (fullUserData) {
        setCurrentUser({ ...fullUserData, role: storedUser.role });
      } else {
        localStorage.removeItem("loggedInUser");
      }
    }
  }, [authData]);

  const handelLogin = (email, password) => {
    if (!authData) return;

    // Check for admin
    const admin = authData.admin.find(
      (e) => e.email === email && password === e.password
    );
    if (admin) {
      const adminWithRole = { ...admin, role: "admin" };
      setCurrentUser(adminWithRole);

      localStorage.setItem("loggedInUser", JSON.stringify(adminWithRole));
      return;
    }

    const employee = authData.employees.find(
      (e) => e.email === email && e.password === e.password
    );
    if (employee) {
      const employeeWithRole = { ...employee, role: "employee" };
      setCurrentUser(employeeWithRole);

      localStorage.setItem("loggedInUser", JSON.stringify(employeeWithRole));
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("loggedInUser");
  };
  

  if (!currentUser) {
    return <Login handelLogin={handelLogin} />;
  }

  if (currentUser.role === "admin") {
    return (
      <AdminDashboard
        data={currentUser}
        users={authData}
        logout={handleLogout}
      />
    );
  }

  if (currentUser.role === "employee") {
    return <EmployeeDashboard data={currentUser} logout={handleLogout} />;
  }

  return <Login handelLogin={handelLogin} />;
};

export default App;
