export const auth = (res) => {
  let postData;

  if (res) {
    postData = {
      name: res.profileObj.givenName,
      email: res.profileObj.email,
      token: res.tokenObj.access_token,
    };
  }

  return postData;
};
