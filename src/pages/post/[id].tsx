import FullPageLoader from "../../components/FullPageLoader";
import PostPage from "../../components/pages/PostPage";
import useAppSession from "../../hooks/useAppSession";

export default function Profile() {
  const { loading, authenticated, isLoggedIn } = useAppSession();

  if (authenticated || isLoggedIn) return <PostPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
