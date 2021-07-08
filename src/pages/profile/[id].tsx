import ProfilePage from "../../components/pages/ProfilePage";
import useAppSession from "../../hooks/useAppSession";
import FullPageLoader from "../../components/FullPageLoader";

export default function Profile() {
  const { loading, authenticated } = useAppSession();

  if (loading) return <FullPageLoader />;

  if (authenticated) return <ProfilePage />;
  return null;
}
