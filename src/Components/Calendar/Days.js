import { Container } from "react-bootstrap";
import { format, startOfWeek, addDays } from "date-fns";

export const Days = ({ currentMonth }) => {
  const dateFormat = "EEE";
  let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
  const days = [...new Array(7)].map((_, i) => (
    <Container className="col col-center" key={i}>
      {format(addDays(startDate, i), dateFormat)}
    </Container>
  ));

  return <div className="days row">{days}</div>;
};
