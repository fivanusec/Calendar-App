import Navigation from "../../Components/Navigation";
import { Container } from "react-bootstrap";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container fluid>{children}</Container>
    </>
  );
};
