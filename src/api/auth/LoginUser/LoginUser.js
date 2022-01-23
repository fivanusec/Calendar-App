// Simulate call to api to retrive data from db and set the session.

export const LoginUser = (res) => {
  if (res) {
    sessionStorage.setItem("userData", JSON.stringify(res.accessToken));
    return true;
  }
  return false;
};
