import { Container } from "react-bootstrap";
import Button from "../Button";
import { subWeeks, getWeek, addWeeks } from "date-fns";

export const Footer = ({
  currentWeek,
  setCurrentMonth,
  setCurrentWeek,
  currentMonth,
}) => {
  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  return (
    <Container className="d-flex mt-5 mb-5">
      <Container className="col col-start">
        <Button
          size="sm"
          variant="success"
          onClick={() => changeWeekHandle("prev")}
        >
          Prosli tjedan
        </Button>
      </Container>
      <div>{currentWeek}</div>
      <Container className="col col-end">
        <Button
          size="sm"
          variant="success"
          onClick={() => changeWeekHandle("next")}
        >
          Sljedeci tjedan
        </Button>
      </Container>
    </Container>
  );
};
