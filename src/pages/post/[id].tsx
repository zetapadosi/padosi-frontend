import FullPageLoader from "../../components/FullPageLoader";
import PostPage from "../../components/pages/PostPage";
import useAppSession from "../../hooks/useAppSession";

export default function Profile() {
  const { loading, authenticated } = useAppSession();
  if (loading) return <FullPageLoader />;
  if (authenticated) return <PostPage />;
  return null;
}
