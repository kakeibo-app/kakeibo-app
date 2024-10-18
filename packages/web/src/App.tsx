import { Routes, Route, Navigate } from "react-router-dom";
import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/clerk-react";
import Login from "./Login";
import Dashboard from "./components/Dashboard";

function App() {
  const { isSignedIn } = useAuth();

  console.log("isSignedIn", isSignedIn);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="sso-callback"
        element={<AuthenticateWithRedirectCallback />}
      />
      <Route
        path="/"
        element={isSignedIn ? <Dashboard /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;
