import { startOfWeek, format, addDays, isSameDay } from "date-fns";

import { Container } from "react-bootstrap";

export const Cells = ({ currentMonth, onDateClickHandle, selectedDate }) => {
  const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

  const days = [...new Array(7)].map((_, i) => (
    <Container
      className={`col cell ${
        isSameDay(addDays(startDate, i), new Date())
          ? "today"
          : isSameDay(addDays(startDate, i), selectedDate)
          ? "selected"
          : ""
      }`}
      key={addDays(startDate, i)}
      onClick={() => {
        onDateClickHandle(addDays(startDate, i));
      }}
    >
      <span className="number">{format(addDays(startDate, i), "d")}</span>
      <span className="bg">{format(addDays(startDate, i), "d")}</span>
    </Container>
  ));

  const rows = [...new Array(1)].map((_, i) => (
    <Container className="row" key={addDays(startDate, i)}>
      {days}
    </Container>
  ));

  return <Container className="body">{rows}</Container>;
};
