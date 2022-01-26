import React, { useState } from "react";
import { Navbar, Container, Spinner } from "react-bootstrap";
import {
  ThemeBrand,
  ThemeNavbarText,
  ThemeNavigation,
} from "./Navigation.style";
import LogoutUser from "../../api/auth/LogoutUser";
import Button from "../../Components/Button";
import { Redirect } from "react-router-dom";
import Me from "../../api/auth/Me";
import { useQuery } from "react-query";

export const Navigation = () => {
  const [redirect, setRedirect] = useState(false);
  const { data: user, isLoading } = useQuery("me", Me);
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <ThemeNavigation>
      <Container>
        <ThemeBrand>Calendar app</ThemeBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isLoading ? (
            <Spinner animation="border" variant="light" />
          ) : (
            <h4
              style={{
                margin: "10px",
              }}
            >{`${user.data.given_name} ${user.data.family_name}`}</h4>
          )}
          <ThemeNavbarText>
            <Button
              size="sm"
              onClick={() => {
                if (LogoutUser()) setRedirect(true);
              }}
              variant="outline-light"
            >
              Logout
            </Button>
          </ThemeNavbarText>
        </Navbar.Collapse>
      </Container>
    </ThemeNavigation>
  );
};
