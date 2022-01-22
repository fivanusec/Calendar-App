// Simulate api call to logout user

export const LogoutUser = () => {
  if (sessionStorage.getItem("userData")) {
    sessionStorage.removeItem("userData");
    return true;
  }
  return false;
};
