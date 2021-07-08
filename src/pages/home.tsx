import MainPage from "../components/pages/MainPage";
import LoginPage from "../components/pages/LoginPage";
import useAppSession from "../hooks/useAppSession";
import { useRouter } from "next/router";
import FullPageLoader from "../components/FullPageLoader";

export default function Home() {
  const { loading, authenticated } = useAppSession();

  if (loading) return <FullPageLoader />;
  if (authenticated) return <MainPage />;
  return null;
}
