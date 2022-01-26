import axios from "axios";
import { endOfDay } from "date-fns";

export const ListEvents = (
  calendar,
  results = null,
  startTime = new Date().toISOString(),
  endTime = endOfDay(new Date()).toISOString()
) => {
  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?${
        results ? `maxResults=${results}&` : ""
      }timeMin=${startTime}&timeMax=${endTime}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userData")}`,
          Accept: "appliaction/json",
        },
      }
    )
    .then((data) => data.data)
    .catch((err) => {
      console.error(err);
    });
};
