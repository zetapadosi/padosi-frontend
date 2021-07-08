import SearchPage from "../components/pages/SearchPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";

export default function Search() {
  const { loading, authenticated } = useAppSession();

  if (loading) return <FullPageLoader />;
  if (authenticated) return <SearchPage />;
  return null;
}
