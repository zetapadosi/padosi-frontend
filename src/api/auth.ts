import axios from "../utils/axiosInstance";

// const signIn = async (user) => {
//   try {
//     let response = await fetch("https://padosi-backend.herokuapp.com/api/auth/login", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

export const signIn = async (user: { email: string; userFrom: "google" | "facebook" }) => {
  try {
    let response = await axios.post("auth/login", user);
    return response.data;
  } catch (err) {
    console.log(err);
    if (err.response) return err.response.data;
  }
};

export const signOut = async () => {
  try {
    let response = await axios.get("auth/logout");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// const signOut = async () => {
//   try {
//     let response = await fetch("https://padosi-backend.herokuapp.com/api/auth/logout", {
//       method: "GET",
//     });
//     Cookies.remove("t");
//     localStorage.removeItem("userFrom");
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };
