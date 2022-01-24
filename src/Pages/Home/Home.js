/* eslint-disable eqeqeq */
import HomeLayout from "../../Layouts/Home";
import ListCalendars from "../../api/calendar/calendars";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import EventTable from "../../Components/EventTable";
import Select from "../../Components/Select";
import moment from "moment";
import Calendar from "react-calendar";
import { useState } from "react";

export const Home = () => {
  const [range, setRange] = useState(1);
  const [date, setDate] = useState(new Date());

  const { data: calendars, isLoading: isCalendarsLoading } = useQuery(
    "calendars",
    ListCalendars
  );

  const handleChange = (e) => {
    setRange(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e);
  };

  return (
    <HomeLayout>
      <Container className="mt-4 text-center">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Select defaultValue={1} onChange={handleChange}>
              <option value={1}>Danas</option>
              <option value={7}>7 dana</option>
              <option value={30}>30 dana</option>
            </Select>
          </Col>
        </Row>
      </Container>
      {range == 1 || range == 7 ? (
        <Container className="mt-5 text-center">
          <h2>{range == 1 ? "Danas" : `${range} dana`}</h2>
          {isCalendarsLoading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <EventTable
              startDate={moment().startOf("day").toISOString()}
              endDate={
                range == 1
                  ? moment().endOf("day").toISOString()
                  : moment().add(range, "days").toISOString()
              }
              calendar={calendars?.items[0].id}
            />
          )}
        </Container>
      ) : null}
      {range == 30 ? (
        <Container className="mt-5 text-center">
          <h2>{range == 1 ? "Danas" : `${range} dana`}</h2>
          {isCalendarsLoading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <Container className="d-flex flex-column">
              <Calendar
                value={date}
                onChange={changeDate}
                minDate={new Date(moment().startOf("month").toISOString())}
                maxDate={new Date(moment().add(30, "days").toISOString())}
              />
              <EventTable
                startDate={moment(date).toISOString()}
                endDate={moment(date).endOf("day").toISOString()}
                calendar={calendars?.items[0].id}
              />
            </Container>
          )}
        </Container>
      ) : null}
    </HomeLayout>
  );
};
