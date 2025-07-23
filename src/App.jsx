import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import Login from "./components/Auth/Login";
import { setLocalStorage } from "./utils/localStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const ProtectedRoute = ({ currentUser, role, children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  if (currentUser.role !== role) {
    return <Navigate to="/" />;
  }
  return children;
};

const HomeRedirect = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <Navigate to={`/${currentUser.role}`} />;
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const authData = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for navigation

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

    const admin = authData.admin.find(
      (e) => e.email === email && password === e.password
    );
    if (admin) {
      const adminWithRole = { ...admin, role: "admin" };
      setCurrentUser(adminWithRole);
      localStorage.setItem("loggedInUser", JSON.stringify(adminWithRole));
      navigate("/admin"); // Redirect after login
      return;
    }

    // FIX: The password check was 'e.password === e.password' which is always true.
    const employee = authData.employees.find(
      (e) => e.email === email && password === e.password
    );
    if (employee) {
      const employeeWithRole = { ...employee, role: "employee" };
      setCurrentUser(employeeWithRole);
      localStorage.setItem("loggedInUser", JSON.stringify(employeeWithRole));
      navigate("/employee"); // Redirect after login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("loggedInUser");
  };

  // The <BrowserRouter> should be in your main.jsx, not here.
  return (
    
    <Routes>
      <Route
        path="/login"
        element={
          // If user is already logged in, redirect them from the login page
          currentUser ? (
            <Navigate to="/" />
          ) : (
            <Login handelLogin={handelLogin} />
          )
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute currentUser={currentUser} role="admin">
            <AdminDashboard
              data={currentUser}
              users={authData}
              logout={handleLogout}
            />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee"
        element={
          <ProtectedRoute currentUser={currentUser} role="employee">
            <EmployeeDashboard data={currentUser} logout={handleLogout} />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<HomeRedirect currentUser={currentUser} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;