import NewPostPage from "../components/pages/NewPostPage";
import FullPageLoader from "../components/FullPageLoader";
import useAppSession from "../hooks/useAppSession";

export default function NewPost() {
  const { loading, isLoggedIn } = useAppSession();

  if (isLoggedIn) return <NewPostPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
