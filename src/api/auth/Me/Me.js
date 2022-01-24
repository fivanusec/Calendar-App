import axios from "axios";

export const Me = () =>
  axios
    .get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${sessionStorage
        .getItem("tokenId")
        .toString()
        .replace(/["]/g, "")}`
    )
    .then((data) => data);
