import { useState } from "react";
import LoginPage from "../components/LoginPage";
import MainPage from "../components/MainPage";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return isLoggedIn ? <MainPage /> : <LoginPage />;
}
