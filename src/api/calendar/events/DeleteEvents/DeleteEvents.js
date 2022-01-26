import axios from "axios";

export const DeleteEvents = (calendarId, eventId) =>
  axios.delete(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("userData")}`,
        Accept: "appliaction/json",
      },
    }
  );
