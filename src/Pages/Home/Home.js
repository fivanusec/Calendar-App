import HomeLayout from "../../Layouts/Home";
import ListEvents from "../../api/calendar/events";
import { ListCalendars } from "../../api/calendar/calendars/ListCalendars";
import { useEffect, useState } from "react";
import moment from "moment";
import { Form } from "react-bootstrap";

export const Home = () => {
  const [events, setEvents] = useState(null);
  const [calendars, setCalendarList] = useState(null);
  const [calendar, setCalendar] = useState(null);

  const handleChange = (e) => {
    setCalendar(e.target.value);
  };

  useEffect(() => {
    ListCalendars().then((data) => {
      setCalendarList(data);
      console.log(data);
      setCalendar(data.items[0].id);
    });
  }, []);

  useEffect(() => {
    ListEvents(calendar).then((data) => {
      setEvents(data);
    });
  }, [calendar]);

  return (
    <HomeLayout>
      <Form.Select className="mt-5" onChange={handleChange}>
        {calendars?.items.map((e) => (
          <option key={e.colorId} value={e.id}>
            {e.summary}
          </option>
        ))}
      </Form.Select>
      <ul className="mt-5">
        {events?.items.map((e) => (
          <li key={e.id}>
            <p>{e.summary}</p>
            <p>{moment(e.start.dateTime).format("DD-MM-YYYY")}</p>
          </li>
        ))}
      </ul>
    </HomeLayout>
  );
};
