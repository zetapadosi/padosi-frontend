import SearchPage from "../components/pages/SearchPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";

export default function Search() {
  const { loading, authenticated, isLoggedIn } = useAppSession();

  if (authenticated || isLoggedIn) return <SearchPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
