import FullPageLoader from "../../components/FullPageLoader";
import PostPage from "../../components/pages/PostPage";
import useAppSession from "../../hooks/useAppSession";

export default function Profile() {
  const { loading, isLoggedIn } = useAppSession();

  if (isLoggedIn) return <PostPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
