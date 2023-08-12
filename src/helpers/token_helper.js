export const getToken = (type = "access") => {
  const token = JSON.parse(localStorage.getItem(type));
  return token;
};

export const getUserData = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};
