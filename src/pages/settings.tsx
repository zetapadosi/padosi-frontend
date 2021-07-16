import SettingsPage from "../components/pages/SettingsPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";

export default function Search() {
  const { loading, isLoggedIn } = useAppSession();

  if (isLoggedIn) return <SettingsPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
