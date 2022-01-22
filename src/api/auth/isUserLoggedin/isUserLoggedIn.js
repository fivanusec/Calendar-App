// Simulate call to ai that queries session for user

export const isUserLoggedIn = () => {
  if (sessionStorage.getItem("userData")) {
    return true;
  }
  return false;
};
