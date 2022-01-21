import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const ThemeNavigation = styled(Navbar)`
  background-color: #53c972;
  padding: 25px;
  color: white !important;
`;

export const ThemeBrand = styled(Navbar.Brand)`
  color: white !important;
  text-transform: uppercase;
  font-size: 28px;
`;

export const ThemeNavbarText = styled(Navbar.Text)`
  color: white !important;
  font-size: 18px;
`;
