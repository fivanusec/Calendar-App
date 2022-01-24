import ListEvents from "../../api/calendar/events/ListEvents";
import moment from "moment";
import { Spinner } from "react-bootstrap";
import Button from "../../Components/Button";
import { useQuery } from "react-query";
import { EventTableStyle } from "./EventTable.style";

export const EventTable = ({
  calendar,
  count = null,
  startDate = moment().toISOString(),
  endDate = moment().endOf("isoWeek").toISOString(),
}) => {
  const { data: events, isLoading: isLoadingEvents } = useQuery(
    ["events", calendar, count, startDate, endDate],
    () => ListEvents(calendar, count, startDate, endDate)
  );
  return (
    <>
      {isLoadingEvents ? (
        <Spinner className="mt-5" animation="border" variant="success" />
      ) : (
        <EventTableStyle className="mt-4" striped bordered>
          <thead>
            <tr>
              <th>Naziv dogadaja</th>
              <th>Datum pocetka dogadaja</th>
              <th>Datum zavrsetka dogadaja</th>
            </tr>
          </thead>
          <tbody>
            {events?.items.map((e) => (
              <tr key={e.id}>
                <td>{e.summary}</td>
                <td>{moment(e.start.dateTime).format("DD-MM-YYYY HH:mm")}</td>
                <td>{moment(e.end.dateTime).format("DD-MM-YYYY HH:mm")}</td>
                <td>
                  <Button variant="danger">Obrisi</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </EventTableStyle>
      )}
    </>
  );
};
