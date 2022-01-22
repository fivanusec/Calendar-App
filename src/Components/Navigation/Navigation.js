import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import {
  ThemeBrand,
  ThemeNavbarText,
  ThemeNavigation,
} from "./Navigation.style";
import LogoutUser from "../../api/auth/LogoutUser";
import Button from "../../Components/Button";
import { Redirect } from "react-router-dom";

export const Navigation = () => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <ThemeNavigation>
      <Container>
        <ThemeBrand>Calendar app</ThemeBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <ThemeNavbarText>
            <Button
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
