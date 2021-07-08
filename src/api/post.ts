import Cookies from "js-cookie";

export const getWallPosts = async (userId) => {
  try {
    let response = await fetch(
      "https://padosi-backend.herokuapp.com/api/post/wall/" + userId + "?page=0&limit=10",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookies.get("t"),
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (userId, post) => {
  try {
    let response = await fetch("https://padosi-backend.herokuapp.com/api/post/create/" + userId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + Cookies.get("t"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
