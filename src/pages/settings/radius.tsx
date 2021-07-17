import FullPageLoader from "../../components/FullPageLoader";
import EditRadiusPage from "../../components/pages/EditRadiusPage";

import useAppSession from "../../hooks/useAppSession";

export default function Radius() {
  const { loading, isLoggedIn } = useAppSession();

  if (isLoggedIn) return <EditRadiusPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
