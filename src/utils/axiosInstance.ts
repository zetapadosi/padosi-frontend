import axios from "axios";

export default axios.create({
  baseURL: "https://padosi-backend.herokuapp.com/api/",
  withCredentials: true,
  // headers: { Authorization: `Bearer ${Cookies.get("t")}` },
});

// Use interceptors for error handling
