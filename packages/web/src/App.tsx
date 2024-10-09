import { Routes, Route, Navigate } from "react-router-dom";
import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/clerk-react";
import Login from "./Login";
import { Button, Container, Title } from "@mantine/core";

function App() {
  const { isSignedIn, signOut } = useAuth();

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
        element={
          isSignedIn ? (
            <Container
              size="xs"
              style={{ textAlign: "center", marginTop: "50px" }}
            >
              <Title order={2} mb="xl">
                Sign out by clicking the button below
              </Title>
              <Button
                size="lg"
                color="red"
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </Button>
            </Container>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
