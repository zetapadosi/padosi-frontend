import ProfilePage from "../../components/pages/ProfilePage";
import useAppSession from "../../hooks/useAppSession";
import FullPageLoader from "../../components/FullPageLoader";

export default function Profile() {
  const { loading, authenticated, isLoggedIn } = useAppSession();

  if (authenticated || isLoggedIn) return <ProfilePage />;
  if (loading) return <FullPageLoader />;

  return null;
}
