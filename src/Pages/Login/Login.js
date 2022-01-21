import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export const Login = () => {
  const [redirect, setRedierct] = useState(false);

  const responseGoogle = (response) => {
    if (response) {
      sessionStorage.setItem("userData", JSON.stringify(response.accessToken));
      setRedierct(true);
    }
  };

  if (redirect || sessionStorage.getItem("userData")) {
    return (
      <Redirect
        to={{
          pathname: "/home",
        }}
      />
    );
  }

  return (
    <Container className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <Container className="text-center">
        <h2>Login to calendar app</h2>
      </Container>
      <br />
      <GoogleLogin
        clientId={
          "522177410788-7f1o94r1kveqif85s9c4vn92u5qfl3ok.apps.googleusercontent.com"
        }
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </Container>
  );
};
