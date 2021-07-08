import Cookies from "js-cookie";

const signIn = async (user) => {
  try {
    let response = await fetch("https://padosi-backend.herokuapp.com/api/auth/login", {
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

const signOut = async () => {
  try {
    let response = await fetch("https://padosi-backend.herokuapp.com/api/auth/logout", {
      method: "GET",
    });
    Cookies.remove("t");
    localStorage.removeItem("userFrom");
    return await response.json();
  } catch (err) {
    return err;
  }
};

export { signIn, signOut };
