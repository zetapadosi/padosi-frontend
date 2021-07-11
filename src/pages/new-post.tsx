import NewPostPage from "../components/pages/NewPostPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";

export default function NewPost() {
  const { loading, authenticated, isLoggedIn } = useAppSession();

  if (authenticated || isLoggedIn) return <NewPostPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
