import NewPostPage from "../components/pages/NewPostPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";

export default function NewPost() {
  const { loading, authenticated } = useAppSession();

  if (loading) return <FullPageLoader />;
  if (authenticated) return <NewPostPage />;
  return null;
}
