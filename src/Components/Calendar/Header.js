import { Container } from "react-bootstrap";
import { format } from "date-fns";

export const Header = ({ currentMonth }) => {
  return (
    <Container className="mt-5">
      <Container>
        <h1>{format(currentMonth, "MM, yyyy")}</h1>
      </Container>
    </Container>
  );
};
