import ProfilePage from "../../components/pages/ProfilePage";
import useAppSession from "../../hooks/useAppSession";
import FullPageLoader from "../../components/FullPageLoader";

export default function Profile() {
  const { loading, isLoggedIn } = useAppSession();

  if (isLoggedIn) return <ProfilePage />;
  if (loading) return <FullPageLoader />;

  return null;
}
