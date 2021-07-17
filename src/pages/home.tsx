import MainPage from "../components/pages/MainPage";
import LoginPage from "../components/pages/LoginPage";
import useAppSession from "../hooks/useAppSession";
import { useRouter } from "next/router";
import FullPageLoader from "../components/FullPageLoader";

export default function Home() {
  const { loading, isLoggedIn } = useAppSession();

  if (isLoggedIn) return <MainPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
