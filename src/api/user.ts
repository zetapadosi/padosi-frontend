export const register = async (user) => {
  try {
    let response = await fetch("https://padosi-backend.herokuapp.com/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return err;
  }
};
