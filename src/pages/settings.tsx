import SettingsPage from "../components/pages/SettingsPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";

export default function Search() {
  const { loading, authenticated, isLoggedIn } = useAppSession();

  if (authenticated || isLoggedIn) return <SettingsPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
