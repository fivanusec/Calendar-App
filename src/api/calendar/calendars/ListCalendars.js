import axios from "axios";

export const ListCalendars = async () => {
  let calendars;
  await axios
    .get("https://www.googleapis.com/calendar/v3/users/me/calendarList", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("userData")}`,
        Accept: "appliaction/json",
      },
    })
    .then((data) => {
      calendars = data.data;
    })
    .catch((err) => {
      console.error(err);
    });
  return calendars;
};
