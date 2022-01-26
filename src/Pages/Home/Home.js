/* eslint-disable eqeqeq */
import HomeLayout from "../../Layouts/Home";
import ListCalendars from "../../api/calendar/calendars";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import Button from "../../Components/Button";
import EventTable from "../../Components/EventTable";
import Select from "../../Components/Select";
import { useState } from "react";
import WeekTable from "../../Components/WeekTable";
import { startOfDay, endOfDay } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalWindow from "../../Components/Modal";
import { CreationForm } from "../../Components/CreationForm/CreationForm";
import { Calendar as ReactCalendar } from "react-calendar";

export const Home = () => {
  const [range, setRange] = useState(7);
  const [modal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
      <ModalWindow
        show={modal}
        handleClose={() => handleClose()}
        title="Kreiraj dogadaj"
      >
        <CreationForm
          calendarId={calendars?.items[0].id}
          closeModal={handleClose}
        />
      </ModalWindow>
      <Container className="mt-4 text-center">
        <Row className="justify-content-md-center d-flex flex-row">
          <Col md={6}>
            <Select defaultValue={7} onChange={handleChange}>
              <option value={7}>7 dana</option>
              <option value={1}>Danas</option>
              <option value={30}>30 dana</option>
            </Select>
          </Col>
          <Col>
            <Button
              size="sm"
              style={{
                backgroundColor: "#53c972",
                borderColor: "#53c972",
                marginLeft: "1rem",
              }}
              onClick={() => handleShow()}
            >
              Kreairaj dogadaj{" "}
              <FontAwesomeIcon className="ml-4" icon={faPlus} />
            </Button>
          </Col>
        </Row>
      </Container>
      {range == 1 ? (
        <Container className="mt-5 text-center">
          <h2>{range == 1 ? "Danas" : `${range} dana`}</h2>
          {isCalendarsLoading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <EventTable
              startDate={startOfDay(new Date()).toISOString()}
              endDate={endOfDay(new Date()).toISOString()}
              calendar={calendars?.items[0].id}
            />
          )}
        </Container>
      ) : null}
      {range == 7 ? (
        <Container className="mt-5 text-center">
          <h2>{range == 1 ? "Danas" : `${range} dana`}</h2>
          {isCalendarsLoading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <Container className="d-flex flex-column">
              <WeekTable calendars={calendars?.items[0].id} />
            </Container>
          )}
        </Container>
      ) : null}
      {range == 30 ? (
        <Container className="mt-5 text-center">
          <h2>{range == 1 ? "Danas" : `${range} dana`}</h2>
          {isCalendarsLoading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <Row className="d-flex flex-row">
              <Col>
                <ReactCalendar
                  className="mr-2"
                  onChange={changeDate}
                  value={date}
                />
              </Col>
              <Col>
                <EventTable
                  startDate={startOfDay(date).toISOString()}
                  endDate={endOfDay(date).toISOString()}
                  calendar={calendars?.items[0].id}
                />
              </Col>
            </Row>
          )}
        </Container>
      ) : null}
    </HomeLayout>
  );
};
