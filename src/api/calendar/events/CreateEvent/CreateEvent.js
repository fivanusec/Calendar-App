import axios from "axios";

export const CreateEvent = (calendarId, data) =>
  axios.post(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
    {
      summary: data.naziv,
      start: {
        dateTime: new Date(data.datumPocetka).toISOString(),
      },
      end: {
        dateTime: new Date(data.datumKraja).toISOString(),
      },
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("userData")}`,
        Accept: "appliaction/json",
      },
    }
  );
