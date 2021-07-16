import MainPage from "../components/pages/MainPage";
import LoginPage from "../components/pages/LoginPage";
import useAppSession2 from "../hooks/useAppSession";
import { useRouter } from "next/router";
import FullPageLoader from "../components/FullPageLoader";

export default function Home() {
  return <MainPage />;
}
