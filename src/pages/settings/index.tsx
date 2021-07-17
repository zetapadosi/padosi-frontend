import FullPageLoader from "../../components/FullPageLoader";
import SettingsPage from "../../components/pages/SettingsPage";
import useAppSession from "../../hooks/useAppSession";

export default function Search() {
  const { loading, isLoggedIn } = useAppSession();

  if (isLoggedIn) return <SettingsPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
