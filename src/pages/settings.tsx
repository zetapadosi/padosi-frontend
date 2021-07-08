import SettingsPage from "../components/pages/SettingsPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";

export default function Search() {
  const { loading, authenticated } = useAppSession();

  if (loading) return <FullPageLoader />;
  if (authenticated) return <SettingsPage />;
  return null;
}
