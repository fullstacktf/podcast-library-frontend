import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) {
    return JSON.parse(userStr);
  } else return null;
};

export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const setUserSession = (token: string) => {
  sessionStorage.setItem("token", token);
  const userToken = jwt_decode(token);
  sessionStorage.setItem("user", JSON.stringify(userToken));
};

export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

export const HandleLogout = () => {
  toast("Bye! you have logged out", {
    icon: "👋",
    style: {
      background: "#333",
      color: "#fff",
    },
  });
  removeUserSession();
  window.location.reload();
};
