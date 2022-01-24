// Simulate api call to logout user

export const LogoutUser = () => {
  if (sessionStorage.getItem("userData")) {
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("tokenId");
    return true;
  }
  return false;
};
