// Simulate call to api to retrive data from db and set the session.

export const LoginUser = (res) => {
  if (res) {
    sessionStorage.setItem("userData", JSON.stringify(res.accessToken));
    sessionStorage.setItem("tokenId", JSON.stringify(res.tokenId).toString());
    return true;
  }
  return false;
};
