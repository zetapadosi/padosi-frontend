import axios from "../utils/axiosInstance";

// export const register = async (user) => {
//   try {
//     let response = await fetch("https://padosi-backend.herokuapp.com/api/user/register", {
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

export const register = async (user: User) => {
  try {
    let response = await axios.post("user/register", user);
    return response.data;
  } catch (err) {
    console.error(err);
    if (err.response.data) return err.response.data;
  }
};

export const getUserProfile = async (userId?: string) => {
  try {
    let response;
    if (userId) response = await axios.get(`user/${userId}`);
    else response = await axios.get("user");
    return response.data.value;
  } catch (err) {
    console.error(err);
  }
};

export const updateBio = async (bio: { bioText: string }) => {
  try {
    let response = await axios.put("user/bio", bio);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateDistance = async (distance: { distance: number }) => {
  try {
    let response = await axios.put("user/distance", distance);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

interface User {
  name: string;
  email: string;
  picture: string;
  userFrom: "google" | "facebook";
  latitude: number;
  longitude: number;
  area: string;
}
