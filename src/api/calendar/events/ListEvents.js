import axios from "axios";
import moment from "moment";

export const ListEvents = async (
  calendar,
  count = 7,
  startTime = moment().startOf("isoWeek").toISOString()
) => {
  let eventData;
  await axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?maxResults=${count}&timeMin=${startTime}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userData")}`,
          Accept: "appliaction/json",
        },
      }
    )
    .then((data) => {
      eventData = data.data;
    })
    .catch((err) => {
      console.error(err);
    });
  return eventData;
};
