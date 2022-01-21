import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import {
  ThemeBrand,
  ThemeNavbarText,
  ThemeNavigation,
} from "./Navigation.style";
import Button from "../Button";

export const Navigation = () => {
  const [redirect, setRedirect] = useState(false);
  return (
    <ThemeNavigation>
      <Container>
        <ThemeBrand>Calendar app</ThemeBrand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <ThemeNavbarText>
            <Button variant="outline-light">Logout</Button>
          </ThemeNavbarText>
        </Navbar.Collapse>
      </Container>
    </ThemeNavigation>
  );
};
