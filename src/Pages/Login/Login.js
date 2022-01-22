import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import isUserLoggedin from "../../api/auth/isUserLoggedin";
import { LoginUser } from "../../api/auth/LoginUser/LoginUser";

export const Login = () => {
  const [redirect, setRedierct] = useState(false);

  const responseGoogle = (response) => {
    if (LoginUser(response)) {
      setRedierct(true);
    }
  };

  if (redirect || isUserLoggedin()) {
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
