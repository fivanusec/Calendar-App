import { Container } from "react-bootstrap";
import Button from "../Button";
import { subWeeks, getWeek, addWeeks } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <Button size="sm" onClick={() => changeWeekHandle("prev")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </Container>
      <div>{currentWeek}</div>
      <Container className="col col-end">
        <Button size="sm" onClick={() => changeWeekHandle("next")}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Container>
    </Container>
  );
};
