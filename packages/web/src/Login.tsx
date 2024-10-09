import { useAuth, useSignIn } from "@clerk/clerk-react";
import { Button, Container, Title } from "@mantine/core";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useSignIn();
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container size="xs" style={{ textAlign: "center", marginTop: "50px" }}>
      <Title order={2} mb="xl">
        Welcome! Please sign in
      </Title>

      <Button
        size="lg"
        onClick={() => {
          signIn?.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/",
          });
        }}
      >
        Sign in with Google
      </Button>
    </Container>
  );
};

export default Login;
