import { Container } from "react-bootstrap";
import Calendar from "../Calendar/Calendar";
import EventTable from "../EventTable";
import { useState } from "react";
import { startOfDay, endOfDay } from "date-fns";

export const WeekTable = ({ calendars }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <EventTable
        startDate={startOfDay(selectedDate).toISOString()}
        endDate={endOfDay(selectedDate).toISOString()}
        calendar={calendars}
      />
    </Container>
  );
};
