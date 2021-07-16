import { useRouter } from "next/router";
import FullPageLoader from "../components/FullPageLoader";
import LoginPage from "../components/pages/LoginPage";
import useAppSession from "../hooks/useAppSession";

export default function Index() {
  const { loading, registrationStarted, isLoggedIn } = useAppSession();
  console.log({ loading });

  const router = useRouter();
  if (loading) return <FullPageLoader />;

  if (isLoggedIn) {
    router.replace("/home");
  } else if (registrationStarted) {
    router.replace("/select-location");
  } else return <LoginPage />;

  return null;
}
